import { useState, useEffect } from "react";
import { Plus, MapPin, X, BookOpen, FileText } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NoteType = "idioma" | "vida" | "proposicoes";

interface Note {
  x: number;
  y: number;
  type: NoteType;
  title: string;
  content: string;
}

export const MapTab = () => {
  const [activeTab, setActiveTab] = useState<NoteType>("idioma");
  const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const [pins, setPins] = useState<any[]>([]);
  const [showNewPinDialog, setShowNewPinDialog] = useState(false);
  const [newPinData, setNewPinData] = useState<{
    latitude: number;
    longitude: number;
    cityName?: string;
    countryName?: string;
  } | null>(null);
  const [newPinTitle, setNewPinTitle] = useState("");
  const [newPinContent, setNewPinContent] = useState("");

  useEffect(() => {
    loadPins();
  }, []);

  const loadPins = async () => {
    try {
      const { data, error } = await supabase
        .from("map_pins")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPins(data || []);
    } catch (error) {
      console.error("Erro ao carregar pins:", error);
      toast.error("Erro ao carregar pins do mapa");
    }
  };

  const handleMapClick = (lat: number, lng: number, cityName?: string, countryName?: string) => {
    setNewPinData({ latitude: lat, longitude: lng, cityName, countryName });
    setNewPinTitle(cityName || "");
    setNewPinContent("");
    setShowNewPinDialog(true);
  };

  const handleSavePin = async () => {
    if (!newPinData || !newPinTitle.trim() || !newPinContent.trim()) {
      toast.error("Preencha o título e o conteúdo");
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Você precisa estar logado");
        return;
      }

      const { error } = await supabase.from("map_pins").insert({
        user_id: user.id,
        type: activeTab,
        title: newPinTitle,
        content: newPinContent,
        latitude: newPinData.latitude,
        longitude: newPinData.longitude,
        city_name: newPinData.cityName,
        country_name: newPinData.countryName,
      });

      if (error) throw error;

      toast.success("Pin adicionado com sucesso!");
      setShowNewPinDialog(false);
      setNewPinData(null);
      setNewPinTitle("");
      setNewPinContent("");
      loadPins();
    } catch (error) {
      console.error("Erro ao salvar pin:", error);
      toast.error("Erro ao salvar pin");
    }
  };

  const filteredPins = pins.filter(pin => pin.type === activeTab);

  const getButtonIcon = () => {
    switch (activeTab) {
      case "idioma":
        return <BookOpen className="h-6 w-6" />;
      case "vida":
        return <FileText className="h-6 w-6" />;
      case "proposicoes":
        return <Plus className="h-6 w-6" />;
      default:
        return <Plus className="h-6 w-6" />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto relative">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as NoteType)} className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-auto">
          <TabsTrigger value="idioma" className="text-xs sm:text-sm px-2 py-3 whitespace-normal leading-tight">
            Anotações Aulas de Idioma
          </TabsTrigger>
          <TabsTrigger value="vida" className="text-xs sm:text-sm px-2 py-3 whitespace-normal leading-tight">
            Diário de Bordo
          </TabsTrigger>
          <TabsTrigger value="proposicoes" className="text-xs sm:text-sm px-2 py-3 whitespace-normal leading-tight">
            Proposições Poéticas
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-0 h-full">
          <div className="w-full h-full" style={{ height: '600px', position: 'relative' }}>
            <InteractiveMap
              onMapClick={handleMapClick}
              pins={filteredPins}
              onPinClick={setSelectedNote}
            />
          </div>
        </TabsContent>
      </Tabs>

      {selectedNote && (
        <Dialog open={!!selectedNote} onOpenChange={() => setSelectedNote(null)}>
          <DialogContent className="max-w-[90%] sm:max-w-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={() => setSelectedNote(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <DialogHeader>
              <DialogTitle>{selectedNote.title}</DialogTitle>
            </DialogHeader>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">
              {selectedNote.content}
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={showNewPinDialog} onOpenChange={setShowNewPinDialog}>
        <DialogContent className="max-w-[90%] sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {activeTab === "idioma" ? "Anotação de Aula" : 
               activeTab === "vida" ? "Diário de Bordo" : 
               "Proposição Poética"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Título/Local</label>
              <input
                type="text"
                value={newPinTitle}
                onChange={(e) => setNewPinTitle(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder={newPinData?.cityName || "Nome do local"}
              />
            </div>
            <Textarea 
              value={newPinContent}
              onChange={(e) => setNewPinContent(e.target.value)}
              placeholder={
                activeTab === "idioma" ? "Vocabulário e expressões aprendidas..." :
                activeTab === "vida" ? "O que você sentiu/percebeu neste local?" :
                "Proposição poética para este lugar..."
              }
              rows={6}
              className="resize-none"
            />
            <Button onClick={handleSavePin} className="w-full">
              Salvar Pin
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
