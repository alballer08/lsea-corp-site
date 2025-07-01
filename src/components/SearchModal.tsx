
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-start justify-center pt-20"
      onClick={handleOverlayClick}
      style={{ isolation: 'isolate' }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden border border-gray-200 relative z-[10000]">
        <div className="flex items-center p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <Search className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search website..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-lg bg-transparent text-gray-900 placeholder-gray-500 font-medium"
            autoFocus
            style={{ caretColor: '#3b82f6' }}
          />
          <button 
            onClick={onClose} 
            className="ml-3 text-gray-400 hover:text-gray-600 flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-h-80 overflow-y-auto bg-white">
          {loading && (
            <div className="p-6 text-center">
              <div className="inline-flex items-center text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Searching...
              </div>
            </div>
          )}
          
          {!loading && query && results.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="font-medium">No results found for "{query}"</p>
              <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
            </div>
          )}
          
          {!loading && !query && (
            <div className="p-6 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="font-medium">Start typing to search</p>
              <p className="text-sm text-gray-400 mt-1">Find content across our website</p>
            </div>
          )}
          
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result.page_url)}
              className="p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-25 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all duration-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-blue-600 hover:text-blue-800 transition-colors text-base">
                {result.page_title}
              </h3>
              {result.heading && (
                <p className="text-sm font-medium text-gray-700 mt-1">{result.heading}</p>
              )}
              {result.description && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">{result.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
