import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mic, Square, Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const LanguagePracticeTab = () => {
  const { toast } = useToast();
  const [noteText, setNoteText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      toast({ title: "Gravando áudio..." });
    } catch (error) {
      toast({ 
        title: "Erro ao acessar microfone", 
        description: "Permita o acesso ao microfone",
        variant: "destructive" 
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast({ title: "Gravação concluída!" });
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioBlob(file);
      toast({ title: "Áudio selecionado!" });
    }
  };

  const saveNote = async () => {
    if (!noteText.trim() && !audioBlob && !imageFile) {
      toast({ 
        title: "Adicione conteúdo", 
        description: "Texto, áudio ou imagem são necessários",
        variant: "destructive" 
      });
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      let audioUrl = null;
      let imageUrl = null;

      // Upload de áudio
      if (audioBlob) {
        const audioPath = `${user.id}/${Date.now()}.webm`;
        const { error: audioError } = await supabase.storage
          .from('map-audio')
          .upload(audioPath, audioBlob);
        
        if (audioError) throw audioError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('map-audio')
          .getPublicUrl(audioPath);
        audioUrl = publicUrl;
      }

      // Upload de imagem
      if (imageFile) {
        const imagePath = `${user.id}/${Date.now()}-${imageFile.name}`;
        const { error: imageError } = await supabase.storage
          .from('map-images')
          .upload(imagePath, imageFile);
        
        if (imageError) throw imageError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('map-images')
          .getPublicUrl(imagePath);
        imageUrl = publicUrl;
      }

      // Salvar no banco (sem coordenadas por enquanto - você pode adicionar seleção no mapa depois)
      const { error: dbError } = await supabase
        .from('map_pins')
        .insert({
          user_id: user.id,
          type: 'anotacao',
          title: 'Anotação Geral',
          content: noteText,
          latitude: 0, // Placeholder - adicionar seleção de mapa depois
          longitude: 0,
          audio_url: audioUrl,
          image_url: imageUrl
        });

      if (dbError) throw dbError;

      toast({ title: "Anotação salva com sucesso!" });
      
      // Limpar formulário
      setNoteText("");
      setAudioBlob(null);
      setImageFile(null);
      setImagePreview(null);
    } catch (error: any) {
      toast({ 
        title: "Erro ao salvar", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Criar Anotação</h2>
        
        {/* Texto */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">Texto da Anotação</label>
          <Textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Escreva sua anotação aqui..."
            className="min-h-[100px]"
          />
        </div>

        {/* Áudio */}
        <Card className="p-4 mb-4">
          <h3 className="text-sm font-medium mb-3">Áudio</h3>
          <div className="flex gap-2 mb-2">
            {!isRecording ? (
              <Button onClick={startRecording} variant="outline" size="sm">
                <Mic className="h-4 w-4 mr-2" />
                Gravar Áudio
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive" size="sm">
                <Square className="h-4 w-4 mr-2" />
                Parar Gravação
              </Button>
            )}
            
            <Button 
              onClick={() => fileInputRef.current?.click()} 
              variant="outline" 
              size="sm"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Áudio
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleAudioSelect}
              className="hidden"
            />
          </div>
          {audioBlob && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mic className="h-4 w-4" />
              <span>Áudio pronto para salvar</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setAudioBlob(null)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>

        {/* Imagem */}
        <Card className="p-4 mb-4">
          <h3 className="text-sm font-medium mb-3">Imagem</h3>
          <Button 
            onClick={() => imageInputRef.current?.click()} 
            variant="outline" 
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Selecionar Imagem
          </Button>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
          {imagePreview && (
            <div className="mt-3 relative">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="max-h-48 rounded-lg object-cover"
              />
              <Button 
                variant="destructive" 
                size="sm" 
                className="absolute top-2 right-2"
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>

        <Button onClick={saveNote} className="w-full">
          Salvar Anotação
        </Button>
      </div>
    </div>
  );
};
