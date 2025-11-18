import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DiarioTabProps {
  onEntrySubmitted: () => void;
}

export const DiarioTab = ({ onEntrySubmitted }: DiarioTabProps) => {
  const [prompt, setPrompt] = useState("");
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadPrompt();
  }, []);

  const loadPrompt = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-poetic-prompt');
      if (error) throw error;
      setPrompt(data || "O que aconteceu hoje? Como você se sentiu?");
    } catch (error) {
      console.error('Error loading prompt:', error);
      setPrompt("O que aconteceu hoje? Como você se sentiu?");
    }
  };

  const handleSubmit = async () => {
    if (!entry.trim()) {
      toast({
        title: "Campo vazio",
        description: "Por favor, escreva algo antes de mapear.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      // Analyze sentiment
      const { data: analysis, error: analysisError } = await supabase.functions.invoke('analyze-entry-sentiment', {
        body: { entry_text: entry }
      });

      if (analysisError) throw analysisError;

      // Save to database
      const { error: insertError } = await supabase
        .from('diario_entries')
        .insert({
          user_id: user.id,
          content: entry,
          pillar: analysis?.pillar || 'Identity',
          sentiment: analysis?.sentiment || 50
        });

      if (insertError) throw insertError;

      toast({
        title: "Sensação mapeada! ✨",
        description: "Seu registro foi salvo no Mapa de Presença."
      });

      setEntry("");
      onEntrySubmitted();
    } catch (error) {
      console.error('Error submitting entry:', error);
      toast({
        title: "Erro",
        description: "Não foi possível mapear a sensação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Poetic Prompt */}
        <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {prompt}
          </h3>
        </div>

        {/* Entry Form */}
        <div className="space-y-4">
          <Textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="O que aconteceu? Como você se sentiu?"
            className="min-h-[200px] text-base"
          />

          <Button 
            onClick={handleSubmit} 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Mapeando..." : "Mapear Sensação"}
          </Button>
        </div>

        {/* Inspirational Note */}
        <div className="bg-muted/20 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground italic">
            "A observação fenomenológica do corpo, das emoções e dos símbolos<br />
            revela a presença relacional nos processos de adaptação."
          </p>
        </div>
      </div>
    </div>
  );
};
