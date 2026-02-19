import { Sparkles, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { CommunityBanner } from "@/components/CommunityBanner";

const CULT_LINK = "https://cult.feltrip.com";

export const NewPricingPlans = () => {
  const { t } = useLanguage();


  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          🌍 {t("Escolha sua forma de habitar a cidade", "Choose your way to inhabit the city")}
        </h2>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="p-6 flex flex-col justify-between space-y-6 bg-primary/10 border-primary/30 ring-2 ring-primary/20">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-energy/10 text-energy text-xs font-semibold rounded-full">
              <Sparkles className="h-3 w-3" />
              {t("Destaque", "Featured")}
            </span>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {t("Cartógrafo", "Cartographer")}
                <span className="text-primary font-medium ml-2 text-base">(Cult AI)</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1 italic">
                "{t(
                  "A inteligência que traduz sua vibe em destino. Sua cartografia pessoal e editável.",
                  "The intelligence that translates your vibe into a destination. Your personal and editable cartography."
                )}"
              </p>
            </div>

            <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 italic">
              {t(
                "Gratuito até 20/02. O valor oficial para novos membros será revelado em breve.",
                "Free until 02/20. The official price for new members will be revealed soon."
              )}
            </p>
          </div>

          <Button
            onClick={() => window.open(CULT_LINK, "_blank", "noopener,noreferrer")}
            className="w-full gap-2 bg-energy hover:bg-energy/90 text-white"
          >
            {t("Gerar meu Mapa Agora", "Generate my Map Now")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Card>
      </div>

      <CommunityBanner />
    </div>
  );
};
