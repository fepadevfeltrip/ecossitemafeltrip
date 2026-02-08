import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, BookOpen, Users, Map, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const OnboardingCultural = () => {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t("Pré-chegada", "Pre-arrival"),
      description: t(
        "Preparação cultural antes da mudança, incluindo orientação sobre a cidade, cultura local e expectativas.",
        "Cultural preparation before the move, including guidance on the city, local culture, and expectations."
      ),
    },
    {
      phase: t("Primeiros dias", "First days"),
      description: t(
        "Acolhimento inicial, orientação prática sobre serviços, transporte e rotina básica.",
        "Initial welcome, practical guidance on services, transportation, and basic routine."
      ),
    },
    {
      phase: t("Primeiros meses", "First months"),
      description: t(
        "Acompanhamento de adaptação, conexão com comunidade local e suporte contínuo.",
        "Adaptation monitoring, connection with local community, and ongoing support."
      ),
    },
    {
      phase: t("Longo prazo", "Long term"),
      description: t(
        "Integração profunda, desenvolvimento de relações locais e pertencimento real.",
        "Deep integration, development of local relationships, and real belonging."
      ),
    },
  ];

  const elements = [
    {
      icon: BookOpen,
      title: t("Orientação Cultural", "Cultural Orientation"),
      description: t(
        "Informações práticas sobre cultura, costumes, etiqueta e nuances do cotidiano brasileiro.",
        "Practical information about culture, customs, etiquette, and nuances of Brazilian daily life."
      ),
    },
    {
      icon: Users,
      title: t("Conexão com Comunidade", "Community Connection"),
      description: t(
        "Acesso a grupos, eventos e comunidades de expatriados e locais para networking e apoio.",
        "Access to groups, events, and communities of expatriates and locals for networking and support."
      ),
    },
    {
      icon: Map,
      title: t("Exploração do Território", "Territory Exploration"),
      description: t(
        "Caminhadas guiadas, roteiros culturais e experiências que conectam com a cidade.",
        "Guided walks, cultural itineraries, and experiences that connect with the city."
      ),
    },
    {
      icon: MessageCircle,
      title: t("Suporte Contínuo", "Ongoing Support"),
      description: t(
        "Acesso à Cult AI, concierge intercultural e suporte humano quando necessário.",
        "Access to Cult AI, intercultural concierge, and human support when needed."
      ),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Onboarding Cultural", "Cultural Onboarding")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Integração cultural completa para colaboradores que estão chegando ao Brasil.",
                "Complete cultural integration for employees arriving in Brazil."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Muito mais que orientação — é estrutura de adaptação, pertencimento e bem-estar.",
                "Much more than orientation — it's adaptation structure, belonging, and well-being."
              )}
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2 mt-4">
                {t("Falar com especialista", "Talk to a specialist")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              {t("O que é Onboarding Cultural?", "What is Cultural Onboarding?")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Onboarding Cultural é o processo estruturado de integração de um novo colaborador não apenas à empresa, mas à cultura local, cidade e comunidade onde vai viver e trabalhar. Vai além do onboarding tradicional de RH.",
                "Cultural Onboarding is the structured process of integrating a new employee not just to the company, but to the local culture, city, and community where they will live and work. It goes beyond traditional HR onboarding."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Na Feltrip, desenvolvemos um processo completo que começa antes da chegada e continua ao longo dos primeiros meses, garantindo que o colaborador se sinta em casa e possa performar no seu máximo potencial.",
                "At Feltrip, we've developed a complete process that starts before arrival and continues throughout the first months, ensuring the employee feels at home and can perform at their maximum potential."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Fases do Onboarding Cultural", "Cultural Onboarding Phases")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border/50 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-energy text-white text-lg font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Elementos do nosso Onboarding Cultural", "Elements of our Cultural Onboarding")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {elements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{element.title}</h3>
                  <p className="text-muted-foreground">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t(
              "Pronto para um onboarding cultural de verdade?",
              "Ready for real cultural onboarding?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Descubra como a Feltrip transforma a experiência de chegada dos seus colaboradores internacionais.",
              "Discover how Feltrip transforms the arrival experience of your international employees."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 gap-2">
                {t("Falar com especialista", "Talk to a specialist")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/para-empresa">
              <Button size="lg" variant="outline">
                {t("Ver soluções empresariais", "See business solutions")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            {t("Páginas relacionadas", "Related pages")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/integracao-intercultural">
              <Button variant="outline" size="sm">{t("Integração Intercultural", "Intercultural Integration")}</Button>
            </Link>
            <Link to="/mobilidade-global">
              <Button variant="outline" size="sm">{t("Mobilidade Global", "Global Mobility")}</Button>
            </Link>
            <Link to="/estrangeiros-no-brasil">
              <Button variant="outline" size="sm">{t("Estrangeiros no Brasil", "Foreigners in Brazil")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <div className="sr-only">
        <p>
          Onboarding cultural, cultural onboarding, integração de colaboradores, employee onboarding,
          adaptação cultural, orientação cultural, cross-cultural onboarding, international onboarding,
          onboarding expatriados, cultural orientation program.
        </p>
      </div>
    </MainLayout>
  );
};

export default OnboardingCultural;
