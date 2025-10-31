import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const EngagementChart = () => {
  const data = [
    { name: "Atividade no App", value: 85 },
    { name: "Progresso Linguístico", value: 72 },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-3 sm:p-6">
      <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Engajamento da Plataforma</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ left: 0, right: 10, top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }} 
            className="sm:text-sm"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} 
            className="sm:text-sm"
            domain={[0, 100]} 
            width={35}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              fontSize: "12px"
            }} 
          />
          <Bar dataKey="value" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
