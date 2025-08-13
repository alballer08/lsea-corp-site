
-- Add delete policy for admins (the foreign key constraint may already exist)
CREATE POLICY "Admins can delete users" ON public.users
  FOR DELETE 
  USING (public.is_admin(auth.uid()));

-- Try to update the foreign key constraint if it doesn't exist with CASCADE
DO $$
BEGIN
    -- Check if the constraint exists and doesn't have CASCADE
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'users_id_fkey' 
        AND table_name = 'users'
    ) THEN
        -- Drop and recreate with CASCADE
        ALTER TABLE public.users DROP CONSTRAINT users_id_fkey;
        ALTER TABLE public.users ADD CONSTRAINT users_id_fkey 
        FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
    END IF;
EXCEPTION 
    WHEN OTHERS THEN
        -- If there's an error, just add the constraint
        ALTER TABLE public.users ADD CONSTRAINT users_id_fkey 
        FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
END $$;
