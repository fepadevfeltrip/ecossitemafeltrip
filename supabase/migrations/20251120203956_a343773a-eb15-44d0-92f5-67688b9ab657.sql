-- Criar buckets de storage para áudio e imagens
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('map-audio', 'map-audio', false),
  ('map-images', 'map-images', true);

-- Políticas RLS para bucket de áudio
CREATE POLICY "Usuários podem fazer upload de seus próprios áudios"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'map-audio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Usuários podem ver seus próprios áudios"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'map-audio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Usuários podem deletar seus próprios áudios"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'map-audio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Políticas RLS para bucket de imagens (público para visualização)
CREATE POLICY "Usuários podem fazer upload de suas próprias imagens"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'map-images' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Qualquer pessoa pode ver imagens públicas"
ON storage.objects
FOR SELECT
USING (bucket_id = 'map-images');

CREATE POLICY "Usuários podem deletar suas próprias imagens"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'map-images' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Adicionar colunas para armazenar URLs de áudio e imagem nos pins
ALTER TABLE public.map_pins
ADD COLUMN audio_url text,
ADD COLUMN image_url text;