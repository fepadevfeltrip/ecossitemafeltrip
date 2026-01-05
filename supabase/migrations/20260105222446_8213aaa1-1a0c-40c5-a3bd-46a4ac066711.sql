-- Remove the public SELECT policy that exposes email addresses
DROP POLICY IF EXISTS "Anyone can validate invites" ON public.invites;

-- Create a secure function to validate invite codes without exposing data
CREATE OR REPLACE FUNCTION public.validate_invite_code(invite_code text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  invite_record RECORD;
BEGIN
  -- Check if invite exists and is valid (without exposing email)
  SELECT id, status, expires_at
  INTO invite_record
  FROM public.invites
  WHERE code = invite_code
    AND status = 'pending'
    AND expires_at > timezone('utc'::text, now())
  LIMIT 1;

  IF invite_record.id IS NULL THEN
    RETURN jsonb_build_object('valid', false, 'message', 'Invalid or expired invite code');
  END IF;

  RETURN jsonb_build_object('valid', true, 'invite_id', invite_record.id);
END;
$$;

-- Create a secure function to use/redeem an invite
CREATE OR REPLACE FUNCTION public.redeem_invite(invite_code text, redeeming_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  invite_record RECORD;
BEGIN
  -- Find and lock the invite
  SELECT id, status, expires_at, email
  INTO invite_record
  FROM public.invites
  WHERE code = invite_code
    AND status = 'pending'
    AND expires_at > timezone('utc'::text, now())
  FOR UPDATE
  LIMIT 1;

  IF invite_record.id IS NULL THEN
    RETURN jsonb_build_object('success', false, 'message', 'Invalid or expired invite code');
  END IF;

  -- Mark invite as used
  UPDATE public.invites
  SET status = 'used',
      used_by = redeeming_user_id,
      used_at = timezone('utc'::text, now())
  WHERE id = invite_record.id;

  RETURN jsonb_build_object('success', true, 'invite_id', invite_record.id);
END;
$$;

-- Grant execute permission to authenticated and anonymous users for validation only
GRANT EXECUTE ON FUNCTION public.validate_invite_code(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.redeem_invite(text, uuid) TO authenticated;