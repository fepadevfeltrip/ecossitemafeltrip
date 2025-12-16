import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/hooks/useLanguage";

export const SuggestionBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !suggestion) {
      toast({
        title: t("Campos obrigatórios", "Required fields"),
        description: t("Por favor, preencha todos os campos.", "Please fill in all fields."),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-suggestion', {
        body: { name, email, suggestion }
      });

      if (error) throw error;

      toast({
        title: t("Sugestão enviada!", "Suggestion sent!"),
        description: t("Obrigado pelo seu feedback. Entraremos em contato em breve.", "Thank you for your feedback. We'll be in touch soon."),
      });
      
      setName("");
      setEmail("");
      setSuggestion("");
    } catch (error) {
      console.error("Erro ao enviar sugestão:", error);
      toast({
        title: t("Erro ao enviar", "Error sending"),
        description: t("Não foi possível enviar sua sugestão. Tente novamente.", "Unable to send your suggestion. Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{t("Envie sua Sugestão", "Send Your Suggestion")}</CardTitle>
        <CardDescription>
          {t(
            "Sua opinião é importante para nós. Compartilhe suas ideias e sugestões.",
            "Your opinion matters to us. Share your ideas and suggestions."
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("Nome", "Name")}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Seu nome", "Your name")}
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("seu@email.com", "your@email.com")}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="suggestion">{t("Sugestão", "Suggestion")}</Label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder={t("Compartilhe sua sugestão conosco...", "Share your suggestion with us...")}
              className="min-h-[120px]"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            <Send className="h-4 w-4" />
            {isLoading ? t("Enviando...", "Sending...") : t("Enviar Sugestão", "Send Suggestion")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
