import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/DMjDbxdjmJYKInnqsJcyJf";

export const CommunityBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center space-y-3 py-8 px-4">
      <div className="flex items-center justify-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        <h3 className="text-lg md:text-xl font-semibold text-foreground">
          {t(
            "Entre na nossa comunidade internacional no WhatsApp",
            "Join our international community on WhatsApp"
          )}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm max-w-lg mx-auto">
        {t(
          "Pessoas do mundo todo compartilhando dicas, eventos e experiências culturais.",
          "People from all over the world sharing tips, events and cultural experiences."
        )}
      </p>
      <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="gap-2 mt-2 border-primary/30 hover:border-primary hover:bg-primary/5">
          <Users className="h-4 w-4" />
          {t("Entrar na Comunidade", "Join the Community")}
        </Button>
      </a>
      <p className="text-xs text-muted-foreground/60 mt-2">
        *{t("Maior foco no Rio de Janeiro", "Main focus on Rio de Janeiro")}
      </p>
    </div>
  );
};
