import { ArrowLeft, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricsTable } from "@/components/dashboard/MetricsTable";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { EngagementChart } from "@/components/dashboard/EngagementChart";
import { useState } from "react";
import CuradoriaPremium from "./CuradoriaPremium";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ManagerDashboardProps {
  onBack: () => void;
}

const ManagerDashboard = ({ onBack }: ManagerDashboardProps) => {
  const [showCuradoria, setShowCuradoria] = useState(false);
  const [aiProposal, setAiProposal] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePoeticalProposal = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      toast.info("Estamos treinando nossa IA para te atender em breve! 🤖✨");
    }, 1000);
  };

  if (showCuradoria) {
    return <CuradoriaPremium onBack={() => setShowCuradoria(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
              Painel de Acompanhamento B2B (RH)
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-8">
        <div className="flex justify-center">
          <Button
            onClick={() => setShowCuradoria(true)}
            size="lg"
            className="gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Feltrip Curadoria Premium
          </Button>
        </div>

        <MetricsTable />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <RadarChart />
          <EngagementChart />
        </div>

        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Proposta Poética de Presença Relacional
            </h3>
            <Button
              onClick={generatePoeticalProposal}
              disabled={isGenerating}
              className="gap-2"
            >
              <Wand2 className="h-4 w-4" />
              {isGenerating ? "Gerando..." : "Gerar Proposta com IA"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Peça à IA para criar uma proposta poética de atividades para os colaboradores baseada nas métricas dos 5 pilares de presença relacional.
          </p>
          {aiProposal && (
            <Textarea
              value={aiProposal}
              readOnly
              className="min-h-[400px] font-mono text-sm"
            />
          )}
        </Card>
      </main>
    </div>
  );
};

export default ManagerDashboard;
