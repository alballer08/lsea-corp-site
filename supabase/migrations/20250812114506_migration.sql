-- Remove the conflicting RLS policy that requires authentication for shared links
DROP POLICY IF EXISTS "Users can view own shared links" ON public.shared_links;

-- Create a function to get shared link data without RLS restrictions
CREATE OR REPLACE FUNCTION public.get_shared_file_data(link_token text)
RETURNS TABLE (
  file_id uuid,
  filename text,
  original_name text,
  file_size bigint,
  storage_path text,
  expires_at timestamp with time zone
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    f.id as file_id,
    f.filename,
    f.original_name,
    f.file_size,
    f.storage_path,
    sl.expires_at
  FROM shared_links sl
  JOIN files f ON f.id = sl.file_id
  WHERE sl.token = link_token 
    AND sl.expires_at > now();
$$;