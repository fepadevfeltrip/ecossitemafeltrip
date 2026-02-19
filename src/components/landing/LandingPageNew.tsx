import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { CommunityBanner } from "@/components/CommunityBanner";

// Images
import feltripLogoTrans from "@/assets/feltrip-logo-trans.png";
import teamHands from "@/assets/team-hands.jpg";

// Partner logos
import koinzCapitalLogo from "@/assets/koinz-capital-logo.png";
import coletivaDelasLogo from "@/assets/coletiva-delas-logo.png";
import justicaGlobalLogo from "@/assets/justica-global-logo.png";
import nomadWorldLogo from "@/assets/nomad-world-logo.png";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

export const LandingPageNew = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  const results = [
    t("Comunicação interlocal sem ruído", "Interlocal communication without noise"),
    t("Mais produtividade", "More productivity"),
    t("Menos problemas culturais no dia a dia", "Fewer cultural issues in daily life"),
    t("Equipes mais confiantes", "More confident teams"),
    t("Adaptação do colaborador/estrangeiro facilitada", "Easier employee/foreigner adaptation"),
  ];

  const partnerLogos = [
    { src: koinzCapitalLogo, alt: "Koinz Capital" },
    { src: coletivaDelasLogo, alt: "Coletiva Delas" },
    { src: justicaGlobalLogo, alt: "Justiça Global" },
    { src: nomadWorldLogo, alt: "Nomad World" },
  ];

  return (
    <main className="space-y-0" role="main">
      {/* SEÇÃO 1 - Hero com proposta de valor */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={teamHands}
            alt={t("Equipe diversa em integração intercultural no Brasil", "Diverse team in intercultural integration in Brazil")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="relative container px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {t("O primeiro ecossistema relacional do Brasil", "Brazil's first relational ecosystem")}
            </span>

            <div className="relative inline-block my-4 md:my-6 py-6 md:py-8 px-4 md:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight relative z-10">
                {t(
                  "Ajudamos pessoas, empresas e eventos a se integrarem entre culturas.",
                  "We help people, companies and events integrate across cultures."
                )}
              </h1>
              {/* Hand-drawn circle SVG */}
              <svg
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="200"
                  cy="50"
                  rx="198"
                  ry="48"
                  stroke="#EAA823"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray: "4 2 12 4 8 2",
                    transform: "rotate(-0.5deg)",
                    transformOrigin: "center",
                  }}
                />
                {/* Second slightly offset ellipse for hand-drawn effect */}
                <ellipse
                  cx="201"
                  cy="51"
                  rx="196"
                  ry="46"
                  stroke="#EAA823"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                  style={{
                    strokeDasharray: "8 3 4 2",
                    transform: "rotate(0.3deg)",
                    transformOrigin: "center",
                  }}
                />
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t(
                "Integração intercultural na prática para estrangeiros, empresas e comunidades.",
                "Intercultural integration in practice for foreigners, companies and communities."
              )}
            </h2>


            <p className="text-base text-foreground">
              {t(
                "Com método, tecnologia e suporte humano, fazemos essa adaptação acontecer de forma prática, simples e sustentável.",
                "With method, technology, and human support, we make this adaptation happen in a practical, simple, and sustainable way."
              )}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/para-empresa">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-white shadow-lg gap-2"
                >
                  {t("Para sua empresa", "For your company")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/para-voce">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary/30 hover:border-primary"
                >
                  {t("Para você", "For you")}
                </Button>
              </Link>
            </div>

            {/* Nossa Metodologia Link */}
            <div className="pt-2">
              <Link 
                to="/nossa-metodologia"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
              >
                {t("Nossa Metodologia", "Our Methodology")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* SEÇÃO 3 - Prova Social */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("Quem já usa", "Who already uses")}
            </h2>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-background border border-border/50 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <blockquote className="text-foreground italic text-sm leading-relaxed">
                  "Fernanda and Jessica gave an amazing tour of Little Africa and museums in Rio. They shared so much about the city's culture, especially Black history in Brazil, and made it super engaging. Fernanda was really knowledgeable and quick to answer any questions. I learned a lot and would definitely recommend this tour!"
                </blockquote>
                <cite className="text-muted-foreground text-sm block">— Betty T, from Eritreia</cite>
              </div>
              
              <div className="p-6 rounded-xl bg-background border border-border/50 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <blockquote className="text-foreground italic text-sm leading-relaxed">
                  "Enjoyed a wonderful Carioca Tour this morning learning about Black history in Brazil. Very informative and gives a new perspective to the city and it's culture. Enjoyed a wonderful lunch as well. The guide was wonderful and spoke English for us. Highly recommend the experience."
                </blockquote>
                <cite className="text-muted-foreground text-sm block">— Diane K, from USA</cite>
              </div>
              
              <div className="p-6 rounded-xl bg-background border border-border/50 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <blockquote className="text-foreground italic text-sm leading-relaxed">
                  "Fizemos uma parceria para defensores de direitos humanos e foi de muita importância para a passagem de uma pessoa ameaçada de morte por sua atuação como líder comunitário em seu país de origem. Fernanda e a equipe sempre muito solicita e a disposição para construir um ambiente de respeito e colaboração."
                </blockquote>
                <cite className="text-muted-foreground text-sm block">— Antonio Neto, from Justiça Global</cite>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://share.google/6tCYIWQimhBdlJBV4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-4"
              >
                {t("Ver mais avaliações no Google", "See more reviews on Google")}
              </a>
            </div>
          </div>

          {/* Por que funciona */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              {t("Por que funciona", "Why it works")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50"
                >
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2"
            >
              {t("Quero resultados assim", "I want results like this")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <CommunityBanner />
        </div>
      </section>
    </main>
  );
};
