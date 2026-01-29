import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, MapPin, Globe, Users, Heart, Compass, BookOpen } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import koinzCapitalLogo from "@/assets/koinz-capital-logo.png";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const QuemSomos = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      icon: Compass,
      text: t(
        "Viveu a interculturalidade desde os 20 anos, passando pelas 27 capitais do Brasil com teatro de rua",
        "Lived interculturality since age 20, traveling through all 27 Brazilian capitals with street theater"
      ),
    },
    {
      icon: Globe,
      text: t(
        "Morou em países como Argentina e Canadá",
        "Lived in countries like Argentina and Canada"
      ),
    },
    {
      icon: BookOpen,
      text: t(
        "Viveu da educação intercultural dando aulas de português para estrangeiros",
        "Lived from intercultural education teaching Portuguese to foreigners"
      ),
    },
    {
      icon: Users,
      text: t(
        "Atuou por mais de 10 anos em projetos culturais, educação não formal, residências artísticas e comunidades",
        "Worked for over 10 years in cultural projects, non-formal education, artistic residencies, and communities"
      ),
    },
    {
      icon: Heart,
      text: t(
        "Conviveu profundamente com estrangeiros, migrantes, nômades digitais, artistas, acadêmicos e comunidades globais",
        "Deeply engaged with foreigners, migrants, digital nomads, artists, academics, and global communities"
      ),
    },
    {
      icon: MapPin,
      text: t(
        "Fez mais de 113 caminhadas interculturais com estrangeiros no Rio de Janeiro em 1 ano",
        "Conducted over 113 intercultural walks with foreigners in Rio de Janeiro in 1 year"
      ),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Quem somos", "About us")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "A Feltrip é uma empresa de tecnologia voltada ao bem-estar que ajuda equipes interculturais e pessoas com mobilidade global e nacional a se sentirem em casa mesmo em movimento.",
                "Feltrip is a wellness-focused technology company that helps intercultural teams and people with global and national mobility feel at home even while on the move."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t(
                  "Somos uma empresa que nasceu de uma trajetória real de vida intercultural.",
                  "We are a company born from a real intercultural life journey."
                )}
              </h2>
              
              <blockquote className="text-2xl md:text-3xl text-primary italic font-light">
                {t(
                  '"Antes de transformar isso em método, solução e empresa, eu vivi isso como vida."',
                  '"Before turning this into method, solution, and company, I lived it as life."'
                )}
              </blockquote>
              <p className="text-lg text-muted-foreground">
                — Fernanda, {t("Fundadora da Feltrip", "Founder of Feltrip")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("Feltrip não é teoria.", "Feltrip is not theory.")}
            </h2>
            <p className="text-2xl text-primary font-medium">
              {t("É campo. É prática. É vivência real.", "It's field. It's practice. It's real experience.")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t(
                "Participa e lidera comunidades com centenas de estrangeiros ativos. Criou projetos, residências, experiências e comunidades interculturais reais.",
                "Participates in and leads communities with hundreds of active foreigners. Created real intercultural projects, residencies, experiences, and communities."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h3 className="text-xl font-semibold text-muted-foreground">
              {t("Somos apoiados pela", "We are supported by")}
            </h3>
            <img
              src={koinzCapitalLogo}
              alt="Koinz Capital"
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("O primeiro ecossistema relacional do Brasil.", "Brazil's first relational ecosystem.")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t(
                "Integração intercultural, comunidades e soluções práticas para pessoas, empresas e cidades.",
                "Intercultural integration, communities, and practical solutions for people, companies, and cities."
              )}
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2 mt-4">
                {t("Falar com a gente", "Talk to us")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <div className="sr-only">
        <p>
          Feltrip empresa, integração intercultural Brasil, ecossistema relacional,
          educação intercultural, comunidades interculturais, hospitalidade intercultural,
          Fernanda Feltrip, história Feltrip, Koinz Capital.
        </p>
      </div>
    </MainLayout>
  );
};

export default QuemSomos;
