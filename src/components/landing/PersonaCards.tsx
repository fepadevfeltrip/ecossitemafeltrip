import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const PersonaCards = () => {
  const { t } = useLanguage();

  const personas = [
    {
      icon: MapPin,
      title: t("Brasileiros em transição", "Brazilians in transition"),
      question: t(
        "Mudou de cidade e quer criar raízes?",
        "Moved to a new city and want to settle in?"
      ),
      points: [
        t("Novo trabalho", "New job"),
        t("Novo ciclo", "New chapter"),
        t("Nova vida", "New life"),
      ],
      href: "https://cult.feltrip.com",
      external: true,
      cta: t("Começar agora", "Start now"),
    },
    {
      icon: Building2,
      title: t("Empresas brasileiras", "Brazilian companies"),
      question: t(
        "Times distribuídos pelo Brasil?",
        "Teams spread across Brazil?"
      ),
      points: [
        t("Onboarding cultural", "Cultural onboarding"),
        t("Integração de equipes", "Team integration"),
        t("Adaptação local", "Local adaptation"),
      ],
      href: "/para-empresa",
      cta: t("Agendar demo", "Book demo"),
    },
    {
      icon: Globe,
      title: t("Expatriados", "Expatriates"),
      question: "New to Brazil?",
      points: [
        "Cultural adaptation",
        "Local integration",
        "Expert support",
      ],
      href: "/para-voce",
      cta: t("Discover more", "Discover more"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("Para quem é a Feltrip?", "Who is Feltrip for?")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <Link
              key={index}
              to={persona.href}
              className="group p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <persona.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {persona.title}
              </h3>
              <p className="text-muted-foreground mb-4 font-medium">
                {persona.question}
              </p>
              <ul className="space-y-2 mb-6">
                {persona.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="text-primary font-medium text-sm group-hover:underline">
                {persona.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
