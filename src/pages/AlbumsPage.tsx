import React from 'react';
import Header from '../components/Header';
import { albums, artists } from '../data/mockData';
import AlbumCard from '../components/AlbumCard';
import { Song } from '../types';

interface AlbumsPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const AlbumsPage: React.FC<AlbumsPageProps> = () => {
  const getArtistName = (artistId: string) => {
    const artist = artists.find(a => a.id === artistId);
    return artist ? artist.name : 'Unknown Artist';
  };

  return (
    <div>
      <Header showSearch title="Albums" />
      
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {albums.map((album) => (
            <AlbumCard 
              key={album.id} 
              album={album}
              artistName={getArtistName(album.artist)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;