import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Bot, MapPin, LayoutDashboard, Sparkles, Users, Building2, Heart, Globe } from "lucide-react";

// Images
import feltripLogoFull from "@/assets/feltrip-logo-full.png";
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
        "Our Brazilian culture and hyperlocal AI tutor interacts with team members around everyday habits, cultural nuances, communication styles, and relational dynamics — supporting cultural adaptation and relational well-being through conversation and guidance.",
      ),
      image: bobaDeboas,
      imageAlt: "Boba Cult - IA tutora de cultura brasileira",
    },
    {
      number: "2",
      title: t("Experiências Guiadas", "Guided Experiences"),
      description: t(
        "Caminhadas culturais curadas, visitas a museus, roteiros personalizados e experiências em grupo projetadas para conectar colaboradores ao território, comunidades locais e referências culturais compartilhadas.",
        "Curated cultural walks, museum visits, personalized itineraries, and internal group experiences designed to connect employees with the territory, local communities, and shared cultural references.",
      ),
      image: caminhadaGrupo,
      imageAlt: "Experiência guiada em grupo - Foto: Julia Souza",
    },
    {
      number: "3",
      title: t("Ferramentas Digitais", "Digital Tools"),
      description: t(
        "Acesso a diários-mapas de viagem, o Mapa de Presença Relacional (MRP™), alertas de segurança e um painel completo de RH para monitorar integração cultural, engajamento e indicadores de risco psicossocial.",
        "Access to travel diary-maps, the Relational Presence Map (MRP™), safety alerts, and a complete HR dashboard to monitor cultural integration, engagement, and psychosocial risk indicators.",
      ),
      image: metricsAnalysis,
      imageAlt: "Dashboard de métricas e análise",
    },
    {
      number: "4",
      title: t("Curadoria Personalizada", "Personalized Curation"),
      description: t(
        "Prestadores de serviços locais cuidadosamente selecionados e parceiros especializados em cultura, educação e saúde mental, apoiando tanto colaboradores individuais quanto equipes corporativas.",
        "Carefully selected local service providers and specialized partners in culture, education, and mental health, supporting both individual employees and corporate teams.",
      ),
      image: escadaAzul,
      imageAlt: "Curadoria personalizada - Escadaria Selarón",
    },
  ];

  const designedFor = [
    { icon: Globe, text: t("Equipes globais e interculturais", "Global and intercultural teams") },
    {
      icon: Building2,
      text: t("Empresas expandindo operações para o Brasil", "Companies expanding operations to Brazil"),
    },
    { icon: Heart, text: t("ONGs e organizações internacionais", "NGOs and international organizations") },
    {
      icon: Users,
      text: t(
        "Times de RH gerenciando onboarding, realocação e mobilidade",
        "HR and People teams managing onboarding, relocation, and mobility",
      ),
    },
  ];

  const partnerLogos = [
    { src: koinzCapitalLogo, alt: "Abraço Cultural" },
    { src: coletivaDelasLogo, alt: "Coletiva Delas" },
    { src: justicaGlobalLogo, alt: "Justiça Global" },
    { src: nomadWorldLogo, alt: "Nomad World" },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
          <img
            src={teamHands}
            alt={t("Equipe diversa unida", "Diverse team united")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <img src={feltripLogoFull} alt="Feltrip" className="h-20 md:h-32 w-auto mb-6 md:mb-8 drop-shadow-lg" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl leading-tight mb-4">
              {t(
                "Adaptação Cultural e Integração Intercultural para Equipes Globais",
                "Cultural Adaptation and Intercultural Integration for Global Teams",
              )}
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mb-8">
              {t(
                "Transformamos experiências de integração de equipes através de IA, atividades humanas guiadas e métricas de presença relacional.",
                "We transform team integration experiences through AI, guided human activities, and relational presence metrics.",
              )}
            </p>
            <p className="text-sm text-energy font-semibold mb-6">
              {t("Apenas para empresas.", "For companies only.")}
            </p>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="text-lg px-8 py-6 bg-energy hover:bg-energy/90 text-white shadow-lg"
            >
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
              "Cultural misalignment during relocation and onboarding leads to disengagement, psychosocial risk, and high turnover.",
            )}
          </p>
          <p className="text-lg text-foreground font-medium">
            {t(
              "A Feltrip ajuda empresas a reduzir atrito cultural e apoiar equipes na construção de pertencimento, presença e confiança relacional desde o primeiro dia.",
              "Feltrip helps companies reduce cultural friction and support teams in building belonging, presence, and relational trust from day one.",
            )}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="text-center space-y-6 px-2">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">{t("O que Fazemos", "What We Do")}</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            {t(
              "A Feltrip oferece soluções corporativas para adaptação cultural e onboarding intercultural de equipes globalmente móveis e colaboradores nacionais e internacionais expandindo para o Brasil. Utilizamos nossa metodologia proprietária Mapa da Presença Relacional, (MRP™)",
              "Feltrip provides corporate solutions for cultural adaptation and intercultural onboarding of globally mobile teams, national and international employees expanding to Brazil. We use our proprietary methodology, the Map of Relational Presence (MRP™)",
            )}
          </p>
          <p className="text-lg text-muted-foreground">
            {t(
              "Combinando tecnologia, experiências práticas e métricas estratégicas, apoiamos empresas na criação de equipes mais saudáveis, conectadas e culturalmente sintonizadas.",
              "By combining technology, hands-on experiences, and strategic metrics, we support companies in creating healthier, more connected, and culturally attuned teams.",
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
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-10 items-center`}
            >
              {step.image ? (
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
                    <img src={step.image} alt={step.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                    {index === 1 && (
                      <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                        Foto: Julia Souza
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-1/2">
                  <Card className="aspect-square md:aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
                    <div className="text-center p-8">
                      {index === 1 && <MapPin className="h-20 w-20 mx-auto text-primary/60" />}
                      {index === 3 && <Sparkles className="h-20 w-20 mx-auto text-primary/60" />}
                    </div>
                  </Card>
                </div>
              )}

              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-energy text-white text-xl font-bold shadow-lg">
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

      {/* Designed For */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center">
          {t("Projetado Para", "Designed For")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designedFor.map((item, index) => {
            const Icon = item.icon;
            const colors = [
              { bg: "bg-energy/10", text: "text-energy" },
              { bg: "bg-warm/10", text: "text-warm" },
              { bg: "bg-accent/10", text: "text-accent" },
              { bg: "bg-primary/10", text: "text-primary" },
            ];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="p-6 flex items-center gap-4 rounded-xl border border-border/30 hover:border-primary/30 transition-colors bg-card/50"
              >
                <div className={`p-3 rounded-xl ${color.bg}`}>
                  <Icon className={`h-6 w-6 ${color.text}`} />
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
