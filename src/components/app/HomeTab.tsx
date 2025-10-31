import { useState } from "react";
import { BookOpen, Brain, MessageCircle, ArrowLeft, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FeltripLogo } from "@/components/FeltripLogo";
import { Button } from "@/components/ui/button";
import { ConciergeServicesMenu } from "./ConciergeServicesMenu";

interface HomeTabProps {
  onBack?: () => void;
}

export const HomeTab = ({ onBack }: HomeTabProps) => {
  const [showConcierge, setShowConcierge] = useState(false);

  const features = [
    {
      icon: Briefcase,
      title: "Feltrip Concierge",
      description: "Serviços especializados para expatriados",
      color: "text-primary",
      onClick: () => setShowConcierge(true),
    },
    {
      icon: BookOpen,
      title: "Diário de Bordo",
      description: "Registre suas experiências e descobertas",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "IA Poética (Boba)",
      description: "Seu assistente de Cartografia Relacional",
      color: "text-secondary",
    },
    {
      icon: MessageCircle,
      title: "Comunidade",
      description: "Conecte-se com outros expatriados",
      color: "text-accent",
    },
  ];

  if (showConcierge) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" onClick={() => setShowConcierge(false)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <FeltripLogo className="mx-auto" />
            <div className="w-10" />
          </div>
        </div>
        
        <div className="p-6">
          <ConciergeServicesMenu />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border">
        <div className="flex items-center justify-between p-4">
          {onBack && (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <FeltripLogo className="mx-auto" />
          <div className="w-10" />
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <p className="text-lg leading-relaxed text-foreground">
            Olá! Bem-vindo(a) à sua prática de <strong>Cartografia Relacional</strong>. 
            Lembre-se: <em>Se ocupe, não se preocupe.</em>
          </p>
        </Card>

        <div className="grid gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={feature.onClick}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-muted ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
