import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen } from "lucide-react";
import { ProposicaoTab } from "./ProposicaoTab";

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
          
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Feltrip Idioma</h2>
            <p className="text-muted-foreground">
              Treinamento de idioma com IA - Em desenvolvimento
            </p>
          </div>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Recursos em breve:</h3>
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
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Assistentes IA</h2>
          <p className="text-muted-foreground text-sm">
            Escolha seu assistente inteligente
          </p>
        </div>

        <div className="grid gap-4">
          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedMode("boba")}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Boba da Corte</h3>
                <p className="text-sm text-muted-foreground">
                  Proposições poéticas e reflexões sobre sua jornada
                </p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedMode("idioma")}
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Feltrip Idioma</h3>
                <p className="text-sm text-muted-foreground">
                  Treinamento de idioma com inteligência artificial
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};