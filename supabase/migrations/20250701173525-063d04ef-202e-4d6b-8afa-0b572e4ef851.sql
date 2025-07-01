
-- First, let's drop the problematic RLS policies that are causing infinite recursion
DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
DROP POLICY IF EXISTS "Admins can insert users" ON public.users;

-- Create a security definer function to check if a user is admin
-- This bypasses RLS and prevents recursion
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.users 
    WHERE id = user_id AND role = 'admin'
  );
$$;

-- Now create new policies using the security definer function
CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT 
  WITH CHECK (public.is_admin(auth.uid()));
