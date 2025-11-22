import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import bobaMeditating from "@/assets/boba-meditating.png";
import bobaAvatar from "@/assets/boba-avatar.jpg";
import feltripPin from "@/assets/feltrip-pin.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ProposicaoTab } from "./ProposicaoTab";

interface DiaryEntry {
  pillar: string;
  sentiment: number;
}

interface MapNote {
  id: string;
  title: string;
  content: string;
  audio_url: string | null;
  image_url: string | null;
  latitude: number;
  longitude: number;
}

const pillarExplanations = {
  "Corpo": "Percepção corporal, sensações físicas, saúde, energia e vitalidade no novo ambiente.",
  "Espaço": "Relação com ambientes íntimos e privados, sensação de acolhimento nos espaços pessoais.",
  "Território": "Conexão com o lugar geográfico, pertencimento ao entorno, exploração do território.",
  "O Outro": "Vínculos relacionais, conexões sociais, qualidade das interações humanas.",
  "Identidade": "Autoimagem, valores pessoais, senso de si mesmo no processo de adaptação."
};

export const MeuMapaTab = () => {
  const { toast } = useToast();
  const [radarData, setRadarData] = useState<DiaryEntry[]>([]);
  const [historicalData, setHistoricalData] = useState<DiaryEntry[]>([]);
  const [mapNotes, setMapNotes] = useState<MapNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProposicao, setShowProposicao] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);

  // Se está mostrando Proposição, renderiza apenas ela
  if (showProposicao) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border">
          <Button 
            variant="ghost" 
            onClick={() => setShowProposicao(false)}
            className="mb-2"
          >
            ← Voltar ao Mapa
          </Button>
        </div>
        <ProposicaoTab />
      </div>
    );
  }

  useEffect(() => {
    loadRadarData();
    loadHistoricalData();
    loadMapNotes();
  }, []);

  const loadRadarData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('diario_entries')
        .select('pillar, sentiment')
        .eq('user_id', user.id);

      if (error) throw error;

      // Aggregate by pillar (average sentiment)
      const pillars = ['Corpo', 'Espaço', 'Território', 'O Outro', 'Identidade'];
      const aggregated = pillars.map(pillar => {
        const entries = data?.filter(e => e.pillar === pillar) || [];
        const avg = entries.length > 0 
          ? entries.reduce((sum, e) => sum + e.sentiment, 0) / entries.length 
          : 0;
        return { pillar, sentiment: avg };
      });

      setRadarData(aggregated);
    } catch (error) {
      console.error('Error loading radar data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadHistoricalData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Buscar dados de 30 dias atrás
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data, error } = await supabase
        .from('diario_entries')
        .select('pillar, sentiment')
        .eq('user_id', user.id)
        .lt('created_at', thirtyDaysAgo.toISOString());

      if (error) throw error;

      // Aggregate by pillar
      const pillars = ['Corpo', 'Espaço', 'Território', 'O Outro', 'Identidade'];
      const aggregated = pillars.map(pillar => {
        const entries = data?.filter(e => e.pillar === pillar) || [];
        const avg = entries.length > 0 
          ? entries.reduce((sum, e) => sum + e.sentiment, 0) / entries.length 
          : 0;
        return { pillar, sentiment: avg };
      });

      setHistoricalData(aggregated);
    } catch (error) {
      console.error('Error loading historical data:', error);
    }
  };

  const loadMapNotes = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('map_pins')
        .select('*')
        .eq('user_id', user.id)
        .eq('type', 'anotacao')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMapNotes(data || []);
    } catch (error) {
      console.error('Error loading map notes:', error);
    }
  };

  const deleteNote = async (noteId: string, audioUrl: string | null, imageUrl: string | null) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Deletar arquivos de storage se existirem
      if (audioUrl) {
        const audioPath = audioUrl.split('/').slice(-2).join('/'); // Extrai user_id/filename
        await supabase.storage.from('map-audio').remove([audioPath]);
      }

      if (imageUrl) {
        const imagePath = imageUrl.split('/').slice(-2).join('/');
        await supabase.storage.from('map-images').remove([imagePath]);
      }

      // Deletar do banco
      const { error } = await supabase
        .from('map_pins')
        .delete()
        .eq('id', noteId)
        .eq('user_id', user.id);

      if (error) throw error;

      toast({ title: "Anotação deletada!" });
      loadMapNotes();
    } catch (error: any) {
      toast({ 
        title: "Erro ao deletar", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  // Realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('map-notes-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'map_pins',
        },
        () => {
          loadMapNotes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const hasData = radarData.some(d => d.sentiment > 0);
  const hasHistoricalData = historicalData.some(d => d.sentiment > 0);
  
  // Cores do dashboard RH
  const COLORS = [
    'hsl(var(--primary))',     // Corpo
    'hsl(var(--secondary))',   // Espaço  
    'hsl(var(--accent))',      // Território
    'hsl(var(--energy))',      // O Outro
    'hsl(var(--primary))',     // Identidade
  ];

  // Dados fictícios para demonstração quando não há dados reais
  const fakeDataCurrent = [
    { pillar: "Corpo", sentiment: 75 },
    { pillar: "Espaço", sentiment: 65 },
    { pillar: "Território", sentiment: 82 },
    { pillar: "O Outro", sentiment: 88 },
    { pillar: "Identidade", sentiment: 70 },
  ];

  const fakeDataHistorical = [
    { pillar: "Corpo", sentiment: 60 },
    { pillar: "Espaço", sentiment: 55 },
    { pillar: "Território", sentiment: 70 },
    { pillar: "O Outro", sentiment: 75 },
    { pillar: "Identidade", sentiment: 58 },
  ];

  const displayData = hasData ? radarData : fakeDataCurrent;
  const displayHistoricalData = hasHistoricalData ? historicalData : fakeDataHistorical;

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Meu Mapa</h2>
          <p className="text-sm text-muted-foreground">
            Explore seus diferentes mapas de experiência
          </p>
        </div>

        <Tabs defaultValue="presenca" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presenca">Presença Relacional</TabsTrigger>
            <TabsTrigger value="idioma">Anotações</TabsTrigger>
          </TabsList>

          {/* Relational Presence Map Tab */}
          <TabsContent value="presenca" className="space-y-6">
            {/* Hero Section with Boba Meditating */}
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl border-2 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              <div className="relative p-8 flex flex-col items-center space-y-4">
                <div className="w-48 h-48 relative">
                  <img 
                    src={bobaMeditating} 
                    alt="Boba meditando na praia" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                
                <div className="text-center space-y-3 max-w-md">
                  <h3 className="text-2xl font-bold text-foreground">
                    Como você está se sentindo?
                  </h3>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    Vamos juntos explorar seus pilares relacionais: 
                    <span className="block mt-1 font-semibold text-foreground">
                      Corpo, O outro, Território, Espaço e Identidade
                    </span>
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="mt-4 w-full max-w-sm text-base py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setShowProposicao(true)}
                  >
                    Faça seu Mapa da Presença Relacional
                  </Button>
                </div>
              </div>
            </div>

            {/* Metodologia */}
            <div className="bg-card/50 rounded-xl p-6 border border-border/50 backdrop-blur-sm space-y-3">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  Modelo:
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para observação da presença relacional em processos de adaptação e pertencimento.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">
                  Método:
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A observação é realizada por meio de autoavaliações fenomenológicas (percepção corporal, emocional e simbólica), mediadas por práticas orientadas pelo Feltrip™.
                </p>
              </div>
            </div>

            {/* Pie Chart Visualization */}
            <div className="bg-card rounded-xl border-2 border-border p-6">
              {loading ? (
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto" />
                    <p className="text-muted-foreground">Carregando seu mapa...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1 space-y-2">
                      <h4 className="text-lg font-bold text-foreground">
                        Sua Pizza de Presença Relacional
                      </h4>
                      {!hasData && (
                        <p className="text-xs text-muted-foreground italic">
                          (Exemplo fictício - Complete seu diário para ver seus dados reais)
                        </p>
                      )}
                    </div>
                    <Button
                      variant={comparisonMode ? "default" : "outline"}
                      size="sm"
                      onClick={() => setComparisonMode(!comparisonMode)}
                      className="ml-4"
                    >
                      {comparisonMode ? "Visão Única" : "Comparar"}
                    </Button>
                  </div>
                  
                  {comparisonMode ? (
                    /* Modo Comparação - Duas Pizzas */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                      {/* Pizza Antes (Histórico) */}
                      <div className="space-y-3">
                        <div className="text-center">
                          <h5 className="text-sm font-semibold text-muted-foreground">
                            Há 30 dias
                          </h5>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                          <PieChart>
                            <Pie
                              data={displayHistoricalData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={false}
                              outerRadius={90}
                              innerRadius={35}
                              fill="hsl(var(--primary))"
                              dataKey="sentiment"
                              paddingAngle={3}
                            >
                              {displayHistoricalData.map((entry, index) => (
                                <Cell 
                                  key={`cell-before-${index}`} 
                                  fill={COLORS[index % COLORS.length]}
                                  stroke="white"
                                  strokeWidth={2}
                                  opacity={0.7}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Pizza Depois (Atual) */}
                      <div className="space-y-3">
                        <div className="text-center">
                          <h5 className="text-sm font-semibold text-foreground">
                            Agora
                          </h5>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                          <PieChart>
                            <Pie
                              data={displayData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={false}
                              outerRadius={90}
                              innerRadius={35}
                              fill="hsl(var(--primary))"
                              dataKey="sentiment"
                              paddingAngle={3}
                            >
                              {displayData.map((entry, index) => (
                                <Cell 
                                  key={`cell-after-${index}`} 
                                  fill={COLORS[index % COLORS.length]}
                                  stroke="white"
                                  strokeWidth={2}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Comparação de Valores */}
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <h5 className="text-sm font-semibold text-foreground text-center mb-3">
                          Evolução por Pilar
                        </h5>
                        {displayData.map((entry, index) => {
                          const historicalValue = displayHistoricalData[index].sentiment;
                          const currentValue = entry.sentiment;
                          const difference = currentValue - historicalValue;
                          const percentChange = historicalValue > 0 
                            ? ((difference / historicalValue) * 100).toFixed(1)
                            : 0;
                          
                          return (
                            <div 
                              key={entry.pillar}
                              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <div 
                                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm shrink-0" 
                                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                <span className="font-medium text-sm text-foreground">
                                  {entry.pillar}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="text-muted-foreground">
                                  {historicalValue.toFixed(0)}%
                                </span>
                                <span className="text-muted-foreground">→</span>
                                <span className="font-semibold text-foreground">
                                  {currentValue.toFixed(0)}%
                                </span>
                                <span 
                                  className={`font-bold ${
                                    difference > 0 
                                      ? 'text-green-600' 
                                      : difference < 0 
                                      ? 'text-red-600' 
                                      : 'text-muted-foreground'
                                  }`}
                                >
                                  {difference > 0 ? '+' : ''}{difference.toFixed(0)}
                                  {difference !== 0 && ` (${percentChange}%)`}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    /* Modo Normal - Uma Pizza */
                    <div className="animate-fade-in">
                      <ResponsiveContainer width="100%" height={380}>
                        <PieChart>
                          <Pie
                            data={displayData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={false}
                            outerRadius={120}
                            innerRadius={45}
                            fill="hsl(var(--primary))"
                            dataKey="sentiment"
                            paddingAngle={3}
                          >
                            {displayData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]}
                                stroke="white"
                                strokeWidth={3}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      
                      {/* Interactive Pillar Buttons */}
                      <div className="grid grid-cols-1 gap-3 mt-6">
                        {displayData.map((entry, index) => (
                          <button
                            key={entry.pillar}
                            onClick={() => setSelectedPillar(selectedPillar === entry.pillar ? null : entry.pillar)}
                            className="w-full text-left transition-all duration-300 hover:scale-[1.02]"
                          >
                            <div 
                              className={`rounded-lg p-4 border-2 ${
                                selectedPillar === entry.pillar 
                                  ? 'border-white shadow-lg' 
                                  : 'border-transparent'
                              }`}
                              style={{ backgroundColor: COLORS[index % COLORS.length] + '20' }}
                            >
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm shrink-0" 
                                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-foreground">{entry.pillar}</span>
                                    <span className="text-sm font-semibold text-foreground">{entry.sentiment.toFixed(0)}%</span>
                                  </div>
                                  {selectedPillar === entry.pillar && (
                                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 animate-accordion-down">
                                      {pillarExplanations[entry.pillar as keyof typeof pillarExplanations]}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Boba Professor Card */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/30 p-6">
              <div className="flex items-center gap-4">
                <img 
                  src={bobaAvatar} 
                  alt="Boba professora"
                  className="w-20 h-20 rounded-full object-cover border-3 border-accent shadow-lg"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-lg text-foreground">Boba Professora</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Como se comunicar no novo idioma sem constrangimento?
                    <span className="block mt-1 font-medium text-accent">A Boba te ajuda!</span>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Language Notes Map Tab */}
          <TabsContent value="idioma" className="space-y-4">
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Mapa de Aprendizado Relacional</h3>
              
              {/* Map Visualization */}
              <div className="bg-muted/20 rounded-lg border border-border overflow-hidden" style={{ height: '300px' }}>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-amber-50">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px)'
                  }} />
                  
                  {mapNotes.map((note, index) => {
                    // Distribute pins across the map if coordinates are 0
                    const lat = note.latitude === 0 ? 20 + (index * 15) % 60 : note.latitude;
                    const lng = note.longitude === 0 ? 20 + (index * 20) % 70 : note.longitude;
                    
                    return (
                      <div 
                        key={note.id}
                        className="absolute w-12 h-12 cursor-pointer hover:scale-125 transition-transform drop-shadow-lg"
                        style={{ top: `${lat}%`, left: `${lng}%` }}
                        title={note.title}
                      >
                        <img 
                          src={feltripPin} 
                          alt="Pin Feltrip"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notes List */}
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-medium text-foreground">Suas Anotações:</h4>
                {mapNotes.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhuma anotação ainda. Crie uma na aba "Notas"!
                  </p>
                ) : (
                  mapNotes.map((note) => (
                    <div key={note.id} className="bg-muted/50 rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm text-foreground">{note.title}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNote(note.id, note.audio_url, note.image_url)}
                          className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {note.content && (
                        <p className="text-sm text-foreground pl-6">{note.content}</p>
                      )}
                      
                      {note.audio_url && (
                        <div className="pl-6">
                          <audio controls className="w-full max-w-xs h-8">
                            <source src={note.audio_url} type="audio/webm" />
                            Seu navegador não suporta áudio.
                          </audio>
                        </div>
                      )}
                      
                      {note.image_url && (
                        <div className="pl-6">
                          <img 
                            src={note.image_url} 
                            alt="Anotação" 
                            className="max-w-xs rounded-lg border border-border"
                          />
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>

          {/* Relational Presence Map Tab - moved earlier in file */}

        </Tabs>
      </div>
    </div>
  );
};
