import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../types';

interface MusicCardProps {
  song: Song;
  isPlaying: boolean;
  onPlay: () => void;
  variant?: 'small' | 'medium' | 'large';
}

const MusicCard: React.FC<MusicCardProps> = ({ 
  song, 
  isPlaying, 
  onPlay,
  variant = 'medium'
}) => {
  const variantClasses = {
    small: 'w-40 h-40',
    medium: 'w-56 h-56',
    large: 'w-64 h-64',
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="group relative transition-all duration-300 rounded-lg overflow-hidden hover:shadow-xl">
      <div className={`relative ${variantClasses[variant]}`}>
        <img 
          src={song.cover} 
          alt={`${song.title} by ${song.artist}`}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onPlay}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black transition-transform duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-white truncate">{song.title}</h3>
        <p className="text-gray-400 text-sm truncate">{song.artist}</p>
        {variant !== 'small' && (
          <p className="text-gray-500 text-xs mt-1">{formatTime(song.duration)}</p>
        )}
      </div>
    </div>
  );
};

export default MusicCard;