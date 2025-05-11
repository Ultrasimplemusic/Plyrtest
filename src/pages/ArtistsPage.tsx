import React from 'react';
import Header from '../components/Header';
import { artists } from '../data/mockData';
import ArtistCard from '../components/ArtistCard';
import { Song } from '../types';

interface ArtistsPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const ArtistsPage: React.FC<ArtistsPageProps> = () => {
  return (
    <div>
      <Header showSearch title="Artists" />
      
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;