import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Heart, Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { pt } from "date-fns/locale";

type ServicoType = "tutor-cultura" | "saude-mental";

export const ParceirosInternosTab = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<ServicoType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const servicos = [
    {
      id: "tutor-cultura" as ServicoType,
      title: "Tutor de Cultura",
      description: "Orientação cultural e adaptação ao novo país",
      icon: Brain,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      id: "saude-mental" as ServicoType,
      title: "Saúde Mental",
      description: "Suporte psicológico para expatriados",
      icon: Heart,
      color: "bg-pink-500/10 text-pink-600"
    }
  ];

  const handleSchedule = () => {
    if (!selectedDate || !notes.trim()) {
      toast({
        title: "Preencha todos os campos",
        description: "Selecione uma data e descreva o motivo da consulta",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Agendamento solicitado!",
      description: `Sua consulta para ${selectedDate.toLocaleDateString('pt-BR')} foi solicitada. Você receberá uma confirmação em breve.`
    });

    setShowDialog(false);
    setSelectedDate(undefined);
    setNotes("");
    setSelectedService(null);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Parceiros Internos</h2>
          <p className="text-muted-foreground text-sm">
            Agende consultas com nossos especialistas
          </p>
        </div>

        <div className="grid gap-4">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <Card key={servico.id} className="p-6">
                <div className="flex gap-4">
                  <div className={`h-14 w-14 rounded-xl ${servico.color} flex items-center justify-center shrink-0`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{servico.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {servico.description}
                    </p>
                    <Dialog open={showDialog && selectedService === servico.id} onOpenChange={(open) => {
                      setShowDialog(open);
                      if (open) setSelectedService(servico.id);
                    }}>
                      <DialogTrigger asChild>
                        <Button className="w-full sm:w-auto">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Agendar Consulta
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Agendar {servico.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Selecione uma data
                            </label>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              locale={pt}
                              className="rounded-md border"
                              disabled={(date) => date < new Date()}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              Motivo da consulta
                            </label>
                            <Textarea
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              placeholder="Descreva brevemente o que você gostaria de abordar..."
                              rows={4}
                            />
                          </div>
                          <Button onClick={handleSchedule} className="w-full">
                            Confirmar Agendamento
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground">
            <strong>Como funciona:</strong> Após solicitar o agendamento, nossa equipe entrará em contato 
            para confirmar o horário e fornecer instruções para a consulta online.
          </p>
        </Card>
      </div>
    </div>
  );
};