import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Users, Building2, Heart, Globe } from "lucide-react";

// Images
import feltripLogo from "@/assets/feltrip-logo-trans.png";
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
      imageAlt: t("Boba Cult - IA tutora de cultura brasileira", "Boba Cult - Brazilian culture AI tutor"),
    },
    {
      number: "2",
      title: t("Experiências Guiadas", "Guided Experiences"),
      description: t(
        "Caminhadas culturais curadas, visitas a museus, roteiros personalizados e experiências em grupo projetadas para conectar colaboradores ao território, comunidades locais e referências culturais compartilhadas.",
        "Curated cultural walks, museum visits, personalized itineraries, and internal group experiences designed to connect employees with the territory, local communities, and shared cultural references."
      ),
      image: caminhadaGrupo,
      imageAlt: t("Experiência guiada - caminhada cultural", "Guided experience - cultural walk"),
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
      imageAlt: t("Dashboard de métricas e análise de integração cultural", "Cultural integration metrics and analysis dashboard"),
    },
    {
      number: "4",
      title: t("Curadoria Personalizada", "Personalized Curation"),
      description: t(
        "Prestadores de serviços locais cuidadosamente selecionados e parceiros especializados em cultura, educação e saúde mental, apoiando tanto colaboradores individuais quanto equipes corporativas.",
        "Carefully selected local service providers and specialized partners in culture, education, and mental health, supporting both individual employees and corporate teams."
      ),
      image: escadaAzul,
      imageAlt: t("Curadoria personalizada - boas-vindas em vários idiomas", "Personalized curation - welcome in multiple languages"),
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
    <main className="space-y-6 md:space-y-12" role="main">
      {/* Logo - Top Left */}
      <header className="flex justify-start">
        <img 
          src={feltripLogo} 
          alt="Feltrip - Cultural Adaptation and Intercultural Integration"
          className="h-16 md:h-28 w-auto"
          width="200"
          height="80"
        />
      </header>

      {/* Hero Section */}
      <section className="relative" aria-labelledby="hero-heading">
        <div className="relative h-[350px] md:h-[500px] overflow-hidden rounded-xl md:rounded-2xl">
          <img 
            src={teamHands} 
            alt={t("Equipe diversa unida em ambiente corporativo", "Diverse team united in corporate environment")}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 md:px-4 text-center">
            <h1 id="hero-heading" className="text-xl md:text-3xl lg:text-5xl font-bold text-foreground max-w-4xl leading-tight mb-2 md:mb-4">
              {t(
                "Adaptação Cultural e Integração Intercultural para Equipes Globais",
                "Cultural Adaptation and Intercultural Integration for Global Teams"
              )}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mb-3 md:mb-6">
              {t(
                "Transformamos experiências de integração de equipes através de IA, atividades humanas guiadas e métricas de presença relacional.",
                "We transform team integration experiences through AI, guided human activities, and relational presence metrics."
              )}
            </p>
            <p className="text-xs md:text-sm font-medium mb-3 md:mb-5" style={{ color: 'hsl(330, 100%, 50%)' }}>
              {t("Apenas para empresas.", "For companies only.")}
            </p>
            <Button size="default" onClick={openWhatsApp} className="text-sm md:text-lg px-4 md:px-8 py-3 md:py-6" aria-label={t("Solicitar uma demonstração via WhatsApp", "Request a demo via WhatsApp")}>
              {t("Solicitar uma Demo", "Request a Demo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cultural Adaptation Matters */}
      <section className="text-center space-y-3 md:space-y-5 px-2" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
          {t("Por que Adaptação Cultural Importa", "Why Cultural Adaptation Matters")}
        </h2>
        <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            {t(
              "Desalinhamento cultural durante realocação e onboarding leva a desengajamento, risco psicossocial e alta rotatividade.",
              "Cultural misalignment during relocation and onboarding leads to disengagement, psychosocial risk, and high turnover."
            )}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-foreground font-medium">
            {t(
              "A Feltrip ajuda empresas a reduzir atrito cultural e apoiar equipes na construção de pertencimento, presença e confiança relacional desde o primeiro dia.",
              "Feltrip helps companies reduce cultural friction and support teams in building belonging, presence, and relational trust from day one."
            )}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="text-center space-y-3 md:space-y-5 px-2" aria-labelledby="whatwedo-heading">
        <h2 id="whatwedo-heading" className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
          {t("O que Fazemos", "What We Do")}
        </h2>
        <div className="max-w-4xl mx-auto space-y-2 md:space-y-3">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            {t(
              "A Feltrip oferece soluções corporativas para adaptação cultural e onboarding intercultural de equipes globalmente móveis e colaboradores internacionais expandindo para o Brasil.",
              "Feltrip provides corporate solutions for cultural adaptation and intercultural onboarding of globally mobile teams and international employees expanding to Brazil."
            )}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            {t(
              "Combinando tecnologia, experiências práticas e métricas estratégicas, apoiamos empresas na criação de equipes mais saudáveis, conectadas e culturalmente sintonizadas.",
              "By combining technology, hands-on experiences, and strategic metrics, we support companies in creating healthier, more connected, and culturally attuned teams."
            )}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-5 md:space-y-8" aria-labelledby="howitworks-heading">
        <h2 id="howitworks-heading" className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground text-center">
          {t("Como Funciona", "How It Works")}
        </h2>
        
        <div className="grid gap-5 md:gap-8">
          {howItWorksSteps.map((step, index) => (
            <article 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-6 items-center`}
            >
              <figure className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3]">
                  <img 
                    src={step.image} 
                    alt={step.imageAlt} 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {step.imageCredit && (
                    <figcaption className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                      {step.imageCredit}
                    </figcaption>
                  )}
                </div>
              </figure>
              
              <div className="w-full md:w-1/2 space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground text-lg md:text-xl font-bold" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Designed For */}
      <section className="space-y-3 md:space-y-6" aria-labelledby="designedfor-heading">
        <h2 id="designedfor-heading" className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground text-center">
          {t("Projetado Para", "Designed For")}
        </h2>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-4xl mx-auto list-none">
          {designedFor.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="flex items-center gap-3 md:gap-4 py-2">
                <div className="p-2 md:p-3 rounded-full bg-primary/10" aria-hidden="true">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Trusted By */}
      <section className="space-y-3 md:space-y-6 py-5 md:py-8 border-y border-border" aria-labelledby="trustedby-heading">
        <h2 id="trustedby-heading" className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground text-center">
          {t("Quem Confia na Gente", "Trusted By")}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8" role="list" aria-label={t("Empresas parceiras", "Partner companies")}>
          {partnerLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt}
              className="h-10 md:h-14 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              loading="lazy"
              role="listitem"
            />
          ))}
        </div>
      </section>
    </main>
  );
};
