import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { AuthWrapper } from "@/components/app/AuthWrapper";
import { MeuMapaTab } from "@/components/app/MeuMapaTab";
import { MapaSeguroTab } from "@/components/app/MapaSeguroTab";
import { DiarioTab } from "@/components/app/DiarioTab";
import { ProposicaoTab } from "@/components/app/ProposicaoTab";
import { Map, BookOpen, Sparkles, Compass } from "lucide-react";

interface ExpatAppProps {
  onBack?: () => void;
}

const ExpatApp = ({ onBack }: ExpatAppProps) => {
  const [activeTab, setActiveTab] = useState<"mapa" | "seguro" | "diario" | "proposicao">("mapa");

  const tabs = [
    { id: "mapa" as const, icon: Compass, label: "Meu Mapa" },
    { id: "seguro" as const, icon: Map, label: "Mapa Seguro" },
    { id: "diario" as const, icon: BookOpen, label: "Diário" },
    { id: "proposicao" as const, icon: Sparkles, label: "Proposição" },
  ];

  return (
    <AuthWrapper>
      <MobileFrame>
        {activeTab === "mapa" && <MeuMapaTab />}
        {activeTab === "seguro" && <MapaSeguroTab />}
        {activeTab === "diario" && <DiarioTab onEntrySubmitted={() => setActiveTab("mapa")} />}
        {activeTab === "proposicao" && <ProposicaoTab />}
        
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
