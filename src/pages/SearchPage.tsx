import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MusicGrid from '../components/MusicGrid';
import { searchSongs } from '../data/mockData';
import { Song } from '../types';

interface SearchPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ currentSong, isPlaying, onPlaySong }) => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
    if (query) {
      const results = searchSongs(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const results = searchSongs(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} showSearch title="Search" />
      
      <div className="px-6 py-4">
        {searchQuery ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-white">
              Search results for: "{searchQuery}"
            </h1>
            
            {searchResults.length > 0 ? (
              <MusicGrid
                songs={searchResults}
                currentSong={currentSong}
                isPlaying={isPlaying}
                onPlaySong={onPlaySong}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-gray-500 mt-2">Try a different search term or browse categories</p>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <h1 className="text-2xl font-bold mb-2 text-white">Search for music</h1>
            <p className="text-gray-400">Search for songs, artists, or albums</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;