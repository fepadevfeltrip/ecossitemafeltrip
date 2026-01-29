import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Plane, Briefcase, MapPin, Shield } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const MobilidadeGlobal = () => {
  const { t } = useLanguage();

  const services = [
    t("Onboarding cultural pré e pós-chegada", "Pre and post-arrival cultural onboarding"),
    t("Curadoria de prestadores de serviços de relocação", "Relocation service provider curation"),
    t("Acompanhamento de adaptação com métricas", "Adaptation monitoring with metrics"),
    t("Suporte para famílias em transição", "Support for families in transition"),
    t("Painel de RH para Global Mobility", "HR dashboard for Global Mobility"),
    t("Alertas de risco psicossocial", "Psychosocial risk alerts"),
  ];

  const challenges = [
    {
      icon: Plane,
      title: t("Relocação", "Relocation"),
      description: t(
        "Mudança de país ou cidade sem preparação cultural adequada gera estresse e desengajamento.",
        "Moving to another country or city without proper cultural preparation creates stress and disengagement."
      ),
    },
    {
      icon: Briefcase,
      title: t("Produtividade", "Productivity"),
      description: t(
        "Colaboradores desadaptados levam mais tempo para performar e têm maior risco de turnover.",
        "Maladjusted employees take longer to perform and have higher turnover risk."
      ),
    },
    {
      icon: MapPin,
      title: t("Integração Local", "Local Integration"),
      description: t(
        "Sem suporte adequado, a conexão com a cidade, serviços e comunidade local não acontece.",
        "Without proper support, connection with the city, services, and local community doesn't happen."
      ),
    },
    {
      icon: Shield,
      title: t("Bem-estar", "Well-being"),
      description: t(
        "Isolamento cultural afeta saúde mental e pode evoluir para problemas psicossociais sérios.",
        "Cultural isolation affects mental health and can evolve into serious psychosocial problems."
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
              {t("Mobilidade Global", "Global Mobility")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Soluções completas para empresas que movimentam talentos internacionalmente.",
                "Complete solutions for companies that move talent internationally."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Estrutura intercultural para empresas, equipes globais e ambientes híbridos.",
                "Intercultural structure for companies, global teams, and hybrid environments."
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
              {t("O que é Mobilidade Global?", "What is Global Mobility?")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Mobilidade Global refere-se ao movimento de funcionários através de fronteiras geográficas para atender às necessidades de negócios. Isso inclui expatriações, transferências internacionais, projetos de curto prazo e contratações de talentos estrangeiros.",
                "Global Mobility refers to the movement of employees across geographical borders to meet business needs. This includes expatriations, international transfers, short-term projects, and hiring of foreign talent."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Na Feltrip, entendemos que mobilidade global de sucesso vai além de logística — envolve adaptação cultural profunda, bem-estar relacional e integração real ao novo território.",
                "At Feltrip, we understand that successful global mobility goes beyond logistics — it involves deep cultural adaptation, relational well-being, and real integration into the new territory."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Desafios da Mobilidade Global", "Global Mobility Challenges")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-background space-y-4"
                >
                  <div className="p-3 rounded-xl bg-accent/10 w-fit">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Como a Feltrip ajuda na Mobilidade Global", "How Feltrip helps with Global Mobility")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-foreground">{service}</span>
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
              "Sua empresa está preparada para a Mobilidade Global?",
              "Is your company prepared for Global Mobility?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Descubra como podemos ajudar sua equipe de Global Mobility a ter mais sucesso nas relocações e transferências internacionais.",
              "Discover how we can help your Global Mobility team be more successful in relocations and international transfers."
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
            <Link to="/onboarding-cultural">
              <Button variant="outline" size="sm">{t("Onboarding Cultural", "Cultural Onboarding")}</Button>
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
          Mobilidade global, global mobility, expatriação, relocação internacional,
          transferência internacional, RH global, HR global mobility, talent mobility,
          gestão de expatriados, international assignment, cross-border mobility.
        </p>
      </div>
    </MainLayout>
  );
};

export default MobilidadeGlobal;
