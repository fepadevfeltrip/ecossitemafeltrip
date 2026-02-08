
CREATE TABLE public.residente_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.residente_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join residente waitlist"
ON public.residente_waitlist
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view residente waitlist"
ON public.residente_waitlist
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM user_roles
  WHERE user_roles.user_id = auth.uid() AND user_roles.role = 'admin'::app_role
));
