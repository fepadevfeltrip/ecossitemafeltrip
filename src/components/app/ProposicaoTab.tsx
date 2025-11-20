import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles } from "lucide-react";
import bobaMeditation from "@/assets/boba-meditation.png";

export const ProposicaoTab = () => {
  const [proposition, setProposition] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProposition();
  }, []);

  const loadProposition = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-poetic-prompt');
      if (error) throw error;
      setProposition(data || "Sua proposição poética está sendo gerada...");
    } catch (error) {
      console.error('Error loading proposition:', error);
      setProposition("Não foi possível gerar uma proposição no momento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={bobaMeditation} 
              alt="Meditação na praia" 
              className="w-48 h-48 object-contain rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Sua Proposição Poética
          </h2>
          <p className="text-sm text-muted-foreground">
            Uma sugestão criativa para expandir sua presença relacional
          </p>
        </div>

        {/* Proposition Display */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6 mx-auto" />
              </div>
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-foreground text-center">
              {proposition}
            </p>
          )}
        </div>

        {/* Refresh Button */}
        <Button 
          onClick={loadProposition} 
          className="w-full"
          variant="outline"
          disabled={loading}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Quero outra Proposição
        </Button>

        {/* Decorative Quote */}
        <div className="bg-muted/20 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Práticas guiadas na Feltrip™ transformam a observação<br />
            em experiências de pertencimento autêntico."
          </p>
        </div>
      </div>
    </div>
  );
};
