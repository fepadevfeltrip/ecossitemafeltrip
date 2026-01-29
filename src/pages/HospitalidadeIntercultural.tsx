import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Check, Hotel, Calendar, Users, Star } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const HospitalidadeIntercultural = () => {
  const { t } = useLanguage();

  const applications = [
    {
      icon: Hotel,
      title: t("Hotéis e Hospedagens", "Hotels and Accommodations"),
      description: t(
        "Treinamento de equipes para receber hóspedes internacionais com excelência cultural.",
        "Staff training to welcome international guests with cultural excellence."
      ),
    },
    {
      icon: Calendar,
      title: t("Eventos Internacionais", "International Events"),
      description: t(
        "Agentes de acolhimento cultural personalizados para conferências, feiras e eventos.",
        "Personalized cultural welcome agents for conferences, fairs, and events."
      ),
    },
    {
      icon: Users,
      title: t("Empresas e Coworkings", "Companies and Coworkings"),
      description: t(
        "Ambientes de trabalho preparados para receber profissionais de qualquer cultura.",
        "Work environments prepared to receive professionals from any culture."
      ),
    },
    {
      icon: Star,
      title: t("Experiências Turísticas", "Tourist Experiences"),
      description: t(
        "Roteiros e experiências que vão além do turismo tradicional.",
        "Itineraries and experiences that go beyond traditional tourism."
      ),
    },
  ];

  const benefits = [
    t("Melhor experiência para visitantes internacionais", "Better experience for international visitors"),
    t("Equipes preparadas para diversidade cultural", "Teams prepared for cultural diversity"),
    t("Diferenciação competitiva no mercado", "Competitive market differentiation"),
    t("Redução de mal-entendidos culturais", "Reduced cultural misunderstandings"),
    t("Maior satisfação e fidelização de clientes", "Higher customer satisfaction and loyalty"),
    t("Reputação de excelência intercultural", "Reputation for intercultural excellence"),
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Hospitalidade Intercultural", "Intercultural Hospitality")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t(
                "Transforme a experiência de visitantes e colaboradores internacionais.",
                "Transform the experience of international visitors and employees."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Hospitalidade que vai além da cortesia — é conexão cultural real.",
                "Hospitality that goes beyond courtesy — it's real cultural connection."
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
              {t("O que é Hospitalidade Intercultural?", "What is Intercultural Hospitality?")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Hospitalidade Intercultural é a capacidade de acolher, receber e servir pessoas de diferentes culturas de forma autêntica e respeitosa, criando experiências memoráveis que vão além do básico.",
                "Intercultural Hospitality is the ability to welcome, receive, and serve people from different cultures authentically and respectfully, creating memorable experiences that go beyond the basics."
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Na Feltrip, desenvolvemos soluções para empresas, eventos e espaços que querem oferecer hospitalidade de excelência para públicos internacionais.",
                "At Feltrip, we develop solutions for companies, events, and spaces that want to offer excellent hospitality to international audiences."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Onde aplicar Hospitalidade Intercultural", "Where to apply Intercultural Hospitality")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/50 bg-background space-y-4"
                >
                  <div className="p-3 rounded-xl bg-secondary/20 w-fit">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("Benefícios da Hospitalidade Intercultural", "Benefits of Intercultural Hospitality")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
              >
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t(
              "Quer oferecer hospitalidade intercultural?",
              "Want to offer intercultural hospitality?"
            )}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Descubra como a Feltrip pode transformar a experiência dos seus visitantes internacionais.",
              "Discover how Feltrip can transform the experience of your international visitors."
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
            <Link to="/integracao-intercultural">
              <Button variant="outline" size="sm">{t("Integração Intercultural", "Intercultural Integration")}</Button>
            </Link>
            <Link to="/ecossistema-relacional">
              <Button variant="outline" size="sm">{t("Ecossistema Relacional", "Relational Ecosystem")}</Button>
            </Link>
            <Link to="/para-empresa">
              <Button variant="outline" size="sm">{t("Para Empresas", "For Companies")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO */}
      <div className="sr-only">
        <p>
          Hospitalidade intercultural, intercultural hospitality, acolhimento cultural,
          turismo intercultural, eventos internacionais, hotelaria intercultural,
          treinamento hospitalidade, diversidade cultural turismo, experiência visitante internacional.
        </p>
      </div>
    </MainLayout>
  );
};

export default HospitalidadeIntercultural;
