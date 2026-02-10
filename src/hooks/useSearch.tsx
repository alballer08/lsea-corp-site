
import { useState, useCallback } from 'react';
import { searchLocal, SearchItem } from '@/data/searchDatabase';

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

  const search = useCallback((query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Simulate a small delay to provide feedback
    setLoading(true);
    setTimeout(() => {
      const searchResults = searchLocal(query);
      setResults(
        searchResults.map((item: SearchItem) => ({
          id: item.id,
          page_title: item.page_title,
          page_url: item.page_url,
          heading: item.heading,
          description: item.description,
        }))
      );
      setLoading(false);
    }, 50);
  }, []);

  return { results, loading, search };
};
