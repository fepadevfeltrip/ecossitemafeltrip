import { Check, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import curadoriaImage from "@/assets/curadoria-executiva-bg.jpg";

const plans = [
  {
    name: "Integração Intercultural",
    subtitle: "Crie a comunidade intercultural da sua empresa",
    price: "US$ 150",
    priceDetail: "até 80 pessoas",
    highlighted: false,
  },
  {
    name: "Raiz no Território",
    subtitle: "Tudo do plano anterior +",
    price: "US$ 49",
    priceDetail: "por pessoa",
    additionalPrices: ["US$ 79/mês – 2 pessoas", "US$ 129,90/mês – até 4 pessoas"],
    highlighted: false,
  },
  {
    name: "Cuidado Integral",
    subtitle: "Tudo dos planos anteriores +",
    price: "US$ 59",
    priceDetail: "por pessoa",
    additionalPrices: ["US$ 99/mês – 2 pessoas", "US$ 179/mês – até 4 pessoas"],
    highlighted: true,
  },
  {
    name: "Espaço Integrado",
    subtitle: "Premium • Tudo dos planos anteriores +",
    price: "US$ 139",
    priceDetail: "por pessoa",
    additionalPrices: ["US$ 249/mês – 2 pessoas", "US$ 890/mês – até 4 pessoas"],
    highlighted: false,
  },
];

const features = [
  {
    name: "Mapa coletivo com rotas e dicas de segurança",
    plans: [true, true, true, true],
  },
  {
    name: "Criação de eventos na comunidade",
    plans: [true, true, true, true],
  },
  {
    name: "IA Boba Cult - tutora de cultura e hyperlocalidade",
    plans: [true, true, true, true],
  },
  {
    name: "Criação de subgrupos",
    plans: [true, true, true, true],
  },
  {
    name: "Guia cultural básico das cidades",
    plans: [true, true, true, true],
  },
  {
    name: "Acesso total ao app Feltrip",
    plans: [false, true, true, true],
  },
  {
    name: "IA Feltrip - 1h30 prática de idioma contextual",
    plans: [false, true, true, true],
  },
  {
    name: "IA de bem-estar relacional com práticas de presença",
    plans: [false, true, true, true],
  },
  {
    name: "Diário-Mapa de Viagem para anotações e documentos",
    plans: [false, true, true, true],
  },
  {
    name: "Mapa de Segurança com alerta para RH",
    plans: [false, true, true, true],
  },
  {
    name: "Curadoria de prestadores de serviços locais (RJ/SP)",
    plans: [false, true, true, true],
  },
  {
    name: "Painel do RH completo - prevenção de risco psicossocial",
    plans: [false, false, true, true],
  },
  {
    name: "Métricas do Mapa de Presença Relacional (espaço de trabalho)",
    plans: [false, false, true, true],
  },
  {
    name: "Métrica e alerta de segurança",
    plans: [false, false, true, true],
  },
  {
    name: "Tutoria de Cultura - 2h caminhadas com arte educador",
    plans: [false, false, false, true],
  },
  {
    name: "Roteiro personalizado (museus, feiras, cultura local)",
    plans: [false, false, false, true],
  },
  {
    name: "Convide até 3 acompanhantes nas experiências",
    plans: [false, false, false, true],
  },
];

export const PricingTable = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          🌍 Planos de Onboarding Relacional Feltrip
        </h2>
        <p className="text-xl text-muted-foreground">
          Culture transitions made human.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Para quem é: Pessoas chegando em um novo país, famílias em transição, 
          recém-contratados estrangeiros ou nacionais de outras cidades do Brasil.
        </p>
      </div>

      {/* Comparative Table */}
      <div className="overflow-x-auto">
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
                <h3 className="font-bold text-sm md:text-base text-foreground leading-tight">
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
      <section className="relative mt-16 -mx-4 md:-mx-8 overflow-hidden rounded-xl">
        {/* Image on Top */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img 
            src={curadoriaImage} 
            alt="Escadaria com boas-vindas em múltiplos idiomas" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          
          {/* Floating badge on image */}
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-full shadow-lg">
              <Sparkles className="h-4 w-4 text-primary" />
              Experiência Exclusiva
            </span>
          </div>
        </div>

        {/* Content Below - Centered */}
        <div className="bg-card px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <header className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight">
                Curadoria{" "}
                <span className="font-semibold">Executiva</span>{" "}
                <span className="text-primary font-light italic">Personalizada</span>
              </h3>
            </header>
            
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                Desenhamos experiências sob medida para colaboradores individuais ou grupos, 
                a partir de um diagnóstico relacional baseado no{" "}
                <span className="text-foreground font-medium">Mapa da Presença Relacional (MRP™)</span>.
              </p>
              
              <p>
                A curadoria integra dinâmicas de onboarding e integração de equipes, caminhadas guiadas 
                no território e o apoio de uma rede selecionada de parceiros — incluindo especialistas 
                em saúde mental, educação e cultura.
              </p>
              
              <p>
                Cada roteiro é construído de forma única, alinhando{" "}
                <span className="text-primary font-medium">cuidado humano</span>, 
                contexto organizacional e presença no território.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              *Disponível em São Paulo e Rio de Janeiro
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <div className="text-center sm:text-left">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Investimento</span>
                <div className="text-2xl font-semibold text-foreground">Sob consulta</div>
              </div>
              
              <Button 
                size="lg"
                onClick={() => window.open("mailto:info@feltrip.com?subject=Curadoria Executiva Personalizada", "_blank")}
              >
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
