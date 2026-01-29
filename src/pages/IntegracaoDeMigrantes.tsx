import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Building2, Users, Globe, Heart } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const IntegracaoDeMigrantes = () => {
  const { t } = useLanguage();

  const approaches = [
    t("Programas de acolhimento estruturados", "Structured welcome programs"),
    t("Orientação cultural e linguística", "Cultural and language guidance"),
    t("Conexão com serviços essenciais", "Connection with essential services"),
    t("Integração ao mercado de trabalho", "Labor market integration"),
    t("Apoio à saúde mental e bem-estar", "Mental health and well-being support"),
    t("Construção de comunidade e pertencimento", "Community building and belonging"),
  ];

  const forWho = [
    {
      icon: Building2,
      title: t("Empresas", "Companies"),
      description: t(
        "Programas de integração para colaboradores migrantes, refugiados e em mobilidade nacional.",
        "Integration programs for migrant employees, refugees, and those in national mobility."
      ),
    },
    {
      icon: Heart,
      title: t("ONGs e Instituições", "NGOs and Institutions"),
      description: t(
        "Parcerias para ampliar o alcance de programas de acolhimento e integração.",
        "Partnerships to expand the reach of welcome and integration programs."
      ),
    },
    {
      icon: Globe,
      title: t("Governos Locais", "Local Governments"),
      description: t(
        "Consultoria para políticas públicas de integração de migrantes em cidades.",
        "Consulting for public policies on migrant integration in cities."
      ),
    },
    {
      icon: Users,
      title: t("Comunidades", "Communities"),
      description: t(
        "Ferramentas e metodologias para comunidades que acolhem migrantes.",
        "Tools and methodologies for communities welcoming migrants."
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
              {t("Integração de Migrantes", "Migrant Integration")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Soluções estruturadas para organizações que trabalham com integração de migrantes e refugiados.",
                "Structured solutions for organizations working with migrant and refugee integration."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Integração de verdade: com método, tecnologia e humanidade.",
                "Real integration: with method, technology, and humanity."
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
              {t("O Desafio da Integração de Migrantes", "The Challenge of Migrant Integration")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "A integração de migrantes vai muito além de oferecer moradia e trabalho. Envolve a construção de pertencimento, o desenvolvimento de relações sociais significativas e a adaptação a uma nova cultura.",
                "Migrant integration goes far beyond providing housing and work. It involves building belonging, developing meaningful social relationships, and adapting to a new culture."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "A Feltrip oferece metodologias e ferramentas para organizações que querem ir além do básico e oferecer integração real — não apenas sobrevivência, mas pertencimento.",
                "Feltrip offers methodologies and tools for organizations that want to go beyond the basics and offer real integration — not just survival, but belonging."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Nossa abordagem para Integração de Migrantes", "Our approach to Migrant Integration")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-foreground">{approach}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Para quem é", "Who it's for")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {forWho.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card space-y-4"
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
              "Sua organização trabalha com migrantes?",
              "Does your organization work with migrants?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Conheça como a Feltrip pode apoiar seus programas de integração.",
              "Learn how Feltrip can support your integration programs."
            )}
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-energy hover:bg-energy/90 gap-2">
              {t("Falar com especialista", "Talk to a specialist")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            {t("Páginas relacionadas", "Related pages")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/imigrantes-no-brasil">
              <Button variant="outline" size="sm">{t("Imigrantes no Brasil", "Immigrants in Brazil")}</Button>
            </Link>
            <Link to="/estrangeiros-no-brasil">
              <Button variant="outline" size="sm">{t("Estrangeiros no Brasil", "Foreigners in Brazil")}</Button>
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
          Integração de migrantes, migrant integration, refugiados Brasil, refugee integration,
          acolhimento migrantes, programas de integração, políticas migratórias, ONG imigrantes,
          inclusão social migrantes, migrant support programs Brazil.
        </p>
      </div>
    </MainLayout>
  );
};

export default IntegracaoDeMigrantes;
