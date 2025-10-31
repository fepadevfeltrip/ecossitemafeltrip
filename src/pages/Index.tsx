import { useState } from "react";
import { Smartphone, LayoutDashboard } from "lucide-react";
import { FeltripLogo } from "@/components/FeltripLogo";
import { NavigationCard } from "@/components/NavigationCard";
import ManagerDashboard from "./ManagerDashboard";
import ExpatApp from "./ExpatApp";
const Index = () => {
  const [view, setView] = useState<"hub" | "manager" | "expat">("hub");
  if (view === "manager") {
    return <ManagerDashboard onBack={() => setView("hub")} />;
  }
  if (view === "expat") {
    return <ExpatApp onBack={() => setView("hub")} />;
  }
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl space-y-12">
        <div className="text-center space-y-6">
          <FeltripLogo />
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Simulador de Ecossistema de Onboarding Relacional
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore as duas perspectivas da plataforma Feltrip
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NavigationCard icon={Smartphone} title="Simular a Experiência do Expatriado" subtitle="O App 'Map of Relational Presence' (MRP)" onClick={() => setView("expat")} />
          <NavigationCard icon={LayoutDashboard} title="Simular o Painel do Gestor" subtitle="Visão de Acompanhamento B2B" onClick={() => setView("manager")} />
        </div>
      </div>
    </div>;
};
export default Index;