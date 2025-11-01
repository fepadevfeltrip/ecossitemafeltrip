import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SuggestionBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !suggestion) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sugestão enviada!",
        description: "Obrigado pelo seu feedback. Entraremos em contato em breve.",
      });
      setName("");
      setEmail("");
      setSuggestion("");
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Envie sua Sugestão</CardTitle>
        <CardDescription>
          Sua opinião é importante para nós. Compartilhe suas ideias e sugestões.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
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
              placeholder="seu@email.com"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="suggestion">Sugestão</Label>
            <Textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Compartilhe sua sugestão conosco..."
              className="min-h-[120px]"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            <Send className="h-4 w-4" />
            {isLoading ? "Enviando..." : "Enviar Sugestão"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
