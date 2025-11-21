import { useState } from "react";
import { Smartphone, LayoutDashboard, ExternalLink, Mail, Globe } from "lucide-react";
import { FeltripLogo } from "@/components/FeltripLogo";
import { NavigationCard } from "@/components/NavigationCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SuggestionBox } from "@/components/SuggestionBox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ManagerDashboard from "./ManagerDashboard";
import ExpatApp from "./ExpatApp";
const Index = () => {
  const [view, setView] = useState<"hub" | "manager" | "expat">("hub");
  if (view === "manager") {
    return <ManagerDashboard onBack={() => setView("hub")} />;
  }
  if (view === "expat") {
    return <ExpatApp onBack={() => setView("hub")} />;
  }
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 flex flex-col items-center justify-center p-6">
      <WhatsAppButton />
      <div className="w-full max-w-5xl space-y-12">
        <div className="text-center space-y-6">
          <FeltripLogo />
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Simulador de Ecossistema de Onboarding Relacional
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore as duas perspectivas da plataforma Feltrip
            </p>
          </div>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => window.open("http://feltrip.com", "_blank")}
              className="gap-2"
            >
              Saiba Mais
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NavigationCard icon={Smartphone} title="Simular a Experiência do Expatriado" subtitle="O App 'Map of Relational Presence' (MRP)" onClick={() => setView("expat")} />
          <NavigationCard icon={LayoutDashboard} title="Simular o Painel do Gestor" subtitle="Visão de Acompanhamento B2B" onClick={() => setView("manager")} />
        </div>

        <div className="mt-16">
          <div className="mb-16 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                🌍 Planos de Onboarding Relacional Feltrip
              </h2>
              <p className="text-xl text-muted-foreground">
                Culture transitions made human.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Plano 1 */}
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🟦</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">PLANO 1 — Raiz no Território</h3>
                      <p className="text-sm text-muted-foreground">Rooted Landing – Digital + 1h Cultura</p>
                    </div>
                  </div>
                  
                  <p className="text-sm font-semibold text-foreground">Para quem é: Pessoas chegando em um novo país, famílias em transição, recém-contratados estrangeiros.</p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Inclui:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Acesso total ao app Feltrip</li>
                      <li>IA Feltrip com 3h de prática de idioma contextual</li>
                      <li>IA de bem-estar relacional com práticas de presença</li>
                      <li>Diário–Mapa de Viagem para anotações e documentos</li>
                      <li>Mapa de Segurança com alerta para RH</li>
                      <li>Comunidade Feltrip</li>
                      <li>Acesso à rede externa de parceiros*</li>
                      <li>Guia cultural básico das cidades (gratuito)</li>
                      <li>1h de Aula de Cultura / Acolhimento</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-lg text-foreground">US$ 89/mês – 1 pessoa</p>
                    <p className="text-muted-foreground">US$ 129,90/mês – até 4 pessoas</p>
                  </div>
                </div>
              </Card>

              {/* Plano 2 */}
              <Card className="p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🟩</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">PLANO 2 — Cuidado Integral</h3>
                      <p className="text-sm text-muted-foreground">Mental Health Landing – 4 Sessões + Tudo do Plano 1</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Inclui:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>4 sessões individuais com psicólogos especializados em adaptação cultural</li>
                      <li>Acompanhamento psicológico na chegada ou pré-chegada</li>
                      <li>6 meses do APP IA relacionando corpo–território–cultura</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-lg text-foreground">US$ 963 – 1 pessoa</p>
                    <p className="text-muted-foreground">US$ 1.293 – até 4 pessoas</p>
                  </div>
                </div>
              </Card>

              {/* Plano 3 */}
              <Card className="p-6 border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🟨</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">PLANO 3 — Caminho Cultural Guiado</h3>
                      <p className="text-sm text-muted-foreground">Culture Tutor Pack – 10h + Tudo do Plano 1</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Inclui:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>10 horas com Tutor Cultural Feltrip</li>
                      <li>Caminhadas guiadas ou sessões digitais sobre leitura do território</li>
                      <li>Práticas de presença na cidade</li>
                      <li>Educação cultural aplicada ao cotidiano</li>
                      <li>Adaptação para famílias e crianças</li>
                      <li>6 meses de EPI</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-lg text-foreground">US$ 824 – 1 pessoa</p>
                    <p className="text-muted-foreground">US$ 1.193 – até 4 pessoas</p>
                  </div>
                </div>
              </Card>

              {/* Plano 4 */}
              <Card className="p-6 border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🟧</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">PLANO 4 — Transição Completa</h3>
                      <p className="text-sm text-muted-foreground">Full Culture + Mind Care – Tutoria + Psicólogo + Tudo do Plano 1</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Inclui:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>10h de Tutor Cultural</li>
                      <li>4 sessões de psicologia especializada</li>
                      <li>6 meses de App</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-lg text-foreground">US$ 1.700 – 1 pessoa</p>
                    <p className="text-muted-foreground">US$ 2.400 – até 4 pessoas</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bônus para Empresas */}
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

          <SuggestionBox />
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a 
              href="mailto:info@feltrip.com" 
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@feltrip.com</span>
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="http://feltrip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>feltrip.com</span>
            </a>
          </div>
        </footer>
      </div>
    </div>;
};
export default Index;