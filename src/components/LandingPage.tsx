import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Bot, MapPin, LayoutDashboard, Sparkles, Users, Building2, Heart, Globe } from "lucide-react";

// Images
import feltripLogo from "@/assets/feltrip-logo.png";
import teamHands from "@/assets/team-hands.jpg";
import bobaDeboas from "@/assets/boba-deboas.png";
import metricsAnalysis from "@/assets/metrics-analysis.jpg";
import caminhadaGrupo from "@/assets/caminhada-grupo.jpg";
import escadaAzul from "@/assets/escada-azul.jpg";

// Partner logos
import koinzCapitalLogo from "@/assets/koinz-capital-logo.png";
import coletivaDelasLogo from "@/assets/coletiva-delas-logo.png";
import justicaGlobalLogo from "@/assets/justica-global-logo.png";
import nomadWorldLogo from "@/assets/nomad-world-logo.png";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

export const LandingPage = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  const howItWorksSteps = [
    {
      number: "1",
      title: "Boba Cult AI",
      description: t(
        "Nossa IA tutora de cultura brasileira e hyperlocalidade interage com membros da equipe sobre hábitos cotidianos, nuances culturais, estilos de comunicação e dinâmicas relacionais — apoiando a adaptação cultural e o bem-estar relacional através de conversas e orientações.",
        "Our Brazilian culture and hyperlocal AI tutor interacts with team members around everyday habits, cultural nuances, communication styles, and relational dynamics — supporting cultural adaptation and relational well-being through conversation and guidance."
      ),
      image: bobaDeboas,
      imageAlt: "Boba Cult - IA tutora de cultura brasileira",
    },
    {
      number: "2",
      title: t("Experiências Guiadas", "Guided Experiences"),
      description: t(
        "Caminhadas culturais curadas, visitas a museus, roteiros personalizados e experiências em grupo projetadas para conectar colaboradores ao território, comunidades locais e referências culturais compartilhadas.",
        "Curated cultural walks, museum visits, personalized itineraries, and internal group experiences designed to connect employees with the territory, local communities, and shared cultural references."
      ),
      image: caminhadaGrupo,
      imageAlt: "Experiência guiada - caminhada cultural",
      imageCredit: "Foto: Julia Souza",
    },
    {
      number: "3",
      title: t("Ferramentas Digitais", "Digital Tools"),
      description: t(
        "Acesso a diários-mapas de viagem, o Mapa de Presença Relacional (MRP™), alertas de segurança e um painel completo de RH para monitorar integração cultural, engajamento e indicadores de risco psicossocial.",
        "Access to travel diary-maps, the Relational Presence Map (MRP™), safety alerts, and a complete HR dashboard to monitor cultural integration, engagement, and psychosocial risk indicators."
      ),
      image: metricsAnalysis,
      imageAlt: "Dashboard de métricas e análise",
    },
    {
      number: "4",
      title: t("Curadoria Personalizada", "Personalized Curation"),
      description: t(
        "Prestadores de serviços locais cuidadosamente selecionados e parceiros especializados em cultura, educação e saúde mental, apoiando tanto colaboradores individuais quanto equipes corporativas.",
        "Carefully selected local service providers and specialized partners in culture, education, and mental health, supporting both individual employees and corporate teams."
      ),
      image: escadaAzul,
      imageAlt: "Curadoria personalizada - escada azul com boas-vindas em vários idiomas",
    },
  ];

  const designedFor = [
    { icon: Globe, text: t("Equipes globais e interculturais", "Global and intercultural teams") },
    { icon: Building2, text: t("Empresas expandindo operações para o Brasil", "Companies expanding operations to Brazil") },
    { icon: Heart, text: t("ONGs e organizações internacionais", "NGOs and international organizations") },
    { icon: Users, text: t("Times de RH gerenciando onboarding, realocação e mobilidade", "HR and People teams managing onboarding, relocation, and mobility") },
  ];

  const partnerLogos = [
    { src: koinzCapitalLogo, alt: "Koinz Capital" },
    { src: coletivaDelasLogo, alt: "Coletiva Delas" },
    { src: justicaGlobalLogo, alt: "Justiça Global" },
    { src: nomadWorldLogo, alt: "Nomad World" },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Logo - Top Left */}
      <div className="flex justify-start">
        <img 
          src={feltripLogo} 
          alt="Feltrip" 
          className="h-16 md:h-24 w-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
          <img 
            src={teamHands} 
            alt={t("Equipe diversa unida", "Diverse team united")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl leading-tight mb-4">
              {t(
                "Adaptação Cultural e Integração Intercultural para Equipes Globais",
                "Cultural Adaptation and Intercultural Integration for Global Teams"
              )}
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mb-8">
              {t(
                "Transformamos experiências de integração de equipes através de IA, atividades humanas guiadas e métricas de presença relacional.",
                "We transform team integration experiences through AI, guided human activities, and relational presence metrics."
              )}
            </p>
            <p className="text-sm font-medium mb-6" style={{ color: 'hsl(330, 100%, 50%)' }}>
              {t("Apenas para empresas.", "For companies only.")}
            </p>
            <Button size="lg" onClick={openWhatsApp} className="text-lg px-8 py-6">
              {t("Solicitar uma Demo", "Request a Demo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cultural Adaptation Matters */}
      <section className="text-center space-y-6 px-2">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">
          {t("Por que Adaptação Cultural Importa", "Why Cultural Adaptation Matters")}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            {t(
              "Desalinhamento cultural durante realocação e onboarding leva a desengajamento, risco psicossocial e alta rotatividade.",
              "Cultural misalignment during relocation and onboarding leads to disengagement, psychosocial risk, and high turnover."
            )}
          </p>
          <p className="text-lg text-foreground font-medium">
            {t(
              "A Feltrip ajuda empresas a reduzir atrito cultural e apoiar equipes na construção de pertencimento, presença e confiança relacional desde o primeiro dia.",
              "Feltrip helps companies reduce cultural friction and support teams in building belonging, presence, and relational trust from day one."
            )}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="text-center space-y-6 px-2">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">
          {t("O que Fazemos", "What We Do")}
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            {t(
              "A Feltrip oferece soluções corporativas para adaptação cultural e onboarding intercultural de equipes globalmente móveis e colaboradores internacionais expandindo para o Brasil.",
              "Feltrip provides corporate solutions for cultural adaptation and intercultural onboarding of globally mobile teams and international employees expanding to Brazil."
            )}
          </p>
          <p className="text-lg text-muted-foreground">
            {t(
              "Combinando tecnologia, experiências práticas e métricas estratégicas, apoiamos empresas na criação de equipes mais saudáveis, conectadas e culturalmente sintonizadas.",
              "By combining technology, hands-on experiences, and strategic metrics, we support companies in creating healthier, more connected, and culturally attuned teams."
            )}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-10">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
          {t("Como Funciona", "How It Works")}
        </h2>
        
        <div className="grid gap-8 md:gap-12">
          {howItWorksSteps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
                  <img 
                    src={step.image} 
                    alt={step.imageAlt} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {step.imageCredit && (
                    <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                      {step.imageCredit}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Designed For - No cards, integrated with background */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
          {t("Projetado Para", "Designed For")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {designedFor.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 py-3">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'hsl(184, 100%, 22%, 0.1)' }}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trusted By */}
      <section className="space-y-8 py-10 border-y border-border">
        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground text-center">
          {t("Quem Confia na Gente", "Trusted By")}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt}
              className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
