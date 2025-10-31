import { Card } from "@/components/ui/card";

export const HomeTab = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h2 className="text-2xl font-bold text-foreground mb-3">Olá! 👋</h2>
        <p className="text-foreground/80 leading-relaxed">
          Bem-vindo(a) à sua prática de <span className="font-semibold text-primary">Cartografia Relacional</span>.
        </p>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Lembre-se: Se ocupe, não se preocupe.
        </p>
      </Card>
    </div>
  );
};
