import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Share2, Copy, Phone, MapPin, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const MapaSeguroTab = () => {
  const { toast } = useToast();
  const [reportMode, setReportMode] = useState<'live' | 'past' | null>(null);
  const [reportText, setReportText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  
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

  const handleShareWhatsApp = (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    const message = isLive 
      ? `🚨 Alerta de Segurança - Localização ao Vivo\n\nEstou compartilhando minha localização atual:\n${mockLocation.address}\n\nVeja no mapa: ${link}`
      : `⚠️ Relato de Insegurança\n\n${reportText}\n\nLocal: ${mockLocation.address}\n\nVer detalhes: ${link}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Abrindo WhatsApp",
      description: "Você pode escolher o contato para enviar o alerta.",
    });
  };

  const handleShareEmail = (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    const subject = isLive ? "🚨 Alerta de Segurança - Localização ao Vivo" : "⚠️ Relato de Insegurança";
    const body = isLive
      ? `Olá,\n\nEstou compartilhando minha localização atual por questões de segurança.\n\nEndereço: ${mockLocation.address}\n\nVeja no mapa: ${link}\n\nEnviado via Feltrip`
      : `Olá,\n\nGostaria de relatar uma situação de insegurança:\n\n${reportText}\n\nLocal: ${mockLocation.address}\n\nVer detalhes: ${link}\n\nEnviado via Feltrip`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Abrindo Email",
      description: "Preencha o destinatário e envie o alerta.",
    });
  };

  const handleShareSMS = (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    const message = isLive
      ? `🚨 Alerta: Estou em ${mockLocation.address}. Ver mapa: ${link}`
      : `⚠️ Insegurança em: ${mockLocation.address}. ${reportText}. Ver: ${link}`;
    
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
    
    toast({
      title: "Abrindo SMS",
      description: "Escolha o contato e envie o alerta.",
    });
  };

  const handleCopyLink = (isLive: boolean) => {
    const link = generateLocationLink(isLive);
    navigator.clipboard.writeText(link);
    
    toast({
      title: "Link Copiado!",
      description: "Cole o link onde preferir para compartilhar.",
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

  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Mapa de Segurança</h2>
          <p className="text-sm text-muted-foreground">
            Compartilhe sua localização e acesse números de emergência
          </p>
        </div>

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
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Compartilhar via:</p>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareWhatsApp(reportMode === 'live')}
                  className="gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareEmail(reportMode === 'live')}
                  className="gap-2"
                >
                  📧 Email
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShareSMS(reportMode === 'live')}
                  className="gap-2"
                >
                  💬 SMS
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyLink(reportMode === 'live')}
                  className="gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copiar Link
                </Button>
              </div>
              <Button 
                variant="default" 
                className="w-full gap-2" 
                onClick={() => handleWebShare(reportMode === 'live')}
              >
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
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
      </div>
    </div>
  );
};
