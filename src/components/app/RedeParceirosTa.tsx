import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, GraduationCap, Scale, Calculator, Languages, MapPin, Globe } from "lucide-react";

type Especialidade = "moradia" | "educacao" | "juridico" | "contabil" | "idioma";

interface Parceiro {
  id: string;
  nome: string;
  especialidade: Especialidade;
  cidade: string;
  pais: string;
  descricao: string;
  redeGlobal: boolean;
}

const especialidadesConfig = {
  moradia: { label: "Moradia", icon: Building2, color: "bg-blue-500" },
  educacao: { label: "Educação", icon: GraduationCap, color: "bg-green-500" },
  juridico: { label: "Jurídico", icon: Scale, color: "bg-purple-500" },
  contabil: { label: "Contábil", icon: Calculator, color: "bg-orange-500" },
  idioma: { label: "Idioma", icon: Languages, color: "bg-pink-500" },
};

// Mock data
const mockParceiros: Parceiro[] = [
  {
    id: "1",
    nome: "Lisboa Home Finder",
    especialidade: "moradia",
    cidade: "Lisboa",
    pais: "Portugal",
    descricao: "Consultoria especializada em encontrar moradia para expatriados em Lisboa",
    redeGlobal: false,
  },
  {
    id: "2",
    nome: "Global Education Partners",
    especialidade: "educacao",
    cidade: "Porto",
    pais: "Portugal",
    descricao: "Rede global de consultoria educacional para famílias expatriadas",
    redeGlobal: true,
  },
  {
    id: "3",
    nome: "Advogados Internacionais",
    especialidade: "juridico",
    cidade: "Lisboa",
    pais: "Portugal",
    descricao: "Escritório de advocacia especializado em imigração e direito internacional",
    redeGlobal: false,
  },
  {
    id: "4",
    nome: "TaxGlobal Contabilidade",
    especialidade: "contabil",
    cidade: "Lisboa",
    pais: "Portugal",
    descricao: "Serviços contábeis e fiscais para expatriados",
    redeGlobal: true,
  },
  {
    id: "5",
    nome: "Portuguese Language Academy",
    especialidade: "idioma",
    cidade: "Lisboa",
    pais: "Portugal",
    descricao: "Aulas de português para estrangeiros com professores nativos",
    redeGlobal: false,
  },
  {
    id: "6",
    nome: "Home Solutions Porto",
    especialidade: "moradia",
    cidade: "Porto",
    pais: "Portugal",
    descricao: "Imobiliária focada em expatriados no Porto",
    redeGlobal: false,
  },
];

export const RedeParceirosTa = () => {
  const [selectedEspecialidade, setSelectedEspecialidade] = useState<Especialidade | null>(null);
  const [searchCidade, setSearchCidade] = useState("");
  const [showRedeGlobal, setShowRedeGlobal] = useState(false);

  const filteredParceiros = mockParceiros.filter((parceiro) => {
    const matchEspecialidade = !selectedEspecialidade || parceiro.especialidade === selectedEspecialidade;
    const matchCidade = !searchCidade || parceiro.cidade.toLowerCase().includes(searchCidade.toLowerCase());
    const matchRedeGlobal = !showRedeGlobal || parceiro.redeGlobal;
    
    return matchEspecialidade && matchCidade && matchRedeGlobal;
  });

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Rede de Parceiros Externa</h1>
        <p className="text-sm text-muted-foreground">
          Conecte-se com parceiros especializados para facilitar sua adaptação
        </p>
      </div>

      {/* Filtros */}
      <div className="space-y-3">
        {/* Especialidades */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Especialidade</label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(especialidadesConfig) as Especialidade[]).map((esp) => {
              const config = especialidadesConfig[esp];
              const Icon = config.icon;
              const isSelected = selectedEspecialidade === esp;
              
              return (
                <Button
                  key={esp}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedEspecialidade(isSelected ? null : esp)}
                  className="gap-2"
                >
                  <Icon className="h-3 w-3" />
                  {config.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Cidade */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Cidade</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por cidade..."
              value={searchCidade}
              onChange={(e) => setSearchCidade(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Rede Global */}
        <div className="flex items-center gap-2">
          <Button
            variant={showRedeGlobal ? "default" : "outline"}
            size="sm"
            onClick={() => setShowRedeGlobal(!showRedeGlobal)}
            className="gap-2"
          >
            <Globe className="h-3 w-3" />
            Apenas Rede Global
          </Button>
        </div>
      </div>

      {/* Vitrine de Parceiros */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            {filteredParceiros.length} parceiro(s) encontrado(s)
          </h2>
        </div>

        {filteredParceiros.length === 0 ? (
          <Card className="p-8">
            <div className="text-center text-muted-foreground">
              <p>Nenhum parceiro encontrado com os filtros selecionados</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredParceiros.map((parceiro) => {
              const config = especialidadesConfig[parceiro.especialidade];
              const Icon = config.icon;
              
              return (
                <Card key={parceiro.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg ${config.color} bg-opacity-10`}>
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <CardTitle className="text-base">{parceiro.nome}</CardTitle>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{parceiro.cidade}, {parceiro.pais}</span>
                          </div>
                        </div>
                      </div>
                      {parceiro.redeGlobal && (
                        <Badge variant="secondary" className="gap-1">
                          <Globe className="h-3 w-3" />
                          Global
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{parceiro.descricao}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Contatar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
