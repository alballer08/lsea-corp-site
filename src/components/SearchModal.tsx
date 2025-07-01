
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { results, loading, search } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [query]);

  const handleResultClick = (url: string) => {
    navigate(url);
    window.scrollTo(0, 0);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="flex items-center p-4 border-b">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search website..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button onClick={onClose} className="ml-3 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {loading && (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          )}
          
          {!loading && query && results.length === 0 && (
            <div className="p-4 text-center text-gray-500">No results found</div>
          )}
          
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result.page_url)}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
            >
              <h3 className="font-semibold text-blue-600">{result.page_title}</h3>
              {result.heading && (
                <p className="text-sm font-medium text-gray-700 mt-1">{result.heading}</p>
              )}
              {result.description && (
                <p className="text-sm text-gray-600 mt-1">{result.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
