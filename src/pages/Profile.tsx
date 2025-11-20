import { User, Users, MessageSquare, Calendar, MapPin, Mail, Phone, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function Profile() {
  const { toast } = useToast();

  // Mock user data
  const userData = {
    name: "Ana Silva",
    email: "ana.silva@empresa.com",
    role: "Colaborador",
    company: "Tech Corp Brasil",
    location: "Lisboa, Portugal",
    joinedDate: "Janeiro 2024",
    phone: "+351 912 345 678",
  };

  // Mock family data
  const familyMembers = [
    { name: "Carlos Silva", relation: "Cônjuge", age: 35 },
    { name: "Maria Silva", relation: "Filha", age: 8 },
    { name: "Pedro Silva", relation: "Filho", age: 5 },
  ];

  // Mock radar data (5 pillars)
  const radarData = [
    { pillar: "Bem-estar", value: 75 },
    { pillar: "Idioma", value: 60 },
    { pillar: "Cultura", value: 80 },
    { pillar: "Segurança", value: 85 },
    { pillar: "Conexão", value: 70 },
  ];

  const handleCommunityClick = (feature: string) => {
    toast({
      title: "Em Breve! 🚀",
      description: `${feature} estará disponível em breve.`,
    });
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* Header Profile Card */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-4 border-background shadow-lg">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                {userData.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">{userData.name}</h1>
              <p className="text-sm text-muted-foreground">{userData.role}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="gap-1">
                  <MapPin className="h-3 w-3" />
                  {userData.location}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Desde {userData.joinedDate}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6 pb-24">
        {/* Contact Info */}
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Informações de Contato
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{userData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{userData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>{userData.company}</span>
            </div>
          </div>
        </Card>

        {/* Status Atual - 5 Pillars */}
        <Card className="p-4 space-y-4">
          <h3 className="font-semibold text-foreground">Meu Status Atual</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="pillar" 
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                />
                <Radar
                  name="Status"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Baseado nas suas interações nos 5 pilares do Feltrip
          </p>
        </Card>

        {/* Family Section */}
        <Card className="p-4 space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Minha Família
          </h3>
          <div className="space-y-3">
            {familyMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.relation}</p>
                  </div>
                </div>
                <Badge variant="secondary">{member.age} anos</Badge>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            + Adicionar Membro
          </Button>
        </Card>

        <Separator />

        {/* Community Section Preview (Coming Soon) */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-lg">Comunidade</h3>
          <p className="text-sm text-muted-foreground">
            Conecte-se com outros expatriados e famílias da sua empresa
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Card 
              className="p-4 space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => handleCommunityClick("Mural da Empresa")}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Mural</p>
              <p className="text-xs text-muted-foreground">Novidades e posts</p>
              <Badge variant="secondary" className="text-xs">Em breve</Badge>
            </Card>

            <Card 
              className="p-4 space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => handleCommunityClick("Diretório de Colegas")}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Diretório</p>
              <p className="text-xs text-muted-foreground">Encontre colegas</p>
              <Badge variant="secondary" className="text-xs">Em breve</Badge>
            </Card>

            <Card 
              className="p-4 space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => handleCommunityClick("Grupos de Afinidade")}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Grupos</p>
              <p className="text-xs text-muted-foreground">Por cidade/interesse</p>
              <Badge variant="secondary" className="text-xs">Em breve</Badge>
            </Card>

            <Card 
              className="p-4 space-y-2 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => handleCommunityClick("Banco de Dicas")}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Dicas</p>
              <p className="text-xs text-muted-foreground">Dicas práticas</p>
              <Badge variant="secondary" className="text-xs">Em breve</Badge>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
