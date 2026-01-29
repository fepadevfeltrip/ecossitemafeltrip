import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Heart, Shield, Users, BookOpen } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const ImigrantesNoBrasil = () => {
  const { t } = useLanguage();

  const support = [
    {
      icon: Heart,
      title: t("Acolhimento", "Welcome"),
      description: t(
        "Suporte emocional e prático para quem está reconstruindo a vida no Brasil.",
        "Emotional and practical support for those rebuilding their lives in Brazil."
      ),
    },
    {
      icon: Users,
      title: t("Comunidade", "Community"),
      description: t(
        "Conexão com outros imigrantes e comunidades de apoio em todo o Brasil.",
        "Connection with other immigrants and support communities throughout Brazil."
      ),
    },
    {
      icon: BookOpen,
      title: t("Orientação Cultural", "Cultural Guidance"),
      description: t(
        "Informações práticas sobre cultura, direitos, serviços e oportunidades no Brasil.",
        "Practical information about culture, rights, services, and opportunities in Brazil."
      ),
    },
    {
      icon: Shield,
      title: t("Segurança", "Safety"),
      description: t(
        "Mapa de segurança, alertas e recursos para situações de emergência.",
        "Safety map, alerts, and resources for emergency situations."
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
              {t("Imigrantes no Brasil", "Immigrants in Brazil")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Apoio e integração para imigrantes que escolheram o Brasil como novo lar.",
                "Support and integration for immigrants who chose Brazil as their new home."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Seja refugiado, imigrante econômico ou por reunião familiar — você não está sozinho.",
                "Whether refugee, economic immigrant, or family reunification — you are not alone."
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

      {/* Context */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              {t("Imigração e Acolhimento no Brasil", "Immigration and Welcome in Brazil")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "O Brasil recebe milhares de imigrantes todos os anos, vindos de diversos países em busca de uma nova vida. Seja por motivos econômicos, humanitários ou familiares, a jornada de integração requer apoio e orientação adequados.",
                "Brazil receives thousands of immigrants every year, coming from various countries in search of a new life. Whether for economic, humanitarian, or family reasons, the integration journey requires proper support and guidance."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "A Feltrip trabalha com organizações, empresas e comunidades para facilitar a integração de imigrantes, oferecendo ferramentas práticas e uma rede de apoio.",
                "Feltrip works with organizations, companies, and communities to facilitate immigrant integration, offering practical tools and a support network."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Como apoiamos imigrantes", "How we support immigrants")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {support.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-background space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
              "Você é imigrante no Brasil?",
              "Are you an immigrant in Brazil?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Junte-se à nossa comunidade e acesse recursos para sua integração.",
              "Join our community and access resources for your integration."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/para-voce">
              <Button size="lg" className="bg-energy hover:bg-energy/90 gap-2">
                {t("Ver planos", "See plans")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                {t("Falar conosco", "Talk to us")}
              </Button>
            </a>
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
            <Link to="/estrangeiros-no-brasil">
              <Button variant="outline" size="sm">{t("Estrangeiros no Brasil", "Foreigners in Brazil")}</Button>
            </Link>
            <Link to="/integracao-de-migrantes">
              <Button variant="outline" size="sm">{t("Integração de Migrantes", "Migrant Integration")}</Button>
            </Link>
            <Link to="/integracao-intercultural">
              <Button variant="outline" size="sm">{t("Integração Intercultural", "Intercultural Integration")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <div className="sr-only">
        <p>
          Imigrantes no Brasil, immigrants in Brazil, imigração Brasil, refugiados Brasil,
          apoio imigrantes, integração imigrantes, comunidade imigrantes, direitos imigrantes Brasil,
          acolhimento imigrantes, immigrant support Brazil.
        </p>
      </div>
    </MainLayout>
  );
};

export default ImigrantesNoBrasil;
