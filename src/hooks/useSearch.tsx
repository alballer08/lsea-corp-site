
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SearchResult {
  id: string;
  page_title: string;
  page_url: string;
  heading: string | null;
  description: string | null;
}

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Special case: direct navigation result for "portfolio"
    if (query.trim().toLowerCase() === 'portfolio') {
      setResults([
        {
          id: 'portfolio',
          page_title: 'Portfolio',
          page_url: '/portfolio',
          heading: 'Our Portfolio',
          description: 'Explore our projects and case studies.'
        }
      ]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('id, page_title, page_url, heading, description')
        .or(`page_title.ilike.%${query}%, heading.ilike.%${query}%, description.ilike.%${query}%`);

      if (error) throw error;
      setResults(data || []);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, search };
};
