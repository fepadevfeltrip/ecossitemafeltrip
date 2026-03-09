import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Ear, Palette, Rocket, Quote } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";

// Logos
import justicaGlobalLogo from "@/assets/justica-global-logo.png";
import coletivaDelasLogo from "@/assets/coletiva-delas-logo.png";
import nomadWorldLogo from "@/assets/nomad-world-logo.png";
import koinzCapitalLogo from "@/assets/koinz-capital-logo.png";

// Mascot
import bobaHappy from "@/assets/boba-happy.png";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const ParaEmpresa = () => {
  const { t } = useLanguage();

  const logos = [
    { src: justicaGlobalLogo, alt: "Justiça Global" },
    { src: coletivaDelasLogo, alt: "ColetivA Delas" },
    { src: nomadWorldLogo, alt: "The Nomad World" },
    { src: koinzCapitalLogo, alt: "Koinz Capital" },
  ];

  const steps = [
    {
      icon: Ear,
      title: t("Escuta", "Listening"),
      description: t(
        "Entendemos o território, o público e o objetivo.",
        "We understand the territory, the audience and the goal."
      ),
    },
    {
      icon: Palette,
      title: t("Curadoria", "Curation"),
      description: t(
        "Desenhamos a experiência ou o produto de dados.",
        "We design the experience or the data product."
      ),
    },
    {
      icon: Rocket,
      title: t("Entrega", "Delivery"),
      description: t(
        "Projeto executado ou dashboard ativo.",
        "Project delivered or dashboard active."
      ),
    },
  ];

  return (
    <MainLayout>
      {/* HERO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-primary leading-tight">
                {t(
                  "Experiências que criam pertencimento.",
                  "Experiences that create belonging."
                )}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                {t(
                  "Projetos culturais interculturais e inteligência de cidade para ONGs, prefeituras, leis de incentivo e negócios locais.",
                  "Intercultural cultural projects and city intelligence for NGOs, municipalities, incentive laws and local businesses."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-6 py-5 border-primary text-primary hover:bg-primary/5 gap-2"
                  onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t("Ver projetos realizados", "See completed projects")}
                </Button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-base px-6 py-5 bg-energy hover:bg-energy/90 text-energy-foreground gap-2 w-full">
                    {t("Falar com a Fernanda", "Talk to Fernanda")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-48 md:w-64 lg:w-72">
              <img
                src={bobaHappy}
                alt="Cult — mascote Feltrip"
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LOGOS */}
      <section className="py-10 md:py-14 border-y border-border/30 bg-muted/20">
        <div className="container px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            {t("Quem já construiu com a gente", "Who has already built with us")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TWO REAL CASES */}
      <section id="cases" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            {t("Projetos que já fizemos", "Projects we've completed")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 — Narrativa Migrante */}
            <div className="rounded-2xl border border-border/50 bg-background p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs font-medium">{t("Projeto Cultural", "Cultural Project")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Prefeitura do Rio", "Rio City Hall")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Lei de Incentivo à Cultura", "Cultural Incentive Law")}</Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Narrativa Migrante</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Caminhadas interculturais na Pequena África guiadas por migrantes de Angola, Venezuela e Tunísia ao lado de historiadores brasileiros. Curadoria e idealização pela Feltrip, patrocinado pela Prefeitura do Rio e EloGroup.",
                  "Intercultural walks through Pequena África led by migrants from Angola, Venezuela and Tunisia alongside Brazilian historians. Curated and conceived by Feltrip, sponsored by Rio City Hall and EloGroup."
                )}
              </p>
              <div className="pt-2 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                  {t("Cobertura na mídia", "Press coverage")}
                </p>
                <p className="text-sm text-foreground/70">PublishNews · TV Prefeito · Reino Literário</p>
              </div>
              <a
                href="https://www.google.com/search?q=narrativa+migrante+feltrip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors pt-1"
              >
                {t("Ver cobertura na mídia", "See press coverage")}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 2 — Justiça Global */}
            <div className="rounded-2xl border border-border/50 bg-background p-6 md:p-8 space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs font-medium">{t("Impacto Social", "Social Impact")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Direitos Humanos", "Human Rights")}</Badge>
                <Badge variant="outline" className="text-xs">ONG</Badge>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Justiça Global</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Programa de acolhimento intercultural para defensores de direitos humanos em situação de vulnerabilidade — incluindo pessoas em risco de vida por sua atuação como líderes comunitários. Hospitalidade, pertencimento e escuta como ferramentas de proteção.",
                  "Intercultural welcoming program for human rights defenders in vulnerable situations — including people at risk of life due to their work as community leaders. Hospitality, belonging and listening as protection tools."
                )}
              </p>
              <div className="pt-2 border-t border-border/40">
                <div className="flex items-start gap-3 pt-4">
                  <Quote className="h-5 w-5 text-primary/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/80 italic leading-relaxed">
                      {t(
                        "Fizemos uma parceria para aulas de português para defensores de direitos humanos e foi de muita importância para a passagem de uma pessoa ameaçada de morte por sua atuação como líder comunitário em seu país de origem. Fernanda e a equipe sempre muito solicita e a disposição para construir um ambiente de respeito e colaboração. Certeza que seguiremos nos encontrando.",
                        "We partnered for Portuguese classes for human rights defenders and it was very important for the passage of a person threatened with death due to their role as a community leader in their country of origin. Fernanda and the team were always very helpful and willing to build an environment of respect and collaboration. We're sure we'll keep meeting."
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                      — Antonio Neto, Justiça Global
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — O QUE OFERECEMOS */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            {t("O que oferecemos", "What we offer")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card A */}
            <div className="rounded-2xl border border-border/50 bg-background p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                {t("Projetos Culturais e Editais", "Cultural Projects & Public Grants")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Curadoria, idealização e execução de experiências interculturais para ONGs, prefeituras e leis de incentivo cultural. Cada projeto nasce do território, das pessoas e da memória do lugar.",
                  "Curation, ideation and execution of intercultural experiences for NGOs, municipalities and cultural incentive laws. Each project is born from the territory, the people and the memory of the place."
                )}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">ONGs</Badge>
                <Badge variant="outline" className="text-xs">{t("Prefeituras", "Municipalities")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Lei de Incentivo", "Incentive Laws")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Editais Culturais", "Cultural Grants")}</Badge>
              </div>
            </div>

            {/* Card B */}
            <div className="rounded-2xl border border-border/50 bg-background p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                City Intelligence — Cult AI
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Seu estabelecimento já aparece na Cult AI. Saiba quem são as pessoas que chegam até você — perfil, mood, contexto cultural. Dados anônimos e éticos para entender seu cliente de verdade.",
                  "Your establishment already appears on Cult AI. Know who the people reaching you are — profile, mood, cultural context. Anonymous and ethical data to truly understand your customer."
                )}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">{t("Restaurantes", "Restaurants")}</Badge>
                <Badge variant="outline" className="text-xs">Hostels</Badge>
                <Badge variant="outline" className="text-xs">{t("Bares Culturais", "Cultural Bars")}</Badge>
                <Badge variant="outline" className="text-xs">{t("Espaços Criativos", "Creative Spaces")}</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMO TRABALHAMOS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            {t("Como trabalhamos", "How we work")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIAL HIGHLIGHT */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Quote className="h-10 w-10 text-primary/30 mx-auto" />
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
              {t(
                "Fizemos uma parceria para aulas de português para defensores de direitos humanos e foi de muita importância para a passagem de uma pessoa ameaçada de morte por sua atuação como líder comunitário em seu país de origem. Fernanda e a equipe sempre muito solicita e a disposição para construir um ambiente de respeito e colaboração. Certeza que seguiremos nos encontrando.",
                "We partnered for Portuguese classes for human rights defenders and it was very important for the passage of a person threatened with death due to their role as a community leader in their country of origin. Fernanda and the team were always very helpful and willing to build an environment of respect and collaboration. We're sure we'll keep meeting."
              )}
            </blockquote>
            <p className="text-muted-foreground font-medium">
              — Antonio Neto, Justiça Global
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("Tem um projeto em mente?", "Have a project in mind?")}
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              {t(
                "Seja um edital cultural, uma parceria com ONG ou entender os dados da Cult AI — a conversa começa aqui.",
                "Whether it's a cultural grant, an NGO partnership or understanding Cult AI data — the conversation starts here."
              )}
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-energy-foreground gap-2 mt-2">
                {t("Falar com a Fernanda", "Talk to Fernanda")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ParaEmpresa;
