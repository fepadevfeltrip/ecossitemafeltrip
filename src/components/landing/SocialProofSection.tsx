import { useLanguage } from "@/hooks/useLanguage";
import { Quote } from "lucide-react";

export const SocialProofSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t(
        "A Feltrip me ajudou a entender o Rio em semanas, não meses. Do trabalho ao lazer, tudo ficou mais fácil.",
        "Feltrip helped me understand Rio in weeks, not months. From work to leisure, everything became easier."
      ),
      author: "Betty T.",
      context: t("da Eritreia, morando no Rio", "from Eritrea, living in Rio"),
    },
    {
      quote: t(
        "Fizemos uma parceria para aulas de português para defensores de direitos humanos e foi de muita importância para a passagem de uma pessoa ameaçada de morte por sua atuação como líder comunitário em seu país de origem. Fernanda e a equipe sempre muito solicita e a disposição para construir um ambiente de respeito e colaboração.",
        "We partnered for Portuguese classes for human rights defenders and it was very important for the passage of a person threatened with death due to their role as a community leader in their country of origin. Fernanda and the team were always very helpful and willing to build an environment of respect and collaboration."
      ),
      author: "Antonio Neto",
      context: t("Justiça Global", "Justiça Global"),
    },
    {
      quote: "Enjoyed a wonderful Carioca Tour learning about Black history in Brazil. Very informative and gives a new perspective to the city. Highly recommend.",
      author: "Diane K.",
      context: t("dos EUA, visitando o Rio", "from USA, visiting Rio"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("Quem já encontrou seu lugar", "Who already found their place")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-muted/30 border border-border/50 space-y-4"
            >
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="text-foreground italic text-sm leading-relaxed">
                "{item.quote}"
              </blockquote>
              <div>
                <cite className="text-foreground text-sm font-semibold block not-italic">
                  {item.author}
                </cite>
                <span className="text-muted-foreground text-xs">{item.context}</span>
              </div>
            </div>
          ))}
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
    </section>
  );
};
