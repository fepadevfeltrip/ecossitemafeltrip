import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Users, MessageSquare, User, ExternalLink } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

const ARTICLE_LINK = "https://oestrangeiro.org/2026/01/08/mapa-da-presenca-relacional-uma-cartografia-dos-modos-de-presenca-nos-encontros-e-vinculos-com-o-territorio/";

const NossaMetodologia = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: MapPin,
      title: t("O território", "The territory"),
      description: t("O espaço que pisamos", "The space we walk on"),
    },
    {
      icon: Users,
      title: t("As pessoas", "The people"),
      description: t("Os vínculos que criamos", "The bonds we create"),
    },
    {
      icon: MessageSquare,
      title: t("Os códigos implícitos", "The implicit codes"),
      description: t("O que não é dito", "What is not said"),
    },
    {
      icon: User,
      title: t("O próprio corpo", "The body itself"),
      description: t("A sensação de pertencer", "The feeling of belonging"),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {t("Nossa Metodologia", "Our Methodology")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("O Mapa da Presença Relacional", "The Relational Presence Map")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "Uma metodologia prática desenhada para tornar visível o que ninguém vê: a dor invisível da adaptação cultural.",
                "A practical methodology designed to make visible what no one sees: the invisible pain of cultural adaptation."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                {t(
                  "Desenvolvida a partir da minha experiência direta com estrangeiros e validada em mais de 200 caminhadas, esta ferramenta nasce da necessidade de traduzir a complexidade das relações em um dispositivo real de transformação.",
                  "Developed from my direct experience with foreigners and validated in over 200 walks, this tool was born from the need to translate the complexity of relationships into a real transformation device."
                )}
              </p>
            </div>

            {/* Academic Background */}
            <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/10">
              <p className="text-lg text-foreground leading-relaxed">
                {t(
                  'Minha trajetória como pesquisadora em Arte Relacional — com estudos publicados pela Funarte e UFRJ — é o que dá o lastro teórico a este método. No Mapa, eu transformo a "performance do encontro" em um ecossistema de hospitalidade que investiga como nos tornamos presentes (ou ausentes) diante de:',
                  'My trajectory as a researcher in Relational Art — with studies published by Funarte and UFRJ — is what gives the theoretical foundation to this method. In the Map, I transform the "performance of encounter" into a hospitality ecosystem that investigates how we become present (or absent) in the face of:'
                )}
              </p>
            </div>

            {/* Four Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-energy/50 transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-energy/10 shrink-0">
                      <Icon className="h-6 w-6 text-energy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Statement */}
            <div className="text-center space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                {t(
                  "Aqui, o encontro não é apenas teoria; é uma ferramenta reflexiva de leitura relacional para quem vive a mobilidade na pele.",
                  "Here, the encounter is not just theory; it is a reflective tool for relational reading for those who live mobility in their skin."
                )}
              </p>
            </div>

            {/* CTA to Article */}
            <div className="bg-muted/50 rounded-2xl p-8 md:p-10 text-center space-y-6">
              <p className="text-lg text-foreground">
                📎 {t(
                  "Quer entender como essa cartografia funciona na prática? Confira a reportagem sobre a metodologia publicada originalmente para o grupo de pesquisa da UFRJ:",
                  "Want to understand how this cartography works in practice? Check out the article about the methodology originally published for the UFRJ research group:"
                )}
              </p>
              <a href={ARTICLE_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
                  {t("Ler a reportagem completa", "Read the full article")}
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NossaMetodologia;
