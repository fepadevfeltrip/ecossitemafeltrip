import { useState, useEffect } from "react";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowLeft } from "lucide-react";
import caminhadaGrupo from "@/assets/caminhada-grupo.jpg";
import CuradoriaPremium from "./CuradoriaPremium";

interface ManagerDashboardProps {
  onBack: () => void;
}

const ManagerDashboard = ({ onBack }: ManagerDashboardProps) => {
  const [view, setView] = useState<"dashboard" | "curadoria">("dashboard");
  const [proposition, setProposition] = useState("");
  const [loadingProposition, setLoadingProposition] = useState(false);

  if (view === "curadoria") {
    return <CuradoriaPremium onBack={() => setView("dashboard")} />;
  }

  useEffect(() => {
    loadProposition();
  }, []);

  const loadProposition = async () => {
    setLoadingProposition(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-rh-proposition');
      if (error) throw error;
      setProposition(data || "Proposição estratégica sendo gerada...");
    } catch (error) {
      console.error('Error loading RH proposition:', error);
      setProposition("Não foi possível gerar a proposição no momento.");
    } finally {
      setLoadingProposition(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Radar do RH</h1>
              <p className="text-muted-foreground">Visão Estratégica de Pertencimento B2B</p>
            </div>
          </div>
        </div>

        {/* Main Radar Chart */}
        <RadarChart />

        {/* AI Strategic Proposition */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Lightbulb className="h-5 w-5 text-primary" />
              Proposição Estratégica da Boba 💡
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loadingProposition ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-4/5" />
              </div>
            ) : (
              <p className="text-foreground leading-relaxed">{proposition}</p>
            )}
          </CardContent>
        </Card>

        {/* Premium Service Banner */}
        <Card className="overflow-hidden border-2 border-accent">
          <div className="relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${caminhadaGrupo})`,
                filter: 'brightness(0.3)'
              }}
            />
            <div className="relative z-10 p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Nossas Caminhadas de Integração: Transformando Risco em Pertencimento
              </h3>
              <p className="text-white/90 max-w-2xl">
                Experiências curatoriais in loco que conectam colaboradores ao território,
                reduzindo riscos de adaptação e fortalecendo o senso de pertencimento.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => setView("curadoria")}
              >
                Curadoria Premium
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
