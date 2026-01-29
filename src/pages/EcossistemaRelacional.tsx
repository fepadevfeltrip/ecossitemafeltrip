import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Network, Bot, Users, Map, BarChart3, Compass } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import bobaDeboas from "@/assets/boba-deboas.png";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const EcossistemaRelacional = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Bot,
      title: "Boba Cult AI",
      description: t(
        "IA tutora de cultura brasileira e hyperlocalidade que apoia a adaptação cultural.",
        "AI tutor of Brazilian culture and hyperlocality that supports cultural adaptation."
      ),
    },
    {
      icon: Map,
      title: t("Mapa de Presença Relacional (MRP™)", "Relational Presence Map (MRP™)"),
      description: t(
        "Metodologia proprietária para medir e acompanhar integração cultural.",
        "Proprietary methodology to measure and track cultural integration."
      ),
    },
    {
      icon: Users,
      title: t("Comunidade", "Community"),
      description: t(
        "Rede de expatriados, imigrantes e profissionais em mobilidade global.",
        "Network of expatriates, immigrants, and professionals in global mobility."
      ),
    },
    {
      icon: Compass,
      title: t("Experiências Guiadas", "Guided Experiences"),
      description: t(
        "Caminhadas culturais, roteiros personalizados e vivências em grupo.",
        "Cultural walks, personalized itineraries, and group experiences."
      ),
    },
    {
      icon: BarChart3,
      title: t("Painel de RH", "HR Dashboard"),
      description: t(
        "Métricas de integração, bem-estar e risco psicossocial para empresas.",
        "Integration, well-being, and psychosocial risk metrics for companies."
      ),
    },
    {
      icon: Network,
      title: t("Rede de Parceiros", "Partner Network"),
      description: t(
        "Prestadores de serviços selecionados em educação, saúde mental, jurídico e moradia.",
        "Selected service providers in education, mental health, legal, and housing."
      ),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 text-energy text-sm font-medium rounded-full">
              <Network className="h-4 w-4" />
              {t("O primeiro do Brasil", "The first in Brazil")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Ecossistema Relacional", "Relational Ecosystem")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Um sistema integrado de integração intercultural, hospitalidade e educação para um mundo global.",
                "An integrated system of intercultural integration, hospitality, and education for a global world."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Infraestrutura relacional para pessoas, empresas e cidades.",
                "Relational infrastructure for people, companies, and cities."
              )}
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2 mt-4">
                {t("Conhecer o ecossistema", "Explore the ecosystem")}
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
              {t("O que é um Ecossistema Relacional?", "What is a Relational Ecosystem?")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Um Ecossistema Relacional é uma rede integrada de pessoas, tecnologias, metodologias e parceiros que trabalham juntos para facilitar a integração intercultural de forma sustentável e escalável.",
                "A Relational Ecosystem is an integrated network of people, technologies, methodologies, and partners working together to facilitate intercultural integration in a sustainable and scalable way."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "A Feltrip é o primeiro ecossistema relacional do Brasil, conectando todos os elementos necessários para que pessoas, empresas e comunidades possam se integrar entre culturas de forma prática e humana.",
                "Feltrip is Brazil's first relational ecosystem, connecting all the necessary elements for people, companies, and communities to integrate across cultures in a practical and human way."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Boba Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={bobaDeboas}
                alt="Boba Cult AI"
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t("Boba: o coração do ecossistema", "Boba: the heart of the ecosystem")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Boba é nossa IA tutora de cultura brasileira e hyperlocalidade. Ela é o ponto de contato principal do ecossistema, guiando membros através de conversas sobre hábitos, nuances culturais e dinâmicas relacionais.",
                  "Boba is our AI tutor of Brazilian culture and hyperlocality. She is the main contact point of the ecosystem, guiding members through conversations about habits, cultural nuances, and relational dynamics."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Pilares do Ecossistema", "Ecosystem Pillars")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
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
              "Faça parte do ecossistema relacional",
              "Be part of the relational ecosystem"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Conectamos culturas, pessoas e empresas com soluções reais de integração intercultural.",
              "We connect cultures, people, and companies with real intercultural integration solutions."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/para-voce">
              <Button size="lg" className="bg-energy hover:bg-energy/90 gap-2">
                {t("Para você", "For you")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/para-empresa">
              <Button size="lg" variant="outline">
                {t("Para empresas", "For companies")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            {t("Explore o ecossistema", "Explore the ecosystem")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/integracao-intercultural">
              <Button variant="outline" size="sm">{t("Integração Intercultural", "Intercultural Integration")}</Button>
            </Link>
            <Link to="/mobilidade-global">
              <Button variant="outline" size="sm">{t("Mobilidade Global", "Global Mobility")}</Button>
            </Link>
            <Link to="/hospitalidade-intercultural">
              <Button variant="outline" size="sm">{t("Hospitalidade Intercultural", "Intercultural Hospitality")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <div className="sr-only">
        <p>
          Ecossistema relacional, relational ecosystem, infraestrutura relacional, integração relacional,
          Feltrip ecossistema, plataforma integração cultural, sistema intercultural Brasil,
          tecnologia integração cultural, Boba Cult AI, MRP metodologia.
        </p>
      </div>
    </MainLayout>
  );
};

export default EcossistemaRelacional;
