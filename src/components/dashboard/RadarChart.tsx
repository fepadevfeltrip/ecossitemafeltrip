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
    <div className="bg-card rounded-lg border border-border p-3 sm:p-6">
      <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
        Métricas de Presença Relacional (Agregado/Anônimo)
      </h3>
      <ResponsiveContainer width="100%" height={300} className="sm:h-[350px]">
        <BarChart data={data} layout="horizontal" margin={{ left: 0, right: 10, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="category" 
            dataKey="pillar" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} 
            className="sm:text-sm"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis 
            type="number" 
            domain={[0, 100]} 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} 
            className="sm:text-sm"
            width={35}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              fontSize: "12px"
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
