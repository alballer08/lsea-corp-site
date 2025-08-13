-- Update the function to bypass RLS on the files table
CREATE OR REPLACE FUNCTION public.get_shared_file_data(link_token text)
RETURNS TABLE (
  file_id uuid,
  filename text,
  original_name text,
  file_size bigint,
  storage_path text,
  expires_at timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
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
END;
$$;