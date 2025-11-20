import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import mrpDiagram from "@/assets/mrp-diagram.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";

interface DiaryEntry {
  pillar: string;
  sentiment: number;
}

export const MeuMapaTab = () => {
  const [radarData, setRadarData] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRadarData();
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

  const hasData = radarData.some(d => d.sentiment > 0);

  // Mock language notes data
  const languageNotes = [
    { id: 1, location: "Praia de Copacabana", phrase: "Vamos à praia?", translation: "Shall we go to the beach?", lat: 30, lng: 35 },
    { id: 2, location: "Mercado Municipal", phrase: "Quanto custa isso?", translation: "How much does this cost?", lat: 45, lng: 60 },
    { id: 3, location: "Restaurante Local", phrase: "Uma mesa para dois, por favor", translation: "A table for two, please", lat: 65, lng: 40 },
    { id: 4, location: "Padaria da Esquina", phrase: "Bom dia! Um café, por favor", translation: "Good morning! A coffee, please", lat: 25, lng: 70 },
  ];

  // Colors for pie chart
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
              
              {/* Mock Map with Language Pins */}
              <div className="bg-muted/20 rounded-lg border border-border overflow-hidden" style={{ height: '400px' }}>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-amber-50">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px)'
                  }} />
                  
                  {/* Language note pins */}
                  {languageNotes.map((note) => (
                    <div 
                      key={note.id}
                      className="absolute w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                      style={{ top: `${note.lat}%`, left: `${note.lng}%` }}
                      title={note.location}
                    >
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Notes List */}
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-medium text-foreground">Suas Anotações:</h4>
                {languageNotes.map((note) => (
                  <div key={note.id} className="bg-muted/50 rounded-lg p-3 space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm text-foreground">{note.location}</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">"{note.phrase}"</p>
                    <p className="text-xs text-muted-foreground pl-6 italic">{note.translation}</p>
                  </div>
                ))}
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
