import { useState } from "react";
import { Smartphone, LayoutDashboard, Mail, Globe } from "lucide-react";
import { NavigationCard } from "@/components/NavigationCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SuggestionBox } from "@/components/SuggestionBox";
import { PricingTable } from "@/components/PricingTable";
import { LandingPage } from "@/components/LandingPage";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex flex-col items-center px-3 py-3 md:px-6 md:py-5">
      <WhatsAppButton />
      
      {/* Language Toggle */}
      <div className="fixed top-3 right-3 z-50 flex gap-1.5">
        <Button
          variant={language === "pt" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("pt")}
          className="h-8 px-3 text-xs"
        >
          PT
        </Button>
        <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="h-8 px-3 text-xs"
        >
          EN
        </Button>
      </div>

      <div className="w-full max-w-5xl space-y-6 md:space-y-10 pt-6 md:pt-8">
        {/* Landing Page Content */}
        <LandingPage />

        {/* Pricing Section */}
        <PricingTable />
        
        {/* Culture Guide Button */}
        <div className="mt-8 md:mt-12 text-center space-y-3">
          <p className="text-muted-foreground">
            {t(
              "Conheça algumas nuances culturais do jeitinho brasileiro, sem clichê.",
              "Discover some cultural nuances of the Brazilian jeitinho, without clichés."
            )}
          </p>
          <a
            href="https://cultureguide.feltrip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-base px-6 py-5 border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              {t("Guia Cultural", "Culture Guide")}
            </Button>
          </a>
        </div>

        {/* Suggestion Box */}
        <div className="mt-8 md:mt-12">
          <SuggestionBox />
        </div>

        {/* Demo Section */}
        <div className="mt-10 md:mt-16 space-y-6 md:space-y-8">
          <div className="text-center px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t(
                "Marque uma Demo com Nosso Time",
                "Schedule a Demo with Our Team"
              )}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {t(
                "Explore as duas perspectivas da plataforma Feltrip",
                "Explore both perspectives of the Feltrip platform"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm">
            <a 
              href="mailto:info@feltrip.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@feltrip.com</span>
            </a>
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