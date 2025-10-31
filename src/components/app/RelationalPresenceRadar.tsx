import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export const RelationalPresenceRadar = () => {
  const data = [
    { dimension: "Corpo", value: 85, fullMark: 100 },
    { dimension: "Território", value: 75, fullMark: 100 },
    { dimension: "Identidade", value: 90, fullMark: 100 },
    { dimension: "O Outro", value: 80, fullMark: 100 },
    { dimension: "Espaço", value: 70, fullMark: 100 },
  ];

  return (
    <Card className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-primary">
          Métricas de Presença Relacional
        </h3>
        <p className="text-sm text-muted-foreground">(Agregado/Anônimo)</p>
      </div>

      <div className="w-full" style={{ height: '500px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} margin={{ top: 40, right: 80, bottom: 40, left: 80 }}>
            <PolarGrid 
              stroke="hsl(var(--border))" 
              strokeWidth={1.5}
            />
            <PolarAngleAxis 
              dataKey="dimension" 
              tick={{ 
                fill: 'hsl(var(--foreground))',
                fontSize: 16,
                fontWeight: 600
              }}
              tickLine={false}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ 
                fill: 'hsl(var(--muted-foreground))',
                fontSize: 14
              }}
              tickCount={5}
              axisLine={false}
            />
            <Radar
              name="Presença"
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.6}
              strokeWidth={3}
              dot={{
                fill: 'hsl(var(--secondary))',
                stroke: 'hsl(var(--primary))',
                strokeWidth: 2,
                r: 6
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          onClick={() => window.open("https://typebot.co/boba-x8s937m", "_blank")}
          className="gap-2"
          size="lg"
        >
          <ExternalLink className="h-5 w-5" />
          Minha IA - Mapa de Presença Relacional
        </Button>
      </div>
    </Card>
  );
};
