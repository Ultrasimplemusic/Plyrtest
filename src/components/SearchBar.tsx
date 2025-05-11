import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative max-w-md w-full"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-white placeholder-gray-400 transition-all duration-300"
          placeholder="Search for songs, artists or albums..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {searchQuery && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={clearSearch}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBar;