import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Users, Globe, Building2, Heart } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const IntegracaoIntercultural = () => {
  const { t } = useLanguage();

  const benefits = [
    t("Redução de conflitos culturais no ambiente de trabalho", "Reduced cultural conflicts in the workplace"),
    t("Maior engajamento e produtividade das equipes", "Increased team engagement and productivity"),
    t("Retenção de talentos internacionais", "International talent retention"),
    t("Comunicação intercultural eficaz", "Effective intercultural communication"),
    t("Ambiente de trabalho mais inclusivo", "More inclusive work environment"),
    t("Prevenção de riscos psicossociais", "Psychosocial risk prevention"),
  ];

  const audiences = [
    {
      icon: Building2,
      title: t("Empresas", "Companies"),
      description: t(
        "Multinacionais, startups e empresas com equipes globais que precisam integrar colaboradores de diferentes culturas.",
        "Multinationals, startups, and companies with global teams that need to integrate employees from different cultures."
      ),
    },
    {
      icon: Users,
      title: t("Equipes de RH", "HR Teams"),
      description: t(
        "Profissionais de RH e Global Mobility que gerenciam onboarding e relocação de talentos internacionais.",
        "HR and Global Mobility professionals who manage onboarding and relocation of international talent."
      ),
    },
    {
      icon: Globe,
      title: t("Estrangeiros", "Foreigners"),
      description: t(
        "Expatriados, imigrantes e nômades digitais que estão chegando ou já vivem no Brasil.",
        "Expatriates, immigrants, and digital nomads who are arriving or already living in Brazil."
      ),
    },
    {
      icon: Heart,
      title: t("Comunidades", "Communities"),
      description: t(
        "ONGs, instituições e comunidades que trabalham com integração de migrantes e refugiados.",
        "NGOs, institutions, and communities working with migrant and refugee integration."
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
              {t("Integração Intercultural", "Intercultural Integration")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Conectamos culturas, pessoas e empresas com soluções reais de integração intercultural.",
                "We connect cultures, people, and companies with real intercultural integration solutions."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Integração intercultural na prática: pessoas, empresas e comunidades conectadas.",
                "Intercultural integration in practice: people, companies, and communities connected."
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
              {t("O que é Integração Intercultural?", "What is Intercultural Integration?")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Integração intercultural é o processo pelo qual pessoas de diferentes origens culturais aprendem a conviver, trabalhar e se relacionar de forma harmoniosa e produtiva. Vai muito além de simplesmente conhecer outras culturas — trata-se de criar pontes, desenvolver empatia e construir relações de confiança.",
                "Intercultural integration is the process by which people from different cultural backgrounds learn to live, work, and relate harmoniously and productively. It goes far beyond simply knowing other cultures — it's about building bridges, developing empathy, and building trust relationships."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Na Feltrip, entendemos que integração cultural não é conteúdo — é estrutura de vida, trabalho e pertencimento. Por isso, desenvolvemos metodologias práticas que combinam tecnologia, experiências guiadas e suporte humano.",
                "At Feltrip, we understand that cultural integration is not content — it's life, work, and belonging structure. That's why we've developed practical methodologies that combine technology, guided experiences, and human support."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Benefícios da Integração Intercultural", "Benefits of Intercultural Integration")}
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

      {/* Audiences */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Para quem é a Integração Intercultural?", "Who is Intercultural Integration for?")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
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
              "Pronto para transformar a integração cultural da sua equipe?",
              "Ready to transform your team's cultural integration?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Descubra como a Feltrip pode ajudar sua empresa a criar equipes mais conectadas, produtivas e culturalmente integradas.",
              "Discover how Feltrip can help your company create more connected, productive, and culturally integrated teams."
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

      {/* Related Pages */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            {t("Páginas relacionadas", "Related pages")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/mobilidade-global">
              <Button variant="outline" size="sm">{t("Mobilidade Global", "Global Mobility")}</Button>
            </Link>
            <Link to="/onboarding-cultural">
              <Button variant="outline" size="sm">{t("Onboarding Cultural", "Cultural Onboarding")}</Button>
            </Link>
            <Link to="/hospitalidade-intercultural">
              <Button variant="outline" size="sm">{t("Hospitalidade Intercultural", "Intercultural Hospitality")}</Button>
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
          Integração intercultural, treinamento intercultural, adaptação cultural empresas,
          diversidade cultural, inclusão cultural, equipes multiculturais, comunicação intercultural,
          competência intercultural, gestão intercultural, cultura organizacional global.
        </p>
      </div>
    </MainLayout>
  );
};

export default IntegracaoIntercultural;
