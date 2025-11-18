import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const EngagementChart = () => {
  const data = [
    { semana: "Sem 1", confianca: 45 },
    { semana: "Sem 2", confianca: 52 },
    { semana: "Sem 3", confianca: 63 },
    { semana: "Sem 4", confianca: 78 },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-3 sm:p-6">
      <div className="mb-3 sm:mb-4">
        <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1">Índice de Confiança Linguística</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          💡 O time aumentou 15% a interação com locais nesta semana
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ left: 0, right: 10, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="semana" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} 
            className="sm:text-sm"
          />
          <YAxis 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} 
            className="sm:text-sm"
            domain={[0, 100]} 
            width={35}
            label={{ value: 'Confiança %', angle: -90, position: 'insideLeft', style: { fontSize: 10 } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              fontSize: "12px"
            }}
            formatter={(value) => [`${value}%`, 'Nível de Confiança']}
          />
          <Bar dataKey="confianca" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
