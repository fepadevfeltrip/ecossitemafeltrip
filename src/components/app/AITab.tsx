import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Globe, Podcast, Play, Map, Music } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const AITab = () => {
  const [showPodcasts, setShowPodcasts] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const podcasts = [
    { title: "Ep 1: Ocupar o Corpo", duration: "12 min" },
    { title: "Ep 2: O Outro e a Cidade", duration: "15 min" },
    { title: "Ep 3: Territórios Afetivos", duration: "18 min" },
  ];

  const playlist = [
    { title: "Alegria Interior", artist: "Relaxamento", duration: "8 min" },
    { title: "Ansiedade da Viagem", artist: "Meditação Guiada", duration: "12 min" },
    { title: "Conexão Urbana", artist: "Sons da Cidade", duration: "10 min" },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Central da IA Poética (Boba)</h2>
      
      <Card 
        className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary group"
        onClick={() => window.open("https://typebot.co/boba-x8s937m", "_blank")}
      >
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">Mapa de Presença Relacional</h3>
            <p className="text-sm text-muted-foreground">
              Iniciar meu Mapa de Presença Relacional
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 opacity-60">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-secondary/10">
            <Globe className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">Prática de Idioma Local</h3>
            <p className="text-sm text-muted-foreground">Simulação</p>
          </div>
        </div>
      </Card>

      <Card 
        className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-energy group"
        onClick={() => setShowPlaylist(true)}
      >
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-energy/10 group-hover:bg-energy/20 transition-colors">
            <Music className="h-6 w-6 text-energy" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">Playlist de Bem-Estar</h3>
            <p className="text-sm text-muted-foreground">Alegria Interior & Ansiedade da Viagem</p>
          </div>
        </div>
      </Card>

      <Card 
        className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-accent group"
        onClick={() => setShowPodcasts(true)}
      >
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Podcast className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">BobaCast</h3>
            <p className="text-sm text-muted-foreground">Ouvir o BobaCast</p>
          </div>
        </div>
      </Card>

      <Dialog open={showPodcasts} onOpenChange={setShowPodcasts}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Episódios do BobaCast</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {podcasts.map((podcast, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <div>
                  <p className="font-medium text-sm">{podcast.title}</p>
                  <p className="text-xs text-muted-foreground">{podcast.duration}</p>
                </div>
                <button className="p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors">
                  <Play className="h-4 w-4 text-primary-foreground" fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPlaylist} onOpenChange={setShowPlaylist}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Playlist de Bem-Estar</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {playlist.map((track, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <div>
                  <p className="font-medium text-sm">{track.title}</p>
                  <p className="text-xs text-muted-foreground">{track.artist} • {track.duration}</p>
                </div>
                <button className="p-2 rounded-full bg-energy hover:bg-energy/90 transition-colors">
                  <Play className="h-4 w-4 text-primary-foreground" fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
