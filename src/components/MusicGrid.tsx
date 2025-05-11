import React from 'react';
import MusicCard from './MusicCard';
import { Song } from '../types';

interface MusicGridProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
  title?: string;
  cardVariant?: 'small' | 'medium' | 'large';
}

const MusicGrid: React.FC<MusicGridProps> = ({
  songs,
  currentSong,
  isPlaying,
  onPlaySong,
  title,
  cardVariant = 'medium'
}) => {
  if (songs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No songs found</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map((song) => (
          <MusicCard
            key={song.id}
            song={song}
            isPlaying={isPlaying && currentSong?.id === song.id}
            onPlay={() => onPlaySong(song)}
            variant={cardVariant}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicGrid;