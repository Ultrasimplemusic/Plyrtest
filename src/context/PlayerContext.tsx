import React, { createContext, useContext, useState, useEffect } from 'react';
import { Song } from '../types';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  recentlyPlayed: Song[];
  playSong: (song: Song) => void;
  togglePlay: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayerContext must be used within a PlayerProvider');
  }
  return context;
};

interface PlayerProviderProps {
  children: React.ReactNode;
  songs: Song[];
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children, songs }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);

  const playSong = (song: Song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      
      // Add to recently played
      setRecentlyPlayed(prev => {
        // Remove the song if it's already in the list
        const filtered = prev.filter(s => s.id !== song.id);
        // Add song to the beginning and limit to 20 songs
        return [song, ...filtered].slice(0, 20);
      });
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    if (!currentSong || songs.length === 0) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  };

  const playPreviousSong = () => {
    if (!currentSong || songs.length === 0) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[previousIndex]);
  };

  const value = {
    currentSong,
    isPlaying,
    recentlyPlayed,
    playSong,
    togglePlay,
    playNextSong,
    playPreviousSong,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};