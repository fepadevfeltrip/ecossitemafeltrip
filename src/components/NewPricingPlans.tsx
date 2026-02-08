import { useState } from "react";
import { Check, Sparkles, Users, MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CommunityBanner } from "@/components/CommunityBanner";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/DMjDbxdjmJYKInnqsJcyJf";
const CULT_LINK = "https://cult.feltrip.com";

export const NewPricingPlans = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [showWaitlistDialog, setShowWaitlistDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email.trim()) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from("residente_waitlist" as any)
        .insert({ email: email.trim() } as any);
      if (error) throw error;
      toast({
        title: t("Adicionado à lista!", "Added to the list!"),
        description: t("Você será avisado(a) quando o plano estiver disponível!", "You'll be notified when the plan is available!"),
      });
      setEmail("");
      setShowWaitlistDialog(false);
    } catch {
      toast({
        title: t("Erro", "Error"),
        description: t("Tente novamente mais tarde.", "Please try again later."),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      name: t("Cartógrafo", "Cartographer"),
      subtitle: "Cult AI",
      tagline: t(
        "A inteligência que traduz sua vibe em destino. Sua cartografia pessoal e editável.",
        "The intelligence that translates your vibe into a destination. Your personal and editable cartography."
      ),
      highlighted: true,
      benefits: [
        t("Calibragem MRP: Questionário completo dos 5 pilares (Corpo, Identidade, Relações, Espaço, Território)", "MRP Calibration: Complete questionnaire of the 5 pillars (Body, Identity, Relations, Space, Territory)"),
        t("Proposição Poética: Diagnóstico da sua frequência atual gerado por IA", "Poetic Proposition: AI-generated diagnosis of your current frequency"),
        t("Mapa Editável: Salve e personalize suas gemas de Carnaval (80 RJ + 80 SP)", "Editable Map: Save and customize your Carnival gems (80 RJ + 80 SP)"),
        t("Acesso VIP: Prioridade no recebimento de novas rotas urbanas pós-Carnaval", "VIP Access: Priority for receiving new post-Carnival urban routes"),
      ],
      priceText: t(
        "Gratuito até 20/02. O valor oficial para novos membros será revelado em breve.",
        "Free until 02/20. The official price for new members will be revealed soon."
      ),
      cta: {
        label: t("Gerar meu Mapa Agora", "Generate my Map Now"),
        action: () => window.open(CULT_LINK, "_blank", "noopener,noreferrer"),
        variant: "default" as const,
      },
    },
    {
      name: t("Residente", "Resident"),
      tagline: t(
        "Para quem vive a presença relacional como estilo de vida.",
        "For those who live relational presence as a lifestyle."
      ),
      highlighted: false,
      benefits: [
        t("Tudo do plano Cartógrafo", "Everything from the Cartographer plan"),
        t("Relatórios mensais de tendências culturais (Trends Report)", "Monthly cultural trends reports (Trends Report)"),
        t("Convites para encontros presenciais \"Gema Offline\"", "Invitations to in-person \"Offline Gem\" meetups"),
        t("Descontos exclusivos em workshops Feltrip", "Exclusive discounts on Feltrip workshops"),
      ],
      priceText: t(
        "Em breve: Pré-venda exclusiva para membros da comunidade.",
        "Coming soon: Exclusive pre-sale for community members."
      ),
      cta: {
        label: t("Quero entrar na lista de espera", "I want to join the waitlist"),
        action: () => setShowWaitlistDialog(true),
        variant: "outline" as const,
      },
    },
  ];

  return (
    <>
      <Dialog open={showWaitlistDialog} onOpenChange={setShowWaitlistDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              🏡 {t("Lista de espera — Residente", "Waitlist — Resident")}
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              {t(
                "Deixe seu e-mail para ser avisado(a) quando o plano Residente estiver disponível.",
                "Leave your email to be notified when the Resident plan is available."
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-4">
            <Input
              type="email"
              placeholder={t("Seu melhor e-mail", "Your best email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleJoinWaitlist} disabled={!email.trim() || loading}>
              {loading
                ? t("Enviando...", "Sending...")
                : t("Entrar na lista de espera", "Join the waitlist")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            🌍 {t("Escolha sua forma de habitar a cidade", "Choose your way to inhabit the city")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 flex flex-col justify-between space-y-6 ${
                plan.highlighted
                  ? "bg-primary/10 border-primary/30 ring-2 ring-primary/20"
                  : "bg-card"
              }`}
            >
              <div className="space-y-4">
                {plan.highlighted && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-energy/10 text-energy text-xs font-semibold rounded-full">
                    <Sparkles className="h-3 w-3" />
                    {t("Destaque", "Featured")}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {plan.name}
                    {plan.subtitle && (
                      <span className="text-primary font-medium ml-2 text-base">
                        ({plan.subtitle})
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    "{plan.tagline}"
                  </p>
                </div>

                <div className="space-y-2.5">
                  {plan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 italic">
                  {plan.priceText}
                </p>
              </div>

              <Button
                onClick={plan.cta.action}
                variant={plan.cta.variant}
                className={`w-full gap-2 ${
                  plan.highlighted ? "bg-energy hover:bg-energy/90 text-white" : ""
                }`}
              >
                {plan.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <CommunityBanner />
      </div>
    </>
  );
};
