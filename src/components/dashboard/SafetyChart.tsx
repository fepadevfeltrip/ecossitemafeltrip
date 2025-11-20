import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Ana S.", safety: 85, status: "good" },
  { name: "Carlos M.", safety: 65, status: "attention" },
  { name: "Julia R.", safety: 90, status: "good" },
  { name: "Pedro L.", safety: 45, status: "alert" },
  { name: "Marina F.", safety: 78, status: "good" },
  { name: "Ricardo P.", safety: 55, status: "attention" },
];

const getColor = (value: number) => {
  if (value >= 75) return "hsl(142, 71%, 45%)"; // Verde
  if (value >= 50) return "hsl(45, 93%, 47%)"; // Amarelo
  return "hsl(0, 72%, 51%)"; // Vermelho
};

export const SafetyChart = () => {
  const averageSafety = Math.round(data.reduce((sum, item) => sum + item.safety, 0) / data.length);
  const alertCount = data.filter(d => d.safety < 50).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-foreground">Sensação de Segurança da Equipe</h3>
        {alertCount > 0 && (
          <div className="flex items-center gap-2 px-3 py-1 bg-destructive/10 text-destructive rounded-full">
            <span className="text-2xl">⚠️</span>
            <span className="text-sm font-semibold">{alertCount} alerta(s)</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">{averageSafety}%</div>
          <div className="text-sm text-muted-foreground">Média Geral</div>
        </div>
        <div className="flex-1 text-sm text-muted-foreground">
          Índice baseado em relatos de segurança, check-ins de localização e interações com zonas de acolhimento.
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--foreground))"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
          />
          <YAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="safety" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.safety)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(142, 71%, 45%)" }} />
          <span className="text-muted-foreground">Seguro (75-100%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(45, 93%, 47%)" }} />
          <span className="text-muted-foreground">Atenção (50-74%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(0, 72%, 51%)" }} />
          <span className="text-muted-foreground">Alerta (&lt;50%)</span>
        </div>
      </div>
    </div>
  );
};
