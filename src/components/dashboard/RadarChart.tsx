import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export const RadarChart = () => {
  const data = [
    { pillar: "Corpo", value: 78 },
    { pillar: "Território", value: 85 },
    { pillar: "Identidade", value: 72 },
    { pillar: "O Outro", value: 90 },
    { pillar: "Espaço", value: 68 },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Métricas de Presença Relacional (Agregado/Anônimo)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <RechartsRadar data={data}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="pillar" tick={{ fill: "hsl(var(--foreground))" }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <Radar 
            name="Conexão da Equipe" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))" 
            fillOpacity={0.6} 
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
};
