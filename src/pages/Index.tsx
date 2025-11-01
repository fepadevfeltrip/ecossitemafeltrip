import { useState } from "react";
import { Smartphone, LayoutDashboard, ExternalLink, Mail, Globe } from "lucide-react";
import { FeltripLogo } from "@/components/FeltripLogo";
import { NavigationCard } from "@/components/NavigationCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SuggestionBox } from "@/components/SuggestionBox";
import { Button } from "@/components/ui/button";
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
      <WhatsAppButton />
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
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => window.open("http://feltrip.com", "_blank")}
              className="gap-2"
            >
              Saiba Mais
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NavigationCard icon={Smartphone} title="Simular a Experiência do Expatriado" subtitle="O App 'Map of Relational Presence' (MRP)" onClick={() => setView("expat")} />
          <NavigationCard icon={LayoutDashboard} title="Simular o Painel do Gestor" subtitle="Visão de Acompanhamento B2B" onClick={() => setView("manager")} />
        </div>

        <div className="mt-16">
          <SuggestionBox />
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a 
              href="mailto:info@feltrip.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@feltrip.com</span>
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="http://feltrip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>feltrip.com</span>
            </a>
          </div>
        </footer>
      </div>
    </div>;
};
export default Index;