import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t(
              "Pronto para pertencer à sua nova cidade?",
              "Ready to belong to your new city?"
            )}
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            {t(
              "Comece com 2 recomendações gratuitas ou agende uma demo para sua empresa.",
              "Start with 2 free recommendations or book a demo for your company."
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="https://cult.feltrip.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-energy-foreground gap-2 w-full sm:w-auto"
              >
                {t("Descubra lugares perfeitos para você", "Discover perfect places for you")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 w-full sm:w-auto font-semibold"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              {t("Agendar demo", "Book demo")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
