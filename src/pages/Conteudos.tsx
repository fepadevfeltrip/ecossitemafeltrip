import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, BookOpen, Video, Mic, FileText, ExternalLink } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

const CULTURE_GUIDE_LINK = "https://cultureguide.feltrip.com";
const BOBA_ASSISTANT_LINK = "https://boba-feltrip-assistant-690453797160.us-west1.run.app";

const Conteudos = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: BookOpen,
      title: t("Guia Cultural", "Culture Guide"),
      description: t(
        "Conheça algumas nuances culturais do jeitinho brasileiro, sem clichê. Um guia prático para quem quer entender o Brasil de verdade.",
        "Discover some cultural nuances of the Brazilian jeitinho, without clichés. A practical guide for those who want to truly understand Brazil."
      ),
      cta: t("Acessar guia", "Access guide"),
      href: CULTURE_GUIDE_LINK,
      external: true,
    },
    {
      icon: Mic,
      title: t("Cult AI", "Cult AI"),
      description: t(
        "Converse com nossa IA tutora de cultura brasileira. Tire dúvidas sobre hábitos, expressões, e nuances culturais em tempo real.",
        "Chat with our Brazilian culture AI tutor. Ask questions about habits, expressions, and cultural nuances in real time."
      ),
      cta: t("Falar com Cult", "Talk to Cult"),
      href: BOBA_ASSISTANT_LINK,
      external: true,
    },
    {
      icon: Video,
      title: t("Vídeo de Apresentação", "Presentation Video"),
      description: t(
        "Assista nosso vídeo e entenda como a Feltrip transforma a integração cultural de equipes e indivíduos.",
        "Watch our video and understand how Feltrip transforms cultural integration for teams and individuals."
      ),
      cta: t("Assistir vídeo", "Watch video"),
      href: "/#video",
      external: false,
    },
  ];

  const articles = [
    {
      title: t(
        "Por que adaptação cultural importa para empresas globais",
        "Why cultural adaptation matters for global companies"
      ),
      excerpt: t(
        "Desalinhamento cultural durante relocação e onboarding leva a desengajamento, risco psicossocial e alta rotatividade.",
        "Cultural misalignment during relocation and onboarding leads to disengagement, psychosocial risk, and high turnover."
      ),
      category: t("Empresas", "Companies"),
    },
    {
      title: t(
        "O que é o Mapa de Presença Relacional (MRP™)",
        "What is the Relational Presence Map (MRP™)"
      ),
      excerpt: t(
        "Nossa metodologia proprietária para medir e acompanhar a integração cultural através de cinco pilares fundamentais.",
        "Our proprietary methodology to measure and track cultural integration through five fundamental pillars."
      ),
      category: t("Metodologia", "Methodology"),
    },
    {
      title: t(
        "Estrangeiros no Brasil: desafios e oportunidades",
        "Foreigners in Brazil: challenges and opportunities"
      ),
      excerpt: t(
        "Um panorama sobre a experiência de viver e trabalhar no Brasil como estrangeiro, e como superar os principais desafios.",
        "An overview of the experience of living and working in Brazil as a foreigner, and how to overcome the main challenges."
      ),
      category: t("Cultura", "Culture"),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Conteúdos", "Content")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "Recursos, guias e ferramentas para sua jornada de integração cultural.",
                "Resources, guides, and tools for your cultural integration journey."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Recursos em destaque", "Featured resources")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-colors space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                  <a
                    href={resource.href}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                  >
                    <Button variant="outline" className="gap-2 mt-2">
                      {resource.cta}
                      {resource.external ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            {t("Artigos e insights", "Articles and insights")}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t("Em breve: blog completo com conteúdos sobre integração intercultural.", 
               "Coming soon: complete blog with content about intercultural integration.")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border/50 space-y-3"
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24" id="video">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              {t("Conheça a Feltrip", "Meet Feltrip")}
            </h2>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <video
                controls
                preload="metadata"
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

      {/* SEO Keywords */}
      <div className="sr-only">
        <p>
          Conteúdos integração intercultural, guia cultural Brasil, recursos mobilidade global,
          artigos onboarding cultural, blog expatriados, educação intercultural conteúdo.
        </p>
      </div>
    </MainLayout>
  );
};

export default Conteudos;
