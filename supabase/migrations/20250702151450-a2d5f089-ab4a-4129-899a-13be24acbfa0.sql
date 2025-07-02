-- Create storage policies for public access to shared files
-- First, ensure the bucket is public
UPDATE storage.buckets SET public = true WHERE id = 'user-files';

-- Allow anyone to download files from the user-files bucket
CREATE POLICY "Allow public download of files" ON storage.objects
  FOR SELECT 
  USING (bucket_id = 'user-files');

-- Allow public download access specifically
CREATE POLICY "Allow public file downloads" ON storage.objects
  FOR SELECT 
  USING (bucket_id = 'user-files');