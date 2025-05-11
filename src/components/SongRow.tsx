import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../types';

interface SongRowProps {
  song: Song;
  index: number;
  isPlaying: boolean;
  isCurrentSong: boolean;
  onPlay: () => void;
}

const SongRow: React.FC<SongRowProps> = ({
  song,
  index,
  isPlaying,
  isCurrentSong,
  onPlay,
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div
      className={`group grid grid-cols-12 gap-2 items-center p-2 rounded-md transition-colors ${
        isCurrentSong ? 'bg-white/10' : 'hover:bg-white/5'
      }`}
    >
      <div className="col-span-1 flex items-center justify-center text-sm text-gray-400">
        <div className="group-hover:hidden">{index + 1}</div>
        <button
          onClick={onPlay}
          className="hidden group-hover:flex text-white hover:scale-110 transition-transform"
        >
          {isPlaying && isCurrentSong ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
      
      <div className="col-span-1 flex items-center justify-center">
        <img 
          src={song.cover} 
          alt={song.title} 
          className="w-10 h-10 rounded object-cover"
        />
      </div>
      
      <div className="col-span-4">
        <h4 className={`truncate ${isCurrentSong ? 'text-green-400' : 'text-white'}`}>
          {song.title}
        </h4>
        <p className="truncate text-sm text-gray-400">{song.artist}</p>
      </div>
      
      <div className="col-span-3 text-sm text-gray-400 truncate">
        {song.album}
      </div>
      
      <div className="col-span-2 text-sm text-gray-400 truncate">
        {song.category}
      </div>
      
      <div className="col-span-1 text-right text-sm text-gray-400">
        {formatTime(song.duration)}
      </div>
    </div>
  );
};

export default SongRow;