import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { AuthWrapper } from "@/components/app/AuthWrapper";
import { MeuMapaTab } from "@/components/app/MeuMapaTab";
import { MapaSeguroTab } from "@/components/app/MapaSeguroTab";
import { DiarioTab } from "@/components/app/DiarioTab";
import { ProposicaoTab } from "@/components/app/ProposicaoTab";
import { LanguagePracticeTab } from "@/components/app/LanguagePracticeTab";
import Profile from "@/pages/Profile";
import { Map, BookOpen, Sparkles, Compass, LogOut, MessageCircle, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface ExpatAppProps {
  onBack?: () => void;
}

const ExpatApp = ({ onBack }: ExpatAppProps) => {
  const [activeTab, setActiveTab] = useState<"mapa" | "seguro" | "diario" | "proposicao" | "idioma" | "perfil">("mapa");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bottom nav - apenas principais
  const mainTabs = [
    { id: "mapa" as const, icon: Compass, label: "Mapa" },
    { id: "diario" as const, icon: BookOpen, label: "Diário" },
    { id: "idioma" as const, icon: MessageCircle, label: "Idioma" },
    { id: "proposicao" as const, icon: Sparkles, label: "IA" },
  ];

  // Menu drawer - todos os itens
  const allMenuItems = [
    { id: "perfil" as const, icon: User, label: "Meu Perfil" },
    { id: "mapa" as const, icon: Compass, label: "Meu Mapa" },
    { id: "seguro" as const, icon: Map, label: "Mapa Seguro" },
    { id: "diario" as const, icon: BookOpen, label: "Diário" },
    { id: "idioma" as const, icon: MessageCircle, label: "Prática de Idioma" },
    { id: "proposicao" as const, icon: Sparkles, label: "Proposição RH" },
  ];

  const handleMenuItemClick = (tabId: typeof activeTab) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <AuthWrapper>
      <MobileFrame>
        {/* Header with Menu and Profile */}
        <div className="bg-card border-b border-border p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <div className="flex flex-col h-full">
                  {/* Header do Menu */}
                  <div className="p-6 bg-primary/5 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                          AS
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">Ana Silva</p>
                        <p className="text-xs text-muted-foreground">Lisboa, Portugal</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 py-4">
                    {allMenuItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleMenuItemClick(item.id)}
                          className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                            isActive
                              ? "bg-primary/10 text-primary border-r-4 border-primary"
                              : "text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <Separator />

                  {/* Footer */}
                  <div className="p-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
                      onClick={onBack}
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <h2 className="text-lg font-semibold text-foreground">Feltrip</h2>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab("perfil")}
            className={`h-9 w-9 ${activeTab === "perfil" ? "ring-2 ring-primary" : ""}`}
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                AS
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === "mapa" && <MeuMapaTab />}
          {activeTab === "seguro" && <MapaSeguroTab />}
          {activeTab === "diario" && <DiarioTab onEntrySubmitted={() => setActiveTab("mapa")} />}
          {activeTab === "idioma" && <LanguagePracticeTab />}
          {activeTab === "proposicao" && <ProposicaoTab />}
          {activeTab === "perfil" && <Profile />}
        </div>
        {/* Bottom Navigation - Apenas 4 principais */}
        <div className="bg-card border-t border-border">
          <div className="flex justify-around items-center h-16 px-2">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center space-y-1 transition-colors flex-1 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "fill-primary/20" : ""}`} />
                  <span className="text-[10px] font-medium">{tab.label}</span>
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
