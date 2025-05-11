import React from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

interface HeaderProps {
  onSearch?: (query: string) => void;
  showSearch?: boolean;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  showSearch = false,
  title 
}) => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button 
            onClick={() => navigate(1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        {title && (
          <h1 className="text-2xl font-bold text-white ml-2">{title}</h1>
        )}
        
        {showSearch && (
          <div className="ml-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}
      </div>
      
      <div className="flex items-center">
        <button className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-white text-sm">
          <User size={16} />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Header;