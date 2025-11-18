import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import coletivaDelasLogo from "@/assets/coletiva-delas-logo.png";
import justicaGlobalLogo from "@/assets/justica-global-logo.png";
import nomadWorldLogo from "@/assets/nomad-world-logo.png";
import abracoculturalLogo from "@/assets/abraco-cultural-logo.png";
import feltripLogo from "@/assets/feltrip-logo.png";

interface CuradoriaPremiumProps {
  onBack: () => void;
}

const CuradoriaPremium = ({ onBack }: CuradoriaPremiumProps) => {
  const partners = [
    { name: "Coletiva Delas", logo: coletivaDelasLogo },
    { name: "Justiça Global", logo: justicaGlobalLogo },
    { name: "The Nomad World", logo: nomadWorldLogo },
    { name: "Abraço Cultural", logo: abracoculturalLogo },
    { name: "Feltrip", logo: feltripLogo },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
              Feltrip Curadoria Premium
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Onde o Onboarding Digital Encontra a Cidade
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A adaptação de um expatriado não acontece apenas em um aplicativo; ela acontece no território. 
            O software da Feltrip oferece o mapa, mas nossa <span className="font-semibold text-primary">Curadoria Premium</span> oferece 
            a experiência corporificada.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nós desenhamos e executamos <span className="font-semibold text-primary">projetos personalizados de acolhimento 
            que ativam o espaço urbano</span>.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Em vez de um tour genérico, criamos experiências que conectam profundamente o colaborador com o novo ambiente, 
            usando a própria cidade como ferramenta de diálogo e integração.
          </p>
        </section>

        {/* Value Section */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
            O Valor Híbrido: Ganha o Colaborador, Ganha a Empresa
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Nossa metodologia de curadoria gera um impacto de via dupla:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Para seu Colaborador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Promove um senso de <span className="font-semibold text-primary">pertencimento real</span>. 
                  Ele deixa de ser um espectador e passa a ser um participante ativo da cultura local, 
                  entendendo seu novo contexto de forma humana e situada.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Para sua Marca</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Nós <span className="font-semibold text-primary">ativamos sua marca no cenário urbano</span>. 
                  Ao patrocinar e co-realizar essas ativações, sua empresa se posiciona como uma força cultural positiva, 
                  gerando espaços de diálogo e demonstrando um compromisso genuíno com a cidade onde está presente.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
            Nossos Projetos de Ativação
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Não vendemos teoria. Entregamos resultados comprovados:
          </p>

          <div className="space-y-6">
            {/* Narrativa Migrante */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Narrativa Migrante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">O Que Foi:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Um projeto em co-realização com a Coletiva Delas, patrocinado pela EloGroup e pela Prefeitura do Rio de Janeiro.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">A Ativação:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Unimos historiadores e migrantes em caminhadas-diálogo pela Pequena África (Rio), explorando temas como 
                    diáspora, afeto e interculturalidade. O resultado está sendo transformado em um ebook e uma série de vídeos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Nomad World */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Parceria Oficial com The Nomad World Festival</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">O Que É:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Realização de caminhadas históricas e de construção de comunidade no Rio de Janeiro, conectando nômades 
                    digitais e locais com a história profunda da cidade.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Impact Section */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
            Feltrip Impacto Social
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Como parte fundamental da nossa metodologia de "Ocupar o Território", o programa <span className="font-semibold text-primary">Feltrip Impacto Social</span> é 
            o nosso braço dedicado a organizações sem fins lucrativos e ONGs.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Para estas organizações, não oferecemos um catálogo, mas sim uma solução de curadoria focada. Ativamos nossa rede de 
            parceiros homologados para desenhar um apoio pontual e sob medida, alinhado à situação específica e aos desafios da ONG.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada projeto conta com um acompanhamento específico da Feltrip para garantir a aplicação da nossa metodologia.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Disponibilizamos este serviço a um <span className="font-semibold text-primary">valor social subsidiado</span>, viabilizando o acesso ao nosso 
            ecossistema de curadoria como parte do nosso compromisso de impacto.
          </p>

          <div className="space-y-6 mt-8">
            {/* Justiça Global */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Acolhimento de Defensores (Justiça Global)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">O Que Foi:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Um projeto de acolhimento para visitantes e defensores de direitos humanos da ONG Justiça Global.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">A Ativação:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Usamos caminhadas imersivas no cotidiano e na cultura local como uma ferramenta prática para o aprendizado 
                    do português e a integração cultural.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Abraço Cultural */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Caminhada Poética para equipes interestaduais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Como parte do nosso programa Feltrip Impacto Social, propomos à Abraço Cultural uma ativação de curadoria 
                  pontual para seus colaboradores de SP no Rio: uma conversa-caminhada poética no Mural das Etnias, focada nos 
                  pilares "Território" e "O Outro".
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partners Carousel */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center">
            Confiam na Feltrip
          </h3>
          <div className="max-w-4xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-4">
                      <Card className="border-0 shadow-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CuradoriaPremium;
