import { useState } from "react";
import { Plus, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export const MapTab = () => {
  const [notes, setNotes] = useState<Array<{x: number, y: number}>>([
    { x: 30, y: 40 },
    { x: 60, y: 25 },
    { x: 45, y: 70 },
  ]);

  const pillars = ["Corpo", "Território", "Identidade", "O Outro", "Espaço"];

  return (
    <div className="flex-1 overflow-y-auto relative">
      <div className="relative h-full min-h-[600px] bg-gradient-to-br from-muted to-background">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="hsl(var(--primary))" opacity="0.1"/>
            <path d="M0,70 Q25,60 50,70 T100,70" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none"/>
            <circle cx="20" cy="30" r="2" fill="hsl(var(--accent))"/>
            <circle cx="80" cy="45" r="2" fill="hsl(var(--secondary))"/>
          </svg>
        </div>
        
        {notes.map((note, index) => (
          <div 
            key={index} 
            className="absolute"
            style={{ left: `${note.x}%`, top: `${note.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <MapPin className="h-8 w-8 text-energy drop-shadow-lg animate-bounce" fill="hsl(var(--energy))" />
          </div>
        ))}
      </div>

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
