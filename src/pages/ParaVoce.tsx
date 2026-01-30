import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Users, Bot, MapPin, Shield } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PricingTable } from "@/components/PricingTable";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const ParaVoce = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t("Cadastre-se", "Sign up"),
      description: t(
        "Crie sua conta e acesse a comunidade Feltrip com pessoas do mundo todo.",
        "Create your account and access the Feltrip community with people from all over the world."
      ),
    },
    {
      number: "2",
      title: t("Escolha o seu plano", "Choose your plan"),
      description: t(
        "Selecione o plano que melhor se adapta às suas necessidades de integração cultural.",
        "Select the plan that best suits your cultural integration needs."
      ),
    },
    {
      number: "3",
      title: t("Agora é só aproveitar", "Now just enjoy"),
      description: t(
        "Acesse todas as ferramentas, a IA Boba Cult, comunidade e experiências guiadas.",
        "Access all tools, Boba Cult AI, community, and guided experiences."
      ),
    },
  ];

  const benefits = [
    t("Acesso à comunidade global Feltrip", "Access to the global Feltrip community"),
    t("IA Boba Cult para adaptação cultural", "Boba Cult AI for cultural adaptation"),
    t("Mapa de segurança e dicas locais", "Safety map and local tips"),
    t("Prática de idioma semanal", "Weekly language practice"),
    t("Diário-mapa de viagem pessoal", "Personal travel diary-map"),
    t("Roteiros culturais personalizados", "Personalized cultural itineraries"),
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Para você", "For you")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "Integração cultural na prática para quem está chegando no Brasil ou se mudando entre cidades.",
                "Cultural integration in practice for those arriving in Brazil or moving between cities."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Seja estrangeiro, imigrante ou brasileiro em mobilidade — a Feltrip te ajuda a se sentir em casa.",
                "Whether foreigner, immigrant, or Brazilian in mobility — Feltrip helps you feel at home."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-energy text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("O que você recebe", "What you get")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24" id="planos">
        <div className="container px-4">
          <PricingTable />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t("Pronto para começar?", "Ready to start?")}
          </h2>
          <a href="#planos">
            <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
              {t("Escolher meu plano", "Choose my plan")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParaVoce;
