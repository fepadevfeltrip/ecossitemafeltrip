import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import mrpDiagram from "@/assets/mrp-diagram.png";
import bobaMeditating from "@/assets/boba-meditating.png";
import bobaAvatar from "@/assets/boba-avatar.jpg";
import feltripPin from "@/assets/feltrip-pin.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ProposicaoTab } from "./ProposicaoTab";

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
  const [showProposicao, setShowProposicao] = useState(false);

  // Se está mostrando Proposição, renderiza apenas ela
  if (showProposicao) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border">
          <Button 
            variant="ghost" 
            onClick={() => setShowProposicao(false)}
            className="mb-2"
          >
            ← Voltar ao Mapa
          </Button>
        </div>
        <ProposicaoTab />
      </div>
    );
  }

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
  
  // Cores do dashboard RH
  const COLORS = [
    'hsl(var(--primary))',     // Corpo
    'hsl(var(--secondary))',   // Espaço  
    'hsl(var(--accent))',      // Território
    'hsl(var(--energy))',      // O Outro
    'hsl(var(--primary))',     // Identidade
  ];

  // Dados fictícios para demonstração quando não há dados reais
  const fakeData = [
    { pillar: "Corpo", sentiment: 75 },
    { pillar: "Espaço", sentiment: 65 },
    { pillar: "Território", sentiment: 82 },
    { pillar: "O Outro", sentiment: 88 },
    { pillar: "Identidade", sentiment: 70 },
  ];

  const displayData = hasData ? radarData : fakeData;

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Meu Mapa</h2>
          <p className="text-sm text-muted-foreground">
            Explore seus diferentes mapas de experiência
          </p>
        </div>

        <Tabs defaultValue="presenca" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presenca">Presença Relacional</TabsTrigger>
            <TabsTrigger value="idioma">Anotações</TabsTrigger>
          </TabsList>

          {/* Relational Presence Map Tab */}
          <TabsContent value="presenca" className="space-y-6">
            {/* Hero Section with Boba Meditating */}
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl border-2 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              <div className="relative p-8 flex flex-col items-center space-y-4">
                <div className="w-48 h-48 relative">
                  <img 
                    src={bobaMeditating} 
                    alt="Boba meditando na praia" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                
                <div className="text-center space-y-3 max-w-md">
                  <h3 className="text-2xl font-bold text-foreground">
                    Como você está se sentindo?
                  </h3>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    Vamos juntos explorar seus pilares relacionais: 
                    <span className="block mt-1 font-semibold text-foreground">
                      Corpo, O outro, Território, Espaço e Identidade
                    </span>
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="mt-4 w-full max-w-sm text-base py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setShowProposicao(true)}
                  >
                    Faça seu Mapa da Presença Relacional
                  </Button>
                </div>
              </div>
            </div>

            {/* MRP Diagram Reference */}
            <div className="bg-card/50 rounded-xl p-6 border border-border/50 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 text-center">
                Os 5 Pilares da Presença Relacional
              </h4>
              <img 
                src={mrpDiagram} 
                alt="Map of Relational Presence" 
                className="w-full max-w-sm mx-auto"
              />
            </div>

            {/* Pie Chart Visualization */}
            <div className="bg-card rounded-xl border-2 border-border p-6">
              {loading ? (
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto" />
                    <p className="text-muted-foreground">Carregando seu mapa...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-foreground">
                      Sua Pizza de Presença Relacional
                    </h4>
                    {!hasData && (
                      <p className="text-xs text-muted-foreground italic">
                        (Exemplo fictício - Complete seu diário para ver seus dados reais)
                      </p>
                    )}
                  </div>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={displayData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ pillar, sentiment }) => `${pillar}: ${sentiment.toFixed(0)}%`}
                        outerRadius={130}
                        innerRadius={50}
                        fill="hsl(var(--primary))"
                        dataKey="sentiment"
                        paddingAngle={3}
                      >
                        {displayData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]}
                            stroke="white"
                            strokeWidth={3}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-3 mt-6 max-w-md mx-auto">
                    {displayData.map((entry, index) => (
                      <div key={entry.pillar} className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-xs font-medium text-foreground">{entry.pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Boba Professor Card */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/30 p-6">
              <div className="flex items-center gap-4">
                <img 
                  src={bobaAvatar} 
                  alt="Boba professora"
                  className="w-20 h-20 rounded-full object-cover border-3 border-accent shadow-lg"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-lg text-foreground">Boba Professora</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Como se comunicar no novo idioma sem constrangimento?
                    <span className="block mt-1 font-medium text-accent">A Boba te ajuda!</span>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

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
                        className="absolute w-12 h-12 cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
                        style={{ top: `${lat}%`, left: `${lng}%` }}
                        title={note.title}
                      >
                        <img 
                          src={feltripPin} 
                          alt="Pin Feltrip"
                          className="w-full h-full object-contain"
                        />
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

          {/* Relational Presence Map Tab - moved earlier in file */}

        </Tabs>
      </div>
    </div>
  );
};
