import { useState } from "react";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { EngagementChart } from "@/components/dashboard/EngagementChart";
import { MetricsTable } from "@/components/dashboard/MetricsTable";
import { SafetyChart } from "@/components/dashboard/SafetyChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import caminhadaGrupo from "@/assets/caminhada-grupo.jpg";
import CuradoriaPremium from "./CuradoriaPremium";

interface ManagerDashboardProps {
  onBack: () => void;
}

const ManagerDashboard = ({ onBack }: ManagerDashboardProps) => {
  const [view, setView] = useState<"dashboard" | "curadoria">("dashboard");

  if (view === "curadoria") {
    return <CuradoriaPremium onBack={() => setView("dashboard")} />;
  }

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

        {/* CARD 1: O Termômetro Cultural */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Mapa de Presença Relacional (Time)</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart />
          </CardContent>
        </Card>


        {/* CARD 2: Engajamento Linguístico & Cultural */}
        <Card>
          <CardContent className="pt-6">
            <EngagementChart />
          </CardContent>
        </Card>

        {/* CARD 2.5: Sensação de Segurança */}
        <Card>
          <CardContent className="pt-6">
            <SafetyChart />
          </CardContent>
        </Card>

        {/* CARD 3: Utilização da Rede de Parceiros */}
        <Card>
          <CardContent className="pt-6">
            <MetricsTable />
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
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => setView("curadoria")}
                >
                  Curadoria Premium
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                  onClick={() => window.open("https://feltrip.com", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Acessar Time Feltrip
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
