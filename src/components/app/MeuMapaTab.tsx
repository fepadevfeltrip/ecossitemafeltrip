import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import mrpDiagram from "@/assets/mrp-diagram.png";

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

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Meu Mapa de Presença Relacional</h2>
          <p className="text-sm text-muted-foreground">
            Visualize suas sensações nos 5 pilares de pertencimento
          </p>
        </div>

        {/* MRP Diagram Reference */}
        <div className="bg-card/50 rounded-lg p-4 border border-border">
          <img 
            src={mrpDiagram} 
            alt="Map of Relational Presence" 
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Radar Chart */}
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
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="pillar" 
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                />
                <Radar
                  dataKey="sentiment"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};
