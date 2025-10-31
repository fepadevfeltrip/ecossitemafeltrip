import { useState } from "react";
import { 
  GraduationCap, 
  Home, 
  Calculator, 
  Scale, 
  Languages, 
  FileText, 
  Compass, 
  BookOpen,
  Check,
  X
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  status: "available" | "selected" | "in-progress" | "completed" | "rated";
  rating?: number;
  feedback?: string;
}

export const ConciergeServicesMenu = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "pedagogo",
      icon: GraduationCap,
      title: "Pedagogo - Conselheiro Educacional",
      description: "Visitas em escolas locais, entendimento das demandas da família e acompanhamento da adaptação",
      status: "available"
    },
    {
      id: "imoveis",
      icon: Home,
      title: "Consultor Imobiliário",
      description: "Apoio na aquisição e/ou aluguel de moradia",
      status: "available"
    },
    {
      id: "contabil",
      icon: Calculator,
      title: "Consultor Contábil",
      description: "Assessoria contábil e fiscal para expatriados",
      status: "available"
    },
    {
      id: "juridico",
      icon: Scale,
      title: "Consultor Jurídico",
      description: "Orientação jurídica e suporte legal",
      status: "available"
    },
    {
      id: "linguistico",
      icon: Languages,
      title: "Apoio Linguístico",
      description: "Suporte no aprendizado e prática do idioma local",
      status: "available"
    },
    {
      id: "tradutor",
      icon: FileText,
      title: "Tradutor Juramentado",
      description: "Tradução oficial de documentos",
      status: "available"
    },
    {
      id: "cultural",
      icon: Compass,
      title: "Experiências Culturais e de Lazer",
      description: "Tour e local culture experience",
      status: "available"
    },
    {
      id: "pedagogico",
      icon: BookOpen,
      title: "Consultor Pedagógico",
      description: "Orientação educacional (nível superior e básico)",
      status: "available"
    }
  ]);

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [activeTab, setActiveTab] = useState<"available" | "my-services">("available");

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    if (service.status === "available") {
      setShowConfirmDialog(true);
    } else if (service.status === "completed") {
      setShowRatingDialog(true);
    }
  };

  const handleConfirmService = (confirm: boolean) => {
    if (confirm && selectedService) {
      setServices(services.map(s => 
        s.id === selectedService.id 
          ? { ...s, status: "selected" }
          : s
      ));
      setActiveTab("my-services");
    }
    setShowConfirmDialog(false);
    setSelectedService(null);
  };

  const handleStartService = (serviceId: string) => {
    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, status: "in-progress" }
        : s
    ));
  };

  const handleCompleteService = (serviceId: string) => {
    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, status: "completed" }
        : s
    ));
  };

  const handleSubmitRating = () => {
    if (selectedService) {
      setServices(services.map(s => 
        s.id === selectedService.id 
          ? { ...s, status: "rated", rating, feedback }
          : s
      ));
    }
    setShowRatingDialog(false);
    setSelectedService(null);
    setRating(0);
    setFeedback("");
  };

  const getStatusBadge = (status: Service["status"]) => {
    switch (status) {
      case "available":
        return <Badge variant="outline">Disponível</Badge>;
      case "selected":
        return <Badge className="bg-blue-500">Selecionado</Badge>;
      case "in-progress":
        return <Badge className="bg-yellow-500">Em Andamento</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Concluído</Badge>;
      case "rated":
        return <Badge className="bg-purple-500">Avaliado</Badge>;
    }
  };

  const availableServices = services.filter(s => s.status === "available");
  const myServices = services.filter(s => s.status !== "available");

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center space-y-1 sm:space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Feltrip Concierge</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Serviços especializados para sua jornada</p>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available" className="text-xs sm:text-sm">Serviços Disponíveis</TabsTrigger>
          <TabsTrigger value="my-services" className="text-xs sm:text-sm">Meus Serviços ({myServices.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4 mt-4">
          {availableServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="p-3 sm:p-4 cursor-pointer hover:shadow-lg transition-all hover:border-primary"
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{service.description}</p>
                      </div>
                      <div className="shrink-0">
                        {getStatusBadge(service.status)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="my-services" className="space-y-4 mt-4">
          {myServices.length === 0 ? (
            <Card className="p-6 sm:p-8 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">Nenhum serviço selecionado ainda</p>
            </Card>
          ) : (
            myServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="p-3 sm:p-4"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/10 shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base text-foreground">{service.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                        <div className="shrink-0">
                          {getStatusBadge(service.status)}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.status === "selected" && (
                          <Button 
                            size="sm" 
                            className="text-xs sm:text-sm"
                            onClick={() => handleStartService(service.id)}
                          >
                            Iniciar Serviço
                          </Button>
                        )}
                        {service.status === "in-progress" && (
                          <Button 
                            size="sm"
                            className="text-xs sm:text-sm"
                            onClick={() => handleCompleteService(service.id)}
                          >
                            Marcar como Concluído
                          </Button>
                        )}
                        {service.status === "completed" && (
                          <Button 
                            size="sm"
                            className="text-xs sm:text-sm"
                            onClick={() => handleServiceClick(service)}
                          >
                            Avaliar Serviço
                          </Button>
                        )}
                        {service.status === "rated" && service.rating && (
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            ⭐ {service.rating}/5
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </TabsContent>
      </Tabs>

      {/* Confirm Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-[90vw] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">Deseja contratar este serviço?</DialogTitle>
            <DialogDescription className="text-sm">
              {selectedService?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {selectedService?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                className="flex-1 text-xs sm:text-sm"
                onClick={() => handleConfirmService(false)}
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Não, obrigado
              </Button>
              <Button 
                className="flex-1 text-xs sm:text-sm"
                onClick={() => handleConfirmService(true)}
              >
                <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Sim, quero este serviço
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rating Dialog */}
      <Dialog open={showRatingDialog} onOpenChange={setShowRatingDialog}>
        <DialogContent className="max-w-[90vw] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">Avaliar Serviço</DialogTitle>
            <DialogDescription className="text-sm">
              {selectedService?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-xs sm:text-sm font-medium mb-2 block">Como foi sua experiência?</label>
              <div className="flex gap-1 sm:gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl sm:text-3xl transition-all ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-medium mb-2 block">Comentários (opcional)</label>
              <Textarea 
                placeholder="Compartilhe sua experiência..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="text-sm"
              />
            </div>

            <Button 
              className="w-full text-sm"
              onClick={handleSubmitRating}
              disabled={rating === 0}
            >
              Enviar Avaliação
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
