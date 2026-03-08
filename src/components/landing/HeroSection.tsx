import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamHands from "@/assets/team-hands.jpg";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={teamHands}
          alt={t(
            "Pessoas diversas se integrando culturalmente no Brasil",
            "Diverse people culturally integrating in Brazil"
          )}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="relative container px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {t(
              "São Paulo · Rio de Janeiro · Florianópolis",
              "São Paulo · Rio de Janeiro · Florianópolis"
            )}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t("Pertença à sua nova cidade", "Belong to your new city")}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
            {t(
              "Do estranhamento ao pertencimento: transforme uma nova cidade em seu lar.",
              "From unfamiliarity to belonging: turn a new city into your home."
            )}
          </p>

          {/* Metrics bar */}
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">1.247+ {t("mapas criados", "maps created")}</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="font-semibold text-foreground">87% {t("retenção", "retention")}</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="font-semibold text-foreground">3 {t("cidades", "cities")}</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link to="/para-voce">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-energy-foreground shadow-lg gap-2 w-full sm:w-auto"
              >
                {t("Descubra sua cidade", "Discover your city")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/para-empresa">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary w-full sm:w-auto"
              >
                {t("Para empresas", "For companies")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
