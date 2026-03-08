import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Building2, BarChart3, Users, Bot, Compass, MessageSquare, Briefcase, TrendingDown, TrendingUp, MapPin } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { B2BPricingTable } from "@/components/B2BPricingTable";

// Images
import bobaDeboas from "@/assets/boba-deboas.png";
import metricsAnalysis from "@/assets/metrics-analysis.jpg";
import caminhadaGrupo from "@/assets/caminhada-grupo.jpg";
import escadaAzul from "@/assets/escada-azul.jpg";
import agentePersonalizado from "@/assets/agente-personalizado.jpg";
import tutorCredenciado from "@/assets/tutor-credenciado.jpg";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const ParaEmpresa = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: TrendingDown,
      problem: t("Times distribuídos sem conexão cultural", "Distributed teams without cultural connection"),
      impact: t("Baixa produtividade e alto turnover", "Low productivity and high turnover"),
    },
    {
      icon: MapPin,
      problem: t("Colaboradores relocados sem suporte local", "Relocated employees without local support"),
      impact: t("Desengajamento nos primeiros 90 dias", "Disengagement in the first 90 days"),
    },
    {
      icon: Users,
      problem: t("Equipes híbridas BR + internacional", "Hybrid BR + international teams"),
      impact: t("Ruídos de comunicação e conflitos culturais", "Communication noise and cultural conflicts"),
    },
  ];

  const steps = [
    {
      number: "1",
      title: t("Diagnóstico", "Diagnosis"),
      description: t(
        "Mapeamos a realidade cultural do seu time com o MRP™ — onde estão, de onde vieram, o que precisam.",
        "We map your team's cultural reality with MRP™ — where they are, where they came from, what they need."
      ),
    },
    {
      number: "2",
      title: t("Plano sob medida", "Custom plan"),
      description: t(
        "Criamos uma estratégia de integração cultural específica para os desafios da sua empresa.",
        "We create a cultural integration strategy specific to your company's challenges."
      ),
    },
    {
      number: "3",
      title: t("Implementação", "Implementation"),
      description: t(
        "Onboarding cultural, Cult AI, tutores locais e métricas de adaptação em tempo real.",
        "Cultural onboarding, Cult AI, local tutors and real-time adaptation metrics."
      ),
    },
    {
      number: "4",
      title: t("Resultados", "Results"),
      description: t(
        "Times integrados, retenção acima de 87% e colaboradores que realmente pertencem à cidade.",
        "Integrated teams, retention above 87%, and employees who truly belong to the city."
      ),
    },
  ];

  const solutions = [
    {
      icon: Bot,
      title: "Cult AI",
      subtitle: t(
        "Tutora de cultura e hyperlocalidade para sua empresa",
        "Culture and hyperlocality tutor for your company"
      ),
      description: t(
        "IA que orienta seus colaboradores sobre hábitos culturais, comunicação local e dinâmicas da cidade — seja um paulistano no Rio ou um expatriado em Floripa.",
        "AI that guides your employees on cultural habits, local communication and city dynamics — whether a paulistano in Rio or an expat in Floripa."
      ),
      image: bobaDeboas,
    },
    {
      icon: MessageSquare,
      title: t("Agente Cultural Personalizado", "Custom Cultural Agent"),
      subtitle: t(
        "IA com a cara da sua marca",
        "AI with your brand's identity"
      ),
      description: t(
        "Crie um agente com nome, tom de voz e conteúdos locais da sua empresa para acolher colaboradores em relocação ou participantes de eventos.",
        "Create an agent with your company's name, tone and local content to welcome relocated employees or event attendees."
      ),
      image: agentePersonalizado,
    },
    {
      icon: BarChart3,
      title: t("Painel de Integração", "Integration Dashboard"),
      subtitle: t("Métricas em tempo real", "Real-time metrics"),
      description: t(
        "Diários de experiência, mapas de integração, alertas de segurança e painel de RH para acompanhar adaptação cultural e riscos psicossociais.",
        "Experience diaries, integration maps, safety alerts and HR dashboard to track cultural adaptation and psychosocial risks."
      ),
      image: metricsAnalysis,
    },
    {
      icon: Users,
      title: t("Tutor Local Credenciado", "Certified Local Tutor"),
      subtitle: t("Concierge intercultural e poliglota", "Intercultural polyglot concierge"),
      description: t(
        "Integração real à cidade com concierge que conhece os bairros, serviços, idioma e cultura local de SP, Rio ou Floripa.",
        "Real city integration with a concierge who knows the neighborhoods, services, language and local culture of SP, Rio or Floripa."
      ),
      image: tutorCredenciado,
    },
    {
      icon: Compass,
      title: t("Experiências Guiadas", "Guided Experiences"),
      subtitle: t("Team building com raiz local", "Team building with local roots"),
      description: t(
        "Roteiros culturais e vivências em grupo que aceleram adaptação e fortalecem conexão entre times distribuídos.",
        "Cultural itineraries and group experiences that accelerate adaptation and strengthen connection between distributed teams."
      ),
      image: caminhadaGrupo,
      watermark: "Julia de Souza",
    },
    {
      icon: Briefcase,
      title: t("Consultoria Estratégica", "Strategic Consulting"),
      subtitle: t("Para casos complexos de mobilidade", "For complex mobility cases"),
      description: t(
        "Diagnóstico relacional completo com MRP™ para empresas com desafios específicos de integração cultural.",
        "Complete relational diagnosis with MRP™ for companies with specific cultural integration challenges."
      ),
      image: escadaAzul,
    },
  ];

  const results = [
    { metric: "87%", label: t("retenção de colaboradores relocados", "retention of relocated employees") },
    { metric: "3x", label: t("mais rápido na adaptação cultural", "faster cultural adaptation") },
    { metric: "280+", label: t("mapas culturais criados para empresas", "cultural maps created for companies") },
    { metric: "24h", label: t("suporte via Cult AI", "support via Cult AI") },
  ];

  const benefits = [
    t("Onboarding cultural para brasileiros e estrangeiros", "Cultural onboarding for Brazilians and foreigners"),
    t("Suporte para times distribuídos pelo Brasil", "Support for teams distributed across Brazil"),
    t("Métricas de integração e alertas para RH", "Integration metrics and HR alerts"),
    t("Curadoria de serviços locais verificados", "Curated verified local services"),
    t("Experiências guiadas para team building", "Guided experiences for team building"),
    t("Consultoria para mobilidade nacional e internacional", "Consulting for national and international mobility"),
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {t("São Paulo · Rio de Janeiro · Florianópolis", "São Paulo · Rio de Janeiro · Florianópolis")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t(
                "Seu time distribuído precisa pertencer à cidade.",
                "Your distributed team needs to belong to the city."
              )}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Onboarding cultural, suporte local e métricas de adaptação para empresas brasileiras com times em movimento.",
                "Cultural onboarding, local support and adaptation metrics for Brazilian companies with teams on the move."
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-energy-foreground shadow-lg gap-2 w-full sm:w-auto">
                  {t("Agendar demo", "Book demo")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary"
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("Ver planos", "See plans")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-foreground text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              {t("Sua empresa enfrenta isso?", "Does your company face this?")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 space-y-3">
                  <item.icon className="h-8 w-8 text-energy" />
                  <p className="font-bold text-lg">{item.problem}</p>
                  <p className="text-primary-foreground/70 text-sm">{item.impact}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-xl font-medium text-energy">
              {t(
                "Sem adaptação cultural → sem pertencimento → sem resultado.",
                "Without cultural adaptation → no belonging → no results."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Results metrics */}
      <section className="py-12 border-b border-border/30 bg-muted/20">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {results.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{item.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            {t("Como funciona", "How it works")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t(
              "Do diagnóstico ao resultado em 4 etapas.",
              "From diagnosis to results in 4 steps."
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-energy text-energy-foreground text-xl font-bold flex items-center justify-center mx-auto">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            {t("Soluções para sua empresa", "Solutions for your company")}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t(
              "Para times distribuídos pelo Brasil, equipes híbridas e mobilidade nacional ou internacional.",
              "For teams distributed across Brazil, hybrid teams and national or international mobility."
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border/50 bg-background space-y-4"
              >
                {solution.image && (
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {solution.watermark && (
                      <span className="absolute bottom-2 right-2 text-xs text-primary-foreground/60 bg-foreground/30 px-2 py-0.5 rounded backdrop-blur-sm">
                        📷 {solution.watermark}
                      </span>
                    )}
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                <p className="text-sm text-primary font-medium">{solution.subtitle}</p>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
                {t("Falar com especialista", "Talk to a specialist")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("O que sua empresa ganha", "What your company gains")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50"
              >
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pricing */}
      <section className="py-16 md:py-24 bg-muted/30" id="planos">
        <div className="container px-4">
          <B2BPricingTable />
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <video
                controls
                preload="metadata"
                poster="/videos/feltrip-overview.mp4#t=0.1"
                className="w-full h-auto"
                aria-label={t("Vídeo de apresentação Feltrip", "Feltrip presentation video")}
              >
                <source src="/videos/feltrip-overview.mp4" type="video/mp4" />
                {t("Seu navegador não suporta vídeos HTML5.", "Your browser does not support HTML5 video.")}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(
              "Pronto para integrar seu time de verdade?",
              "Ready to truly integrate your team?"
            )}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            {t(
              "Descontos progressivos para grupos de 10+ colaboradores.",
              "Progressive discounts for groups of 10+ employees."
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2 w-full sm:w-auto">
                {t("Agendar demo", "Book demo")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Ver planos", "See plans")}
            </Button>
          </div>
        </div>
      </section>

      {/* SEO */}
      <div className="sr-only">
        <p>
          Adaptação cultural empresas brasileiras, times distribuídos Brasil, onboarding cultural corporativo,
          mudança corporativa, integração de equipes, suporte local empresas, mobilidade nacional,
          pertencimento urbano corporativo, RH mobilidade global, expatriados Brasil.
        </p>
      </div>
    </MainLayout>
  );
};

export default ParaEmpresa;
