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
      <section className="relative mt-16 -mx-4 md:-mx-8">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img 
              src={curadoriaImage} 
              alt="Escadaria com boas-vindas em múltiplos idiomas" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/60 to-transparent" />
            
            {/* Floating badge on image */}
            <div className="absolute bottom-8 left-8 lg:bottom-auto lg:top-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-medium rounded-full shadow-lg">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Experiência Exclusiva
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-xl space-y-8">
              <header className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight">
                  Curadoria<br />
                  <span className="font-semibold">Executiva</span><br />
                  <span className="text-amber-400 font-light italic">Personalizada</span>
                </h3>
              </header>
              
              <div className="space-y-5 text-slate-300 text-base leading-relaxed">
                <p>
                  Desenhamos experiências sob medida para colaboradores individuais ou grupos, 
                  a partir de um diagnóstico relacional baseado no{" "}
                  <span className="text-white font-medium">Mapa da Presença Relacional (MRP™)</span>.
                </p>
                
                <p>
                  A curadoria integra dinâmicas de onboarding e integração de equipes, caminhadas guiadas 
                  no território e o apoio de uma rede selecionada de parceiros — incluindo especialistas 
                  em saúde mental, educação e cultura.
                </p>
                
                <p>
                  Cada roteiro é construído de forma única, alinhando{" "}
                  <span className="text-amber-400 font-medium">cuidado humano</span>, 
                  contexto organizacional e presença no território.
                </p>
              </div>
              
              <p className="text-sm text-slate-400 italic">
                *Disponível em São Paulo e Rio de Janeiro
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <div>
                  <span className="text-sm text-slate-400 uppercase tracking-wider">Investimento</span>
                  <div className="text-2xl font-semibold text-white">Sob consulta</div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium px-8"
                  onClick={() => window.open("mailto:info@feltrip.com?subject=Curadoria Executiva Personalizada", "_blank")}
                >
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus for Companies */}
      <Card className="p-6 border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🟪</span>
            <h3 className="text-xl font-bold text-foreground">Bônus para Empresas</h3>
          </div>
          <p className="text-lg font-semibold text-foreground">Cultura que continua circulando</p>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>A empresa pode inserir ex-expatriados na comunidade Feltrip gratuitamente</li>
            <li>Guia cultural das cidades incluído sem custos adicionais</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
