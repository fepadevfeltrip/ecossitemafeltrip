import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, MapPin } from "lucide-react";

interface Message {
  role: "ai" | "user";
  content: string;
}

interface MapNote {
  id: string;
  location: string;
  phrase: string;
  translation: string;
}

export const LanguagePracticeTab = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "ai", 
      content: "Olá! Sou sua professora de português. Vamos praticar com situações da vida real na cidade. O que você gostaria de fazer?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [mapNotes, setMapNotes] = useState<MapNote[]>([
    {
      id: "1",
      location: "Praia",
      phrase: "Vamos à praia?",
      translation: "Shall we go to the beach?"
    }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulated AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: "ai",
        content: getAIResponse(input)
      };
      setMessages(prev => [...prev, aiResponse]);

      // Add to map notes if location-based
      if (input.toLowerCase().includes("praia")) {
        const newNote: MapNote = {
          id: Date.now().toString(),
          location: "Praia",
          phrase: "Vamos à praia?",
          translation: "Shall we go to the beach?"
        };
        setMapNotes(prev => [...prev, newNote]);
      }
    }, 1000);

    setInput("");
  };

  const getAIResponse = (userInput: string) => {
    if (userInput.toLowerCase().includes("praia")) {
      return "Ótimo! 'Vamos à praia?' é uma frase muito útil! Note o uso de 'à' (preposição + artigo). Você também pode dizer: 'Quer ir à praia?' ou 'Vamos para a praia?'. Eu salvei isso no seu mapa!";
    }
    return "Interessante! Vamos praticar isso. Como você diria em português?";
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map Notes Section */}
      <div className="border-t border-border p-4 bg-card">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Anotações no Mapa</h3>
        </div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {mapNotes.map((note) => (
            <Card key={note.id} className="p-3 bg-background">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{note.location}</p>
                  <p className="text-sm font-medium text-foreground">{note.phrase}</p>
                  <p className="text-xs text-muted-foreground italic">{note.translation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-4 bg-card">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
