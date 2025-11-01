-- Dropar trigger e função, depois recriar com search_path correto
DROP TRIGGER IF EXISTS update_map_pins_updated_at ON public.map_pins;
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Recriar função com search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$;

-- Recriar trigger
CREATE TRIGGER update_map_pins_updated_at
  BEFORE UPDATE ON public.map_pins
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();