import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Copy, Phone, MapPin, AlertCircle, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

export const MapaSeguroTab = () => {
  const { toast } = useToast();
  const [reportMode, setReportMode] = useState<'live' | 'past' | null>(null);
  const [reportText, setReportText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showEmergencyCall, setShowEmergencyCall] = useState(false);
  const [emergencyCallActive, setEmergencyCallActive] = useState(false);
  
  // Mock current location
  const mockLocation = {
    lat: -22.9068,
    lng: -43.1729,
    address: "Rua Exemplo, 123 - Copacabana, Rio de Janeiro"
  };

  // Emergency numbers by city (mock data - você pode adicionar IA depois)
  const emergencyNumbers = {
    "Rio de Janeiro": { police: "190", ambulance: "192", fire: "193" },
    "São Paulo": { police: "190", ambulance: "192", fire: "193" },
    "Belo Horizonte": { police: "190", ambulance: "192", fire: "193" },
  };

  const generateLocationLink = (isLive: boolean) => {
    const baseUrl = window.location.origin;
    const locationData = encodeURIComponent(JSON.stringify({
      lat: mockLocation.lat,
      lng: mockLocation.lng,
      address: mockLocation.address,
      timestamp: new Date().toISOString(),
      type: isLive ? 'live' : 'report',
      message: reportText
    }));
    return `${baseUrl}/safety-alert?data=${locationData}`;
  };

  const handleCopyLink = (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    navigator.clipboard.writeText(link);
    
    toast({
      title: "Link Copiado!",
      description: "Compartilhe com quem você confia.",
    });
  };

  const handleWebShare = async (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    const message = isLive 
      ? `🚨 Localização ao Vivo: ${mockLocation.address}`
      : `⚠️ Relato de Insegurança: ${reportText}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: isLive ? "Alerta de Segurança" : "Relato de Insegurança",
          text: message,
          url: link,
        });
        toast({
          title: "Compartilhado!",
          description: "Alerta enviado com sucesso.",
        });
      } catch (error) {
        console.log("Compartilhamento cancelado");
      }
    } else {
      handleCopyLink(isLive);
    }
  };

  const handleEmergencyCall = () => {
    setEmergencyCallActive(true);
    setShowEmergencyCall(true);
    
    // Simular chamada por 5 segundos
    setTimeout(() => {
      setEmergencyCallActive(false);
    }, 5000);

    toast({
      title: "Chamada de Emergência Ativada",
      description: "Conectando com sua rede de segurança...",
      variant: "destructive",
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Mapa de Segurança</h2>
          <p className="text-sm text-muted-foreground">
            Compartilhe sua localização e acesse ajuda imediata
          </p>
        </div>

        {/* Emergency Call Button - Destacado no topo */}
        <Card className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20">
          <div className="p-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <PhoneCall className={`h-8 w-8 text-destructive ${emergencyCallActive ? 'animate-pulse' : ''}`} />
              <h3 className="text-xl font-bold text-foreground">Chamada de Urgência</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Em situação de emergência? Acione sua rede de segurança instantaneamente. 
              Notificará RH, família e contatos de confiança.
            </p>
            <Button 
              size="lg" 
              variant="destructive" 
              className="w-full max-w-xs font-bold"
              onClick={handleEmergencyCall}
              disabled={emergencyCallActive}
            >
              {emergencyCallActive ? (
                <>🚨 Chamada Ativa...</>
              ) : (
                <>🆘 Acionar Urgência</>
              )}
            </Button>
          </div>
        </Card>

        {/* Mock Map */}
        <div className="bg-muted/20 rounded-lg border border-border overflow-hidden" style={{ height: '300px' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-50">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px)'
            }} />
            
            {/* Current location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            
            {/* Green pins (Safe zones) */}
            <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg" />
            <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg" />
            
            {/* Yellow pins (Attention zones) */}
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg" />
          </div>
        </div>

        {/* Current Location */}
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Sua Localização Atual</h3>
              <p className="text-sm text-muted-foreground">{mockLocation.address}</p>
            </div>
          </div>
        </Card>

        {/* Share Location Alert */}
        <Card className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-foreground">
            <AlertCircle className="h-5 w-5" />
            <h3 className="font-semibold">Enviar Alerta de Segurança</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant={reportMode === 'live' ? 'default' : 'outline'}
              onClick={() => setReportMode('live')}
              className="w-full"
            >
              📍 Localização ao Vivo
            </Button>
            <Button 
              variant={reportMode === 'past' ? 'default' : 'outline'}
              onClick={() => setReportMode('past')}
              className="w-full"
            >
              📝 Relatar Ponto
            </Button>
          </div>

          {reportMode === 'past' && (
            <Textarea
              placeholder="Descreva o que aconteceu neste local..."
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              rows={3}
            />
          )}

          {reportMode && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Compartilhar via:</p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2" 
                  onClick={() => handleCopyLink(reportMode === 'live')}
                >
                  <Copy className="h-4 w-4" />
                  Copiar Link
                </Button>
                <Button 
                  variant="default" 
                  className="flex-1 gap-2" 
                  onClick={() => handleWebShare(reportMode === 'live')}
                >
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Envie o link para quem você confia (WhatsApp, SMS, Email, etc)
              </p>
            </div>
          )}
        </Card>

        {/* Emergency Numbers */}
        <Card className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-foreground">
            <Phone className="h-5 w-5" />
            <h3 className="font-semibold">Números de Emergência</h3>
          </div>

          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione sua cidade" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(emergencyNumbers).map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedCity && emergencyNumbers[selectedCity as keyof typeof emergencyNumbers] && (
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">🚔 Polícia:</span>
                <a href={`tel:${emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].police}`} className="text-lg font-bold text-primary">
                  {emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].police}
                </a>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">🚑 SAMU:</span>
                <a href={`tel:${emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].ambulance}`} className="text-lg font-bold text-primary">
                  {emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].ambulance}
                </a>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">🚒 Bombeiros:</span>
                <a href={`tel:${emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].fire}`} className="text-lg font-bold text-primary">
                  {emergencyNumbers[selectedCity as keyof typeof emergencyNumbers].fire}
                </a>
              </div>
            </div>
          )}
        </Card>

        {/* Legend */}
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground">Legenda do Mapa</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full border border-white shadow" />
              <span className="text-sm text-foreground">Sua Localização</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full border border-white shadow" />
              <span className="text-sm text-foreground">Zonas de Acolhimento</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white shadow" />
              <span className="text-sm text-foreground">Zonas de Atenção</span>
            </div>
          </div>
        </Card>

        {/* Emergency Call Dialog */}
        <AlertDialog open={showEmergencyCall} onOpenChange={setShowEmergencyCall}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-destructive animate-pulse" />
                Chamada de Urgência Acionada
              </AlertDialogTitle>
              <AlertDialogDescription className="space-y-3 pt-2">
                <p className="font-semibold">Notificações enviadas para:</p>
                <div className="space-y-2 bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>RH da Empresa (gestor@empresa.com)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Família (contato@familia.com)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Contato de Emergência (+55 21 99999-9999)</span>
                  </div>
                </div>
                <p className="text-sm">
                  📍 <strong>Localização:</strong> {mockLocation.address}
                </p>
                <p className="text-xs text-muted-foreground">
                  Todos os contatos receberam sua localização ao vivo e podem rastrear você em tempo real.
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Entendido</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
