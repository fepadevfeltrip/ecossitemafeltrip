import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import mrpDiagram from "@/assets/mrp-diagram.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface DiaryEntry {
  pillar: string;
  sentiment: number;
}

interface MapNote {
  id: string;
  title: string;
  content: string;
  audio_url: string | null;
  image_url: string | null;
  latitude: number;
  longitude: number;
}

export const MeuMapaTab = () => {
  const { toast } = useToast();
  const [radarData, setRadarData] = useState<DiaryEntry[]>([]);
  const [mapNotes, setMapNotes] = useState<MapNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRadarData();
    loadMapNotes();
  }, []);

  const loadRadarData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('diario_entries')
        .select('pillar, sentiment')
        .eq('user_id', user.id);

      if (error) throw error;

      // Aggregate by pillar (average sentiment)
      const pillars = ['Territory', 'Space', 'The Other', 'Identity', 'Body'];
      const aggregated = pillars.map(pillar => {
        const entries = data?.filter(e => e.pillar === pillar) || [];
        const avg = entries.length > 0 
          ? entries.reduce((sum, e) => sum + e.sentiment, 0) / entries.length 
          : 0;
        return { pillar, sentiment: avg };
      });

      setRadarData(aggregated);
    } catch (error) {
      console.error('Error loading radar data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMapNotes = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('map_pins')
        .select('*')
        .eq('user_id', user.id)
        .eq('type', 'anotacao')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMapNotes(data || []);
    } catch (error) {
      console.error('Error loading map notes:', error);
    }
  };

  const deleteNote = async (noteId: string, audioUrl: string | null, imageUrl: string | null) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Deletar arquivos de storage se existirem
      if (audioUrl) {
        const audioPath = audioUrl.split('/').slice(-2).join('/'); // Extrai user_id/filename
        await supabase.storage.from('map-audio').remove([audioPath]);
      }

      if (imageUrl) {
        const imagePath = imageUrl.split('/').slice(-2).join('/');
        await supabase.storage.from('map-images').remove([imagePath]);
      }

      // Deletar do banco
      const { error } = await supabase
        .from('map_pins')
        .delete()
        .eq('id', noteId)
        .eq('user_id', user.id);

      if (error) throw error;

      toast({ title: "Anotação deletada!" });
      loadMapNotes();
    } catch (error: any) {
      toast({ 
        title: "Erro ao deletar", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  // Realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('map-notes-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'map_pins',
        },
        () => {
          loadMapNotes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const hasData = radarData.some(d => d.sentiment > 0);
  const COLORS = ['hsl(var(--primary))', 'hsl(15, 85%, 70%)', 'hsl(142, 71%, 45%)', 'hsl(262, 83%, 58%)', 'hsl(346, 77%, 50%)'];

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Meu Mapa</h2>
          <p className="text-sm text-muted-foreground">
            Explore seus diferentes mapas de experiência
          </p>
        </div>

        <Tabs defaultValue="idioma" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="idioma">Anotações</TabsTrigger>
            <TabsTrigger value="presenca">Presença Relacional</TabsTrigger>
          </TabsList>

          {/* Language Notes Map Tab */}
          <TabsContent value="idioma" className="space-y-4">
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Mapa de Aprendizado Relacional</h3>
              
              {/* Map Visualization */}
              <div className="bg-muted/20 rounded-lg border border-border overflow-hidden" style={{ height: '300px' }}>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-amber-50">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px)'
                  }} />
                  
                  {mapNotes.map((note, index) => {
                    // Distribute pins across the map if coordinates are 0
                    const lat = note.latitude === 0 ? 20 + (index * 15) % 60 : note.latitude;
                    const lng = note.longitude === 0 ? 20 + (index * 20) % 70 : note.longitude;
                    
                    return (
                      <div 
                        key={note.id}
                        className="absolute w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                        style={{ top: `${lat}%`, left: `${lng}%` }}
                        title={note.title}
                      >
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notes List */}
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-medium text-foreground">Suas Anotações:</h4>
                {mapNotes.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhuma anotação ainda. Crie uma na aba "Notas"!
                  </p>
                ) : (
                  mapNotes.map((note) => (
                    <div key={note.id} className="bg-muted/50 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm text-foreground">{note.title}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNote(note.id, note.audio_url, note.image_url)}
                          className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {note.content && (
                        <p className="text-sm text-foreground pl-6">{note.content}</p>
                      )}
                      
                      {note.audio_url && (
                        <div className="pl-6">
                          <audio controls className="w-full max-w-xs h-8">
                            <source src={note.audio_url} type="audio/webm" />
                            Seu navegador não suporta áudio.
                          </audio>
                        </div>
                      )}
                      
                      {note.image_url && (
                        <div className="pl-6">
                          <img 
                            src={note.image_url} 
                            alt="Anotação" 
                            className="max-w-xs rounded-lg border border-border"
                          />
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>

          {/* Relational Presence Map Tab */}
          <TabsContent value="presenca" className="space-y-4">
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Mapa de Presença Relacional</h3>
              
              {/* MRP Diagram Reference */}
              <div className="bg-card/50 rounded-lg p-4 border border-border mb-4">
                <img 
                  src={mrpDiagram} 
                  alt="Map of Relational Presence" 
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Pie Chart Visualization */}
              <div className="bg-card rounded-lg border border-border p-6">
                {loading ? (
                  <div className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Carregando seu mapa...</p>
                  </div>
                ) : !hasData ? (
                  <div className="h-80 flex flex-col items-center justify-center space-y-4">
                    <div className="w-48 h-48 rounded-full bg-muted/20 border-2 border-dashed border-muted flex items-center justify-center">
                      <p className="text-center text-muted-foreground px-6">
                        Seu mapa está em branco.<br />
                        Comece a preencher seu diário!
                      </p>
                    </div>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={radarData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ pillar, sentiment }) => `${pillar}: ${sentiment.toFixed(1)}`}
                        outerRadius={120}
                        fill="hsl(var(--primary))"
                        dataKey="sentiment"
                      >
                        {radarData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
