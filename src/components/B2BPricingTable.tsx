import { Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

const getPlans = (t: (pt: string, en: string) => string) => [
  {
    name: t("Integração Intercultural", "Intercultural Integration"),
    subtitle: t("Crie a comunidade intercultural da sua empresa", "Create your company's intercultural community"),
  },
  {
    name: t("Raiz no Território", "Roots in the Territory"),
    subtitle: t("Tudo do plano anterior +", "Everything from previous plan +"),
    highlighted: true,
  },
  {
    name: t("Espaço Integrado Premium", "Premium Integrated Space"),
    subtitle: t("Tudo dos planos anteriores +", "Everything from previous plans +"),
  },
];

const getFeatures = (t: (pt: string, en: string) => string) => [
  { name: t("Mapa coletivo com rotas e dicas de segurança", "Collective map with routes and safety tips"), plans: [true, true, true] },
  { name: t("Criação de eventos na comunidade", "Community event creation"), plans: [true, true, true] },
  { name: t("Guia cultural básico das cidades", "Basic city cultural guide"), plans: [true, true, true] },
  { name: t("IA Cult - tutora de cultura e hyperlocalidade", "Cult AI - culture and hyperlocality tutor"), plans: [true, true, true] },
  { name: t("Criação de subgrupos", "Subgroup creation"), plans: [true, true, true] },
  { name: t("Acesso total ao app Feltrip", "Full access to Feltrip app"), plans: [true, true, true] },
  { name: t("IA Feltrip - 1h30 prática de idioma semanal inclusa", "Feltrip AI - 1h30 weekly language practice included"), plans: [false, true, true] },
  { name: t("IA de bem-estar relacional com práticas de presença", "Relational wellness AI with presence practices"), plans: [false, true, true] },
  { name: t("Diário-Mapa de Viagem para anotações e documentos", "Travel Diary-Map for notes and documents"), plans: [false, true, true] },
  { name: t("Mapa de Segurança com alerta para RH", "Safety Map with HR alerts"), plans: [false, true, true] },
  { name: t("Curadoria de prestadores de serviços de relocação", "Relocation service provider curation"), plans: [false, true, true] },
  { name: t("Painel do RH completo - prevenção de risco psicossocial", "Complete HR dashboard - psychosocial risk prevention"), plans: [false, false, true] },
  { name: t("Métricas do Mapa de Presença Relacional (espaço de trabalho)", "Relational Presence Map metrics (workspace)"), plans: [false, false, true] },
  { name: t("Métrica e alerta de segurança", "Safety metrics and alerts"), plans: [false, false, true] },
  { name: t("Tutoria de Cultura - 2h caminhadas com arte educador", "Culture Tutoring - 2h walks with art educator"), plans: [false, false, true] },
  { name: t("Roteiro personalizado (museus, feiras, cultura local)", "Personalized itinerary (museums, fairs, local culture)"), plans: [false, false, true] },
  { name: t("Convide até 3 acompanhantes nas experiências", "Invite up to 3 guests to experiences"), plans: [false, false, true] },
];

export const B2BPricingTable = () => {
  const { t } = useLanguage();
  const plans = getPlans(t);
  const features = getFeatures(t);

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          🏢 {t("Planos Corporativos Feltrip", "Feltrip Corporate Plans")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("Soluções sob medida para sua empresa ou evento.", "Tailored solutions for your company or event.")}
        </p>
        <p className="text-sm text-primary font-bold max-w-2xl mx-auto">
          {t(
            "Descontos progressivos para grupos de 10+ colaboradores. Solicite um orçamento.",
            "Progressive discounts for groups of 10+ employees. Request a quote."
          )}
        </p>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden space-y-4">
        {plans.map((plan, planIndex) => (
          <Card
            key={planIndex}
            className={`p-4 ${plan.highlighted ? "bg-primary/10 border-primary/30 ring-2 ring-primary/20" : "bg-card"}`}
          >
            <div className="text-center mb-4 pb-4 border-b border-border">
              <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
            </div>
            <div className="space-y-2 mb-4">
              {features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`flex items-start gap-3 py-1.5 ${featureIndex !== features.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  {feature.plans[planIndex] ? (
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <span className="h-4 w-4 flex items-center justify-center text-muted-foreground/30 shrink-0">—</span>
                  )}
                  <span className={`text-xs ${feature.plans[planIndex] ? "text-foreground" : "text-muted-foreground/50"}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-energy hover:bg-energy/90 gap-2">
                {t("Solicitar orçamento", "Request a quote")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </Card>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="p-4" />
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-4 text-center ${plan.highlighted ? "bg-primary/10 border-primary/30 ring-2 ring-primary/20" : "bg-card"}`}
              >
                <h3 className="font-bold text-base text-foreground leading-tight">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
                <div className="mt-3">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-energy hover:bg-energy/90 text-xs px-3 py-1.5 h-auto gap-1">
                      {t("Solicitar orçamento", "Request a quote")}
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-2 ${index % 2 === 0 ? "bg-muted/30" : "bg-background"} ${index !== features.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-3 flex items-center">
                  <span className="text-sm text-foreground">{feature.name}</span>
                </div>
                {feature.plans.map((included, planIndex) => (
                  <div
                    key={planIndex}
                    className={`p-3 flex items-center justify-center ${plans[planIndex].highlighted ? "bg-primary/5" : ""}`}
                  >
                    {included ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <span className="h-5 w-5 flex items-center justify-center text-muted-foreground/30">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-energy hover:bg-energy/90 text-lg px-8 py-6 gap-2">
            {t("Solicitar orçamento", "Request a quote")}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  );
};
