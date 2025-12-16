import { Check, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import curadoriaImage from "@/assets/curadoria-executiva-bg.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const getPlans = (t: (pt: string, en: string) => string) => [
  {
    name: t("Integração Intercultural", "Intercultural Integration"),
    subtitle: t("Crie a comunidade intercultural da sua empresa", "Create your company's intercultural community"),
    price: "US$ 150",
    priceDetail: t("até 80 pessoas", "up to 80 people"),
    highlighted: false,
  },
  {
    name: t("Raiz no Território", "Roots in the Territory"),
    subtitle: t("Tudo do plano anterior +", "Everything from previous plan +"),
    price: "US$ 49",
    priceDetail: t("por usuário", "per user"),
    additionalPrices: [
      t("US$ 79/mês – 2 pessoas", "US$ 79/mo – 2 people"),
      t("US$ 129,90/mês – até 4 pessoas", "US$ 129.90/mo – up to 4 people"),
    ],
    highlighted: false,
  },
  {
    name: t("Cuidado Integral", "Comprehensive Care"),
    subtitle: t("Tudo dos planos anteriores +", "Everything from previous plans +"),
    price: "US$ 59",
    priceDetail: t("por usuário", "per user"),
    additionalPrices: [
      t("US$ 99/mês – 2 pessoas", "US$ 99/mo – 2 people"),
      t("US$ 179/mês – até 4 pessoas", "US$ 179/mo – up to 4 people"),
    ],
    highlighted: true,
  },
  {
    name: t("Espaço Integrado", "Integrated Space"),
    subtitle: t("Premium • Tudo dos planos anteriores +", "Premium • Everything from previous plans +"),
    price: "US$ 139",
    priceDetail: t("por usuário", "per user"),
    additionalPrices: [
      t("US$ 249/mês – 2 pessoas", "US$ 249/mo – 2 people"),
      t("US$ 890/mês – até 4 pessoas", "US$ 890/mo – up to 4 people"),
    ],
    highlighted: false,
  },
];

const getFeatures = (t: (pt: string, en: string) => string) => [
  {
    name: t("Mapa coletivo com rotas e dicas de segurança", "Collective map with routes and safety tips"),
    plans: [true, true, true, true],
  },
  {
    name: t("Criação de eventos na comunidade", "Community event creation"),
    plans: [true, true, true, true],
  },
  {
    name: t("IA Boba Cult - tutora de cultura e hyperlocalidade", "Boba Cult AI - culture and hyperlocality tutor"),
    plans: [true, true, true, true],
  },
  {
    name: t("Criação de subgrupos", "Subgroup creation"),
    plans: [true, true, true, true],
  },
  {
    name: t("Guia cultural básico das cidades", "Basic city cultural guide"),
    plans: [true, true, true, true],
  },
  {
    name: t("Acesso total ao app Feltrip", "Full access to Feltrip app"),
    plans: [false, true, true, true],
  },
  {
    name: t("IA Feltrip - 1h30 prática de idioma contextual", "Feltrip AI - 1h30 contextual language practice"),
    plans: [false, true, true, true],
  },
  {
    name: t("IA de bem-estar relacional com práticas de presença", "Relational wellness AI with presence practices"),
    plans: [false, true, true, true],
  },
  {
    name: t("Diário-Mapa de Viagem para anotações e documentos", "Travel Diary-Map for notes and documents"),
    plans: [false, true, true, true],
  },
  {
    name: t("Mapa de Segurança com alerta para RH", "Safety Map with HR alerts"),
    plans: [false, true, true, true],
  },
  {
    name: t("Curadoria de prestadores de serviços locais (RJ/SP)", "Local service provider curation (RJ/SP)"),
    plans: [false, true, true, true],
  },
  {
    name: t("Painel do RH completo - prevenção de risco psicossocial", "Complete HR dashboard - psychosocial risk prevention"),
    plans: [false, false, true, true],
  },
  {
    name: t("Métricas do Mapa de Presença Relacional (espaço de trabalho)", "Relational Presence Map metrics (workspace)"),
    plans: [false, false, true, true],
  },
  {
    name: t("Métrica e alerta de segurança", "Safety metrics and alerts"),
    plans: [false, false, true, true],
  },
  {
    name: t("Tutoria de Cultura - 2h caminhadas com arte educador", "Culture Tutoring - 2h walks with art educator"),
    plans: [false, false, false, true],
  },
  {
    name: t("Roteiro personalizado (museus, feiras, cultura local)", "Personalized itinerary (museums, fairs, local culture)"),
    plans: [false, false, false, true],
  },
  {
    name: t("Convide até 3 acompanhantes nas experiências", "Invite up to 3 guests to experiences"),
    plans: [false, false, false, true],
  },
];

export const PricingTable = () => {
  const { t } = useLanguage();
  const plans = getPlans(t);
  const features = getFeatures(t);

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center space-y-3 md:space-y-4 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          🌍 {t("Planos de Onboarding Relacional Feltrip", "Feltrip Relational Onboarding Plans")}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Culture transitions made human.
        </p>
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
          {t(
            "Para quem é: Pessoas chegando em um novo país, famílias em transição, recém-contratados estrangeiros ou nacionais de outras cidades do Brasil.",
            "For whom: People arriving in a new country, families in transition, newly hired foreigners or nationals from other cities in Brazil."
          )}
        </p>
      </div>

      {/* Mobile: Stacked Cards */}
      <div className="block md:hidden space-y-4">
        {plans.map((plan, planIndex) => (
          <Card 
            key={planIndex}
            className={`p-4 ${
              plan.highlighted 
                ? 'bg-primary/10 border-primary/30 ring-2 ring-primary/20' 
                : 'bg-card'
            }`}
          >
            <div className="text-center mb-4 pb-4 border-b border-border">
              <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
              <div className="mt-3">
                <span className="text-2xl font-bold text-primary">{plan.price}</span>
                <span className="text-xs text-muted-foreground block">{plan.priceDetail}</span>
              </div>
              {plan.additionalPrices && (
                <div className="mt-2 space-y-0.5">
                  {plan.additionalPrices.map((price, i) => (
                    <p key={i} className="text-xs text-muted-foreground">{price}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2">
              {features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className={`flex items-center gap-3 py-1.5 ${
                    featureIndex !== features.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  {feature.plans[planIndex] ? (
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                  ) : (
                    <span className="h-4 w-4 flex items-center justify-center text-muted-foreground/30 shrink-0">—</span>
                  )}
                  <span className={`text-xs ${feature.plans[planIndex] ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Desktop: Comparative Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header with Plans */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            <div className="p-4"></div>
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-4 text-center ${
                  plan.highlighted 
                    ? 'bg-primary/10 border-primary/30 ring-2 ring-primary/20' 
                    : 'bg-card'
                }`}
              >
                <h3 className="font-bold text-base text-foreground leading-tight">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {plan.subtitle}
                </p>
                <div className="mt-3">
                  <span className="text-xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs text-muted-foreground block">{plan.priceDetail}</span>
                </div>
                {plan.additionalPrices && (
                  <div className="mt-2 space-y-0.5">
                    {plan.additionalPrices.map((price, i) => (
                      <p key={i} className="text-xs text-muted-foreground">{price}</p>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Features Rows */}
          <div className="border border-border rounded-lg overflow-hidden">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid grid-cols-5 gap-2 ${
                  index % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                } ${index !== features.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="p-3 flex items-center">
                  <span className="text-sm text-foreground">{feature.name}</span>
                </div>
                {feature.plans.map((included, planIndex) => (
                  <div 
                    key={planIndex} 
                    className={`p-3 flex items-center justify-center ${
                      plans[planIndex].highlighted ? 'bg-primary/5' : ''
                    }`}
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

      {/* Curadoria Executiva - Editorial Section */}
      <section className="relative mt-10 md:mt-16 -mx-2 md:-mx-8 overflow-hidden rounded-xl">
        {/* Image on Top */}
        <div className="relative h-[200px] md:h-[400px] overflow-hidden">
          <img 
            src={curadoriaImage} 
            alt={t("Escadaria com boas-vindas em múltiplos idiomas", "Staircase with welcome in multiple languages")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          
          {/* Floating badge on image */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs md:text-sm font-medium rounded-full shadow-lg">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              {t("Experiência Exclusiva", "Exclusive Experience")}
            </span>
          </div>
        </div>

        {/* Content Below - Centered */}
        <div className="bg-card px-4 py-8 md:px-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <header className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight">
                {t("Curadoria", "Executive")}{" "}
                <span className="font-semibold">{t("Executiva", "Curation")}</span>{" "}
                <span className="text-primary font-light italic">{t("Personalizada", "Personalized")}</span>
              </h3>
            </header>
            
            <div className="space-y-4 md:space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                {t(
                  "Desenhamos experiências sob medida para colaboradores individuais ou grupos, a partir de um diagnóstico relacional baseado no",
                  "We design tailored experiences for individual employees or groups, based on a relational diagnosis using the"
                )}{" "}
                <span className="text-foreground font-medium">{t("Mapa da Presença Relacional (MRP™)", "Relational Presence Map (MRP™)")}</span>.
              </p>
              
              <p>
                {t(
                  "A curadoria integra dinâmicas de onboarding e integração de equipes, caminhadas guiadas no território e o apoio de uma rede selecionada de parceiros — incluindo especialistas em saúde mental, educação e cultura.",
                  "The curation integrates onboarding dynamics and team integration, guided walks in the territory, and the support of a selected network of partners — including mental health, education, and culture specialists."
                )}
              </p>
              
              <p>
                {t(
                  "Cada roteiro é construído de forma única, alinhando",
                  "Each itinerary is uniquely built, aligning"
                )}{" "}
                <span className="text-primary font-medium">{t("cuidado humano", "human care")}</span>, 
                {t(
                  " contexto organizacional e presença no território.",
                  " organizational context and presence in the territory."
                )}
              </p>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground italic">
              {t("*Disponível em São Paulo e Rio de Janeiro", "*Available in São Paulo and Rio de Janeiro")}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 pt-4">
              <div className="text-center">
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{t("Investimento", "Investment")}</span>
                <div className="text-xl md:text-2xl font-semibold text-foreground">{t("Sob consulta", "Upon request")}</div>
              </div>
              
              <Button 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open("mailto:info@feltrip.com?subject=Curadoria Executiva Personalizada", "_blank")}
              >
                {t("Solicitar Proposta", "Request Proposal")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
