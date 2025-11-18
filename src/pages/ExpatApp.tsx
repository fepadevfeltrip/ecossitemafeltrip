import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { AuthWrapper } from "@/components/app/AuthWrapper";
import { MeuMapaTab } from "@/components/app/MeuMapaTab";
import { MapaSeguroTab } from "@/components/app/MapaSeguroTab";
import { DiarioTab } from "@/components/app/DiarioTab";
import { ProposicaoTab } from "@/components/app/ProposicaoTab";
import { LanguagePracticeTab } from "@/components/app/LanguagePracticeTab";
import { Map, BookOpen, Sparkles, Compass, LogOut, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpatAppProps {
  onBack?: () => void;
}

const ExpatApp = ({ onBack }: ExpatAppProps) => {
  const [activeTab, setActiveTab] = useState<"mapa" | "seguro" | "diario" | "proposicao" | "idioma">("mapa");

  const tabs = [
    { id: "mapa" as const, icon: Compass, label: "Meu Mapa" },
    { id: "seguro" as const, icon: Map, label: "Mapa Seguro" },
    { id: "diario" as const, icon: BookOpen, label: "Diário" },
    { id: "idioma" as const, icon: MessageCircle, label: "Idioma" },
    { id: "proposicao" as const, icon: Sparkles, label: "Proposição" },
  ];

  return (
    <AuthWrapper>
      <MobileFrame>
        {/* Header with Exit Button */}
        <div className="bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-foreground">Feltrip</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === "mapa" && <MeuMapaTab />}
          {activeTab === "seguro" && <MapaSeguroTab />}
          {activeTab === "diario" && <DiarioTab onEntrySubmitted={() => setActiveTab("mapa")} />}
          {activeTab === "idioma" && <LanguagePracticeTab />}
          {activeTab === "proposicao" && <ProposicaoTab />}
        </div>
        {/* Bottom Navigation */}
        <div className="bg-card border-t border-border">
          <div className="flex justify-around items-center h-20 px-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isActive ? "fill-primary/20" : ""}`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </MobileFrame>
    </AuthWrapper>
  );
};

export default ExpatApp;
