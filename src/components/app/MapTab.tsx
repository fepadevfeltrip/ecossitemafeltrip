import { useState } from "react";
import { Plus, MapPin, X } from "lucide-react";
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
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [notes] = useState<Array<Note>>([
    { 
      x: 30, 
      y: 40, 
      type: "idioma",
      title: "Mercado Local",
      content: "Vocabulário do Mercado:\n\n🍎 Maçã - Apple\n🥕 Cenoura - Carrot\n🥖 Pão - Bread\n🧀 Queijo - Cheese\n🥩 Carne - Meat\n🐟 Peixe - Fish\n🥬 Alface - Lettuce\n🍅 Tomate - Tomato\n\nFrases úteis:\n'Quanto custa?' - How much?\n'Eu quero comprar...' - I want to buy..."
    },
    { 
      x: 60, 
      y: 25, 
      type: "vida",
      title: "Rua Principal",
      content: "I loved this street, I need to tell the kids that I'm coming back here with them!"
    },
    { 
      x: 45, 
      y: 70, 
      type: "idioma",
      title: "Cafeteria",
      content: "Expressões do Café:\n\n☕ Café - Coffee\n🥐 Croissant - Croissant\n🍰 Bolo - Cake\n🧃 Suco - Juice\n\n'Um café, por favor' - One coffee, please\n'A conta, por favor' - The bill, please"
    },
    {
      x: 50,
      y: 45,
      type: "proposicoes",
      title: "Praça Paris",
      content: "I chose to do this at Praça Paris. I felt vulnerable...\n\nProposition by Boba:\n\nWalk through the square as if the ground were remembering you before you were born. Let your steps be hesitant, honest — not graceful. Touch a tree or a bench and whisper your name to it, just once, like a secret. Stay there until the air stops judging you. Then, leave a tiny gesture behind — a pebble turned, a leaf moved — so the city knows you were real.\n\nMap of Relational Presence"
    },
  ]);

  const pillars = ["Corpo", "Território", "Identidade", "O Outro", "Espaço"];

  const filteredNotes = notes.filter(note => note.type === activeTab);

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
        
        <TabsContent value={activeTab} className="mt-0">
          <div className="relative h-full min-h-[600px] bg-gradient-to-br from-muted to-background">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="hsl(var(--primary))" opacity="0.1"/>
            <path d="M0,70 Q25,60 50,70 T100,70" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none"/>
            <circle cx="20" cy="30" r="2" fill="hsl(var(--accent))"/>
            <circle cx="80" cy="45" r="2" fill="hsl(var(--secondary))"/>
          </svg>
        </div>
        
            {filteredNotes.map((note, index) => (
              <button
                key={index} 
                className="absolute cursor-pointer transition-transform hover:scale-110"
                style={{ left: `${note.x}%`, top: `${note.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => setSelectedNote(note)}
              >
                <MapPin className="h-8 w-8 text-energy drop-shadow-lg animate-bounce" fill="hsl(var(--energy))" />
              </button>
            ))}
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

      <Dialog>
        <DialogTrigger asChild>
          <Button 
            size="lg"
            className="fixed bottom-32 right-6 h-14 w-14 rounded-full shadow-xl bg-energy hover:bg-energy/90"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nova Nota de Presença</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea 
              placeholder="O que você sentiu/percebeu neste local?" 
              rows={4}
              className="resize-none"
            />
            <div className="space-y-3">
              <p className="text-sm font-medium">Pilares Relacionais:</p>
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-center space-x-2">
                  <Checkbox id={pillar} />
                  <label htmlFor={pillar} className="text-sm cursor-pointer">{pillar}</label>
                </div>
              ))}
            </div>
            <Button className="w-full">Salvar no Diário</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
