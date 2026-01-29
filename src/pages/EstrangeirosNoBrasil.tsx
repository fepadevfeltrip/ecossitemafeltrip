import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Home, Briefcase, Heart, Users } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const EstrangeirosNoBrasil = () => {
  const { t } = useLanguage();

  const challenges = [
    t("Barreira do idioma e comunicação", "Language and communication barrier"),
    t("Burocracia e documentação", "Bureaucracy and documentation"),
    t("Diferenças culturais no trabalho", "Cultural differences at work"),
    t("Solidão e isolamento social", "Loneliness and social isolation"),
    t("Encontrar moradia adequada", "Finding suitable housing"),
    t("Adaptar-se ao 'jeitinho brasileiro'", "Adapting to the 'Brazilian way'"),
  ];

  const solutions = [
    {
      icon: Home,
      title: t("Adaptação à Vida no Brasil", "Adapting to Life in Brazil"),
      description: t(
        "Suporte completo para entender e navegar a cultura brasileira, desde hábitos cotidianos até nuances de comunicação.",
        "Complete support to understand and navigate Brazilian culture, from everyday habits to communication nuances."
      ),
    },
    {
      icon: Briefcase,
      title: t("Integração no Trabalho", "Work Integration"),
      description: t(
        "Orientação sobre cultura corporativa brasileira, estilos de comunicação profissional e dinâmicas de equipe.",
        "Guidance on Brazilian corporate culture, professional communication styles, and team dynamics."
      ),
    },
    {
      icon: Heart,
      title: t("Bem-estar e Saúde Mental", "Well-being and Mental Health"),
      description: t(
        "Suporte para lidar com o choque cultural, saudade e os desafios emocionais da expatriação.",
        "Support to deal with culture shock, homesickness, and the emotional challenges of expatriation."
      ),
    },
    {
      icon: Users,
      title: t("Comunidade e Conexões", "Community and Connections"),
      description: t(
        "Acesso a comunidade de expatriados e eventos para criar conexões significativas no Brasil.",
        "Access to expat community and events to create meaningful connections in Brazil."
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
              {t("Estrangeiros no Brasil", "Foreigners in Brazil")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Suporte completo para expatriados, nômades digitais e profissionais internacionais vivendo no Brasil.",
                "Complete support for expatriates, digital nomads, and international professionals living in Brazil."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Ajudamos estrangeiros a se adaptarem ao Brasil para permanecer, trabalhar e viver com segurança.",
                "We help foreigners adapt to Brazil to stay, work, and live safely."
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
              {t("Viver no Brasil como Estrangeiro", "Living in Brazil as a Foreigner")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "O Brasil é um país acolhedor e vibrante, mas a adaptação cultural pode ser desafiadora. Desde o ritmo de vida diferente até as nuances do 'jeitinho brasileiro', estrangeiros frequentemente enfrentam uma curva de aprendizado significativa.",
                "Brazil is a welcoming and vibrant country, but cultural adaptation can be challenging. From the different pace of life to the nuances of the 'Brazilian way', foreigners often face a significant learning curve."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "A Feltrip nasceu exatamente para facilitar essa jornada, oferecendo suporte prático, tecnologia e uma rede de apoio para que estrangeiros possam se sentir verdadeiramente em casa no Brasil.",
                "Feltrip was born exactly to facilitate this journey, offering practical support, technology, and a support network so that foreigners can truly feel at home in Brazil."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Desafios comuns de estrangeiros no Brasil", "Common challenges for foreigners in Brazil")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-accent/30"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-foreground">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Como a Feltrip ajuda estrangeiros no Brasil", "How Feltrip helps foreigners in Brazil")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-card space-y-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
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
              "Você é estrangeiro no Brasil?",
              "Are you a foreigner in Brazil?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Conheça nossos planos e comece sua jornada de integração cultural hoje.",
              "Check out our plans and start your cultural integration journey today."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/para-voce">
              <Button size="lg" className="bg-energy hover:bg-energy/90 gap-2">
                {t("Ver planos individuais", "See individual plans")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                {t("Falar com especialista", "Talk to a specialist")}
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
            <Link to="/imigrantes-no-brasil">
              <Button variant="outline" size="sm">{t("Imigrantes no Brasil", "Immigrants in Brazil")}</Button>
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
          Estrangeiros no Brasil, foreigners in Brazil, expatriados Brasil, expats Brazil,
          viver no Brasil, working in Brazil, adaptação Brasil, cultura brasileira para estrangeiros,
          nômades digitais Brasil, profissionais internacionais Brasil, expatriate support Brazil.
        </p>
      </div>
    </MainLayout>
  );
};

export default EstrangeirosNoBrasil;
