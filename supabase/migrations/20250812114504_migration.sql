-- Allow public access to shared_links for file sharing
CREATE POLICY "Allow public access to valid shared links" ON public.shared_links
  FOR SELECT 
  USING (expires_at > now());

-- Allow public read access to storage for shared files
INSERT INTO storage.buckets (id, name, public) VALUES ('user-files', 'user-files', true)
ON CONFLICT (id) DO UPDATE SET public = true;