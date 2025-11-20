-- Remover constraint antiga e criar nova com 'anotacao' incluído
ALTER TABLE public.map_pins 
DROP CONSTRAINT IF EXISTS map_pins_type_check;

ALTER TABLE public.map_pins 
ADD CONSTRAINT map_pins_type_check 
CHECK (type IN ('idioma', 'vida', 'proposicoes', 'anotacao'));