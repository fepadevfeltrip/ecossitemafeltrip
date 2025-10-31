import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const EngagementChart = () => {
  const data = [
    { name: "Atividade no App", value: 85 },
    { name: "Progresso Linguístico", value: 72 },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Engajamento da Plataforma</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))" }} />
          <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))" 
            }} 
          />
          <Bar dataKey="value" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
