
-- Create users table for authentication
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create files table for file storage
CREATE TABLE IF NOT EXISTS public.files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  content_type TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create shared_links table for temporary file sharing
CREATE TABLE IF NOT EXISTS public.shared_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_id UUID REFERENCES public.files(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create website_content table for search functionality
CREATE TABLE IF NOT EXISTS public.website_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_title TEXT NOT NULL,
  page_url TEXT NOT NULL,
  content_type TEXT NOT NULL,
  heading TEXT,
  description TEXT,
  keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shared_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for files table
CREATE POLICY "Users can view own files" ON public.files
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert own files" ON public.files
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own files" ON public.files
  FOR DELETE USING (user_id = auth.uid());

-- RLS Policies for shared_links table
CREATE POLICY "Users can view own shared links" ON public.shared_links
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.files 
      WHERE files.id = shared_links.file_id AND files.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create shared links for own files" ON public.shared_links
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.files 
      WHERE files.id = shared_links.file_id AND files.user_id = auth.uid()
    )
  );

-- RLS Policies for website_content table (public read)
CREATE POLICY "Anyone can view website content" ON public.website_content
  FOR SELECT USING (true);

-- Insert sample website content for search
INSERT INTO public.website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('Home', '/', 'page', 'Welcome to LSEA Corporation', 'Professional engineering services with technical expertise and total commitment to quality', ARRAY['engineering', 'professional', 'services', 'LSEA']),
('About', '/about', 'page', 'About Us', 'Learn about our story, mission, and technical expertise', ARRAY['about', 'company', 'mission', 'expertise']),
('Services', '/services', 'page', 'Our Services', 'Comprehensive engineering services including structural, civil, mechanical, and electrical engineering', ARRAY['services', 'engineering', 'structural', 'civil', 'mechanical', 'electrical']),
('Portfolio', '/portfolio', 'page', 'Our Portfolio', 'Showcase of our completed projects and engineering solutions', ARRAY['portfolio', 'projects', 'work', 'solutions']),
('Offices', '/offices', 'page', 'Our Offices', 'Find our office locations across multiple states', ARRAY['offices', 'locations', 'contact', 'addresses']),
('Careers', '/careers', 'page', 'Career Opportunities', 'Join our team of professional engineers and technical experts', ARRAY['careers', 'jobs', 'employment', 'opportunities']),
('Contact', '/contact', 'page', 'Contact Us', 'Get in touch with our team for your engineering needs', ARRAY['contact', 'phone', 'email', 'address']);

-- Create storage bucket for files
INSERT INTO storage.buckets (id, name, public) VALUES ('user-files', 'user-files', false);

-- Storage policies
CREATE POLICY "Users can upload own files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'user-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view own files" ON storage.objects
  FOR SELECT USING (bucket_id = 'user-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete own files" ON storage.objects
  FOR DELETE USING (bucket_id = 'user-files' AND auth.uid()::text = (storage.foldername(name))[1]);
