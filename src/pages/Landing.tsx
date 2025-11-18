import { Smartphone, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FeltripLogo } from "@/components/FeltripLogo";
import { Card, CardContent } from "@/components/ui/card";
import muralHero from "@/assets/mural-hero.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-background">
      {/* Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <FeltripLogo />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Simulador de Ecossistema de Onboarding Relacional
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore as duas perspectivas da plataforma Feltrip: A Experiência do Colaborador e a Visão Estratégica do Gestor
              </p>
            </div>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Colaborador */}
            <Card 
              className="cursor-pointer transition-all hover:scale-105 hover:shadow-xl bg-card/95 backdrop-blur"
              onClick={() => navigate('/login')}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Simular a Experiência do Colaborador
                  </h3>
                  <p className="text-muted-foreground">
                    O App 'Map of Relational Presence' (MRP) e o Mapa de Segurança
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Gestor */}
            <Card 
              className="cursor-pointer transition-all hover:scale-105 hover:shadow-xl bg-card/95 backdrop-blur"
              onClick={() => navigate('/login')}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <LayoutDashboard className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Simular o Painel do Gestor
                  </h3>
                  <p className="text-muted-foreground">
                    Visão de Acompanhamento B2B e Retorno sobre Investimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
