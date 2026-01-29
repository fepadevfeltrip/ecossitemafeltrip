import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Building2, BarChart3, Shield, Users, Bot, LayoutDashboard, Compass, Sparkles, Briefcase } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

// Images
import bobaDeboas from "@/assets/boba-deboas.png";
import metricsAnalysis from "@/assets/metrics-analysis.jpg";
import caminhadaGrupo from "@/assets/caminhada-grupo.jpg";
import escadaAzul from "@/assets/escada-azul.jpg";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const ParaEmpresa = () => {
  const { t } = useLanguage();

  const painPoints = [
    {
      problem: t("Sem adaptação cultural", "Without cultural adaptation"),
      result: t("não existe permanência.", "there is no permanence."),
    },
    {
      problem: t("Sem permanência", "Without permanence"),
      result: t("não existe retenção.", "there is no retention."),
    },
    {
      problem: t("Sem retenção", "Without retention"),
      result: t("não existe resultado.", "there are no results."),
    },
  ];

  const steps = [
    {
      number: "1",
      title: t("Diagnóstico", "Diagnosis"),
      description: t(
        "Entendemos o que o seu time precisa através do Mapa de Presença Relacional.",
        "We understand what your team needs through the Relational Presence Map."
      ),
      icon: BarChart3,
    },
    {
      number: "2",
      title: t("Plano personalizado", "Personalized plan"),
      description: t(
        "Criamos um plano simples e direto para as necessidades da sua empresa.",
        "We create a simple and direct plan for your company's needs."
      ),
      icon: Building2,
    },
    {
      number: "3",
      title: t("Implementamos", "We implement"),
      description: t(
        "Treinamentos e acompanhamento de perto para garantir a integração.",
        "Training and close monitoring to ensure integration."
      ),
      icon: Users,
    },
    {
      number: "4",
      title: t("Resultados", "Results"),
      description: t(
        "Times mais alinhados e produtivos. Turnover reduzido.",
        "More aligned and productive teams. Reduced turnover."
      ),
      icon: Shield,
    },
  ];

  const solutions = [
    {
      icon: Bot,
      title: "Boba Cult AI",
      subtitle: t(
        "Tutora de cultura brasileira e hyperlocalidade",
        "Brazilian culture and hyperlocality tutor"
      ),
      description: t(
        "Nossa IA tutora de cultura brasileira interage com colaboradores sobre hábitos cotidianos, nuances culturais e dinâmicas relacionais, apoiando a adaptação cultural.",
        "Our Brazilian culture AI tutor interacts with employees about everyday habits, cultural nuances, and relational dynamics, supporting cultural adaptation."
      ),
      image: bobaDeboas,
    },
    {
      icon: Sparkles,
      title: t("Agente de Acolhimento Cultural Personalizado", "Personalized Cultural Welcome Agent"),
      subtitle: t(
        "IA de hospitalidade cultural adaptada à identidade da sua organização",
        "Cultural hospitality AI adapted to your organization's identity"
      ),
      description: t(
        "O agente pode ser totalmente personalizado com nome, tom de voz, identidade visual e conteúdos locais para representar sua marca.",
        "The agent can be fully customized with name, tone of voice, visual identity, and local content to represent your brand."
      ),
    },
    {
      icon: LayoutDashboard,
      title: t("Integração Cultural Monitorada", "Monitored Cultural Integration"),
      subtitle: t("Em tempo real", "In real time"),
      description: t(
        "Diários de experiência, mapas de integração, alertas de segurança e painel para acompanhar adaptação cultural e riscos psicossociais.",
        "Experience diaries, integration maps, safety alerts, and dashboard to track cultural adaptation and psychosocial risks."
      ),
      image: metricsAnalysis,
    },
    {
      icon: Users,
      title: t("Tutor Credenciado Feltrip", "Feltrip Certified Tutor"),
      subtitle: t("Concierge intercultural e poliglota", "Intercultural and polyglot concierge"),
      description: t(
        "Integração real à cidade, idioma, serviços e cultura local com concierge intercultural para equipes corporativas.",
        "Real integration to the city, language, services, and local culture with intercultural concierge for corporate teams."
      ),
      image: escadaAzul,
    },
    {
      icon: Compass,
      title: t("Experiência Guiada", "Guided Experience"),
      subtitle: t("Roteiros culturais e vivências locais", "Cultural itineraries and local experiences"),
      description: t(
        "Roteiros culturais e experiências em grupo que aceleram a adaptação cultural e fortalecem a integração com a equipe.",
        "Cultural itineraries and group experiences that accelerate cultural adaptation and strengthen team integration."
      ),
      image: caminhadaGrupo,
    },
    {
      icon: Briefcase,
      title: t("Consultoria Personalizada", "Personalized Consulting"),
      subtitle: t("Solução feita para o seu caso", "Solution made for your case"),
      description: t(
        "Experiências sob medida a partir de um diagnóstico relacional baseado no Mapa da Presença Relacional (MRP™).",
        "Tailored experiences based on a relational diagnosis using the Relational Presence Map (MRP™)."
      ),
    },
  ];

  const benefits = [
    t("Redução de turnover em equipes internacionais", "Reduced turnover in international teams"),
    t("Onboarding cultural completo para novos colaboradores", "Complete cultural onboarding for new employees"),
    t("Painel de RH com métricas de integração", "HR dashboard with integration metrics"),
    t("Alertas de risco psicossocial em tempo real", "Real-time psychosocial risk alerts"),
    t("Curadoria de prestadores de serviços locais", "Local service provider curation"),
    t("Experiências guiadas para team building", "Guided experiences for team building"),
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Para sua empresa", "For your company")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "Estrutura intercultural para empresas, equipes globais e ambientes híbridos.",
                "Intercultural structure for companies, global teams, and hybrid environments."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {painPoints.map((point, index) => (
              <p key={index} className="text-2xl md:text-3xl font-medium">
                <span className="text-energy">{point.problem}</span>, {point.result}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Como funciona", "How it works")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-energy text-white text-lg font-bold flex items-center justify-center mx-auto -mt-8 border-4 border-background">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
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
              "Prepare sua empresa para trabalhar com qualquer cultura - nacional ou internacional.",
              "Prepare your company to work with any culture - national or international."
            )}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-background space-y-4"
                >
                  {solution.image ? (
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-energy/10 w-fit">
                      <Icon className="h-6 w-6 text-energy" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  <p className="text-sm text-primary font-medium">{solution.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
                {t("Contrate agora", "Hire now")}
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
            {t("Benefícios para sua empresa", "Benefits for your company")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t(
              "Vamos fazer sua equipe funcionar de verdade com times globais.",
              "Let's make your team truly work with global teams."
            )}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t(
              "Descontos progressivos para grupos de 10+ colaboradores.",
              "Progressive discounts for groups of 10+ employees."
            )}
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
              {t("Contrate agora", "Hire now")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* SEO Keywords */}
      <div className="sr-only">
        <p>
          Integração intercultural empresas, mobilidade global corporativa, onboarding cultural B2B,
          RH global mobility, treinamento intercultural equipes, adaptação cultural colaboradores,
          expatriados Brasil empresas, integração de migrantes corporativo.
        </p>
      </div>
    </MainLayout>
  );
};

export default ParaEmpresa;
