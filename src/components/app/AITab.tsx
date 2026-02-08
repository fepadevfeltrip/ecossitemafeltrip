import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProposicaoTab } from "./ProposicaoTab";
import bobaAvatar from "@/assets/boba-avatar.jpg";
import bobaHappy from "@/assets/boba-happy.png";
import questionIcon from "@/assets/question-icon.png";

type AIMode = "boba" | "idioma" | null;

export const AITab = () => {
  const [selectedMode, setSelectedMode] = useState<AIMode>(null);

  if (selectedMode === "boba") {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedMode(null)}
            className="mb-2"
          >
            ← Voltar
          </Button>
        </div>
        <ProposicaoTab />
      </div>
    );
  }

  if (selectedMode === "idioma") {
    return (
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedMode(null)}
            className="mb-4"
          >
            ← Voltar
          </Button>
          
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img 
                src={bobaAvatar} 
               alt="Cult professora"
                className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Cult Professora</h2>
              <p className="text-muted-foreground italic">
                Treinamento de idioma com a Cult - Em desenvolvimento
              </p>
            </div>
          </div>

          <Card className="p-6 bg-accent/5 border-accent/20">
            <h3 className="font-semibold mb-3 text-foreground">Recursos em breve:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Conversação com IA em tempo real</li>
              <li>• Correção de pronúncia</li>
              <li>• Exercícios personalizados</li>
              <li>• Feedback imediato</li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Boba Header */}
        <div className="text-center space-y-4 relative">
          <div className="relative inline-block">
            <img 
              src={bobaAvatar} 
              alt="Cult - Sua guia cultural"
              className="w-32 h-32 mx-auto rounded-full border-4 border-primary shadow-2xl object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12">
              <img src={questionIcon} alt="?" className="w-full h-full animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Olá, sou a Cult!</h1>
            <p className="text-lg text-muted-foreground italic">
              Sua companheira nessa jornada cultural, interior e linguística
            </p>
          </div>
        </div>

        {/* Main CTA Card */}
        <Card 
          className="p-8 cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/20"
          onClick={() => setSelectedMode("boba")}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <img 
                src={bobaHappy} 
                alt="Cult feliz"
                className="w-24 h-24 object-contain shrink-0"
              />
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  Mapa da Presença Relacional
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Como você está se sentindo? Vamos juntos explorar seus pilares relacionais: 
                  <span className="font-semibold text-foreground"> Corpo, O outro, Território, Espaço e Identidade</span>
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Faça seu Mapa da Presença Relacional
            </Button>
          </div>
        </Card>

        {/* Secondary Card - Language */}
        <Card 
          className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.01] bg-card/80 backdrop-blur-sm border border-border/50"
          onClick={() => setSelectedMode("idioma")}
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border-2 border-accent/30">
              <img 
                src={bobaAvatar} 
               alt="Cult professora"
                className="w-16 h-16 rounded-full object-cover opacity-80"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-bold text-lg text-foreground">Cult Professora</h3>
              <p className="text-sm text-muted-foreground leading-snug">
                Como se comunicar no novo idioma sem constrangimento? 
                <span className="block mt-1 font-medium text-accent">A Cult te ajuda!</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Decorative Element */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground/70 italic">
           "A cultura é um caminho que se faz caminhando... e eu caminho com você!"
          </p>
        </div>
      </div>
    </div>
  );
};