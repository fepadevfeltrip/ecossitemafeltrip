import { useLanguage } from "@/hooks/useLanguage";
import { MainLayout } from "@/components/layout/MainLayout";
import { NewPricingPlans } from "@/components/NewPricingPlans";

const ParaVoce = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("Para você", "For you")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t(
                "Integração cultural na prática para quem está chegando no Brasil ou se mudando entre cidades.",
                "Cultural integration in practice for those arriving in Brazil or moving between cities."
              )}
            </p>
            <p className="text-lg text-foreground font-medium">
              {t(
                "Seja estrangeiro, imigrante ou brasileiro em mobilidade — a Feltrip te ajuda a se sentir em casa.",
                "Whether foreigner, immigrant, or Brazilian in mobility — Feltrip helps you feel at home."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24" id="planos">
        <div className="container px-4">
          <NewPricingPlans />
        </div>
      </section>
    </MainLayout>
  );
};

export default ParaVoce;
