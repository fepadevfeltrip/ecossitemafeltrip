import { useState } from "react";
import { Smartphone, LayoutDashboard, Mail, Globe } from "lucide-react";
import { NavigationCard } from "@/components/NavigationCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SuggestionBox } from "@/components/SuggestionBox";
import { PricingTable } from "@/components/PricingTable";
import { Button } from "@/components/ui/button";
import ManagerDashboard from "./ManagerDashboard";
import ExpatApp from "./ExpatApp";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const IndexContent = () => {
  const [view, setView] = useState<"hub" | "manager" | "expat">("hub");
  const { language, setLanguage, t } = useLanguage();

  if (view === "manager") {
    return <ManagerDashboard onBack={() => setView("hub")} />;
  }
  if (view === "expat") {
    return <ExpatApp onBack={() => setView("hub")} />;
  }

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex flex-col items-center p-6">
      <WhatsAppButton />
      
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant={language === "pt" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("pt")}
        >
          PT
        </Button>
        <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
      </div>

      <div className="w-full max-w-5xl space-y-12 pt-12">
        <PricingTable />
        
        <div className="mt-12">
          <SuggestionBox />
        </div>

        {/* Demo Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {t(
                "Marque uma Demo com Nosso Time",
                "Schedule a Demo with Our Team"
              )}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                "Explore as duas perspectivas da plataforma Feltrip",
                "Explore both perspectives of the Feltrip platform"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <NavigationCard 
              icon={Smartphone} 
              title={t("Simular a Experiência do Expatriado", "Simulate the Expat Experience")}
              subtitle={t("O App 'Map of Relational Presence' (MRP)", "The 'Map of Relational Presence' (MRP) App")}
              onClick={openWhatsApp}
            />
            <NavigationCard 
              icon={LayoutDashboard} 
              title={t("Simular o Painel do Gestor", "Simulate the Manager Dashboard")}
              subtitle={t("Visão de Acompanhamento B2B", "B2B Monitoring View")}
              onClick={openWhatsApp}
            />
          </div>
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
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;