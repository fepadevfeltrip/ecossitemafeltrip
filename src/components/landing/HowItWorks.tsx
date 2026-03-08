import { useLanguage } from "@/hooks/useLanguage";
import { Map, MessageCircle, Users, BarChart3 } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const forPeople = [
    { icon: Map, text: t("Mapa pessoal da cidade", "Personal city map") },
    { icon: MessageCircle, text: t("Chat 24h com Cult AI", "24h chat with Cult AI") },
    { icon: Users, text: t("Rede de apoio verificada", "Verified support network") },
  ];

  const forCompanies = [
    { icon: Users, text: t("Onboarding cultural", "Cultural onboarding") },
    { icon: MessageCircle, text: t("Suporte aos times", "Team support") },
    { icon: BarChart3, text: t("Métricas de adaptação", "Adaptation metrics") },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("Como funciona", "How it works")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Tecnologia + expertise local para acelerar sua adaptação.",
              "Technology + local expertise to accelerate your adaptation."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Para Pessoas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
              {t("Para pessoas", "For individuals")}
            </h3>
            {forPeople.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Para Empresas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
              {t("Para empresas", "For companies")}
            </h3>
            {forCompanies.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
