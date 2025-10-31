import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export const RadarChart = () => {
  const data = [
    { pillar: "Corpo", value: 78 },
    { pillar: "Espaço", value: 68 },
    { pillar: "Território", value: 85 },
    { pillar: "O Outro", value: 90 },
    { pillar: "Identidade", value: 72 },
  ];

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(var(--energy))",
    "hsl(var(--primary))",
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Métricas de Presença Relacional (Agregado/Anônimo)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="category" 
            dataKey="pillar" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }} 
          />
          <YAxis 
            type="number" 
            domain={[0, 100]} 
            tick={{ fill: "hsl(var(--muted-foreground))" }} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))" 
            }} 
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
