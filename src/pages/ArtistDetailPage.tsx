import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getArtistById, getSongsByArtist, albums } from '../data/mockData';
import SongRow from '../components/SongRow';
import AlbumCard from '../components/AlbumCard';
import { Song, Artist, Album } from '../types';

interface ArtistDetailPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const ArtistDetailPage: React.FC<ArtistDetailPageProps> = ({ 
  currentSong, 
  isPlaying, 
  onPlaySong 
}) => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [artistAlbums, setArtistAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (id) {
      const foundArtist = getArtistById(id);
      if (foundArtist) {
        setArtist(foundArtist);
        setSongs(getSongsByArtist(id));
        
        const artistAlbums = albums.filter(album => album.artist === id);
        setArtistAlbums(artistAlbums);
      }
    }
  }, [id]);

  if (!artist) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Artist not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header showSearch />
      
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className="w-full h-full object-cover blur-sm opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-8 flex items-end">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-white">{artist.name}</h1>
            {artist.bio && (
              <p className="text-gray-300 mt-2 max-w-2xl">{artist.bio}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-8">
        {songs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Top Songs</h2>
            
            <div className="rounded-md overflow-hidden">
              {songs.map((song, index) => (
                <SongRow
                  key={song.id}
                  song={song}
                  index={index}
                  isPlaying={isPlaying}
                  isCurrentSong={currentSong?.id === song.id}
                  onPlay={() => onPlaySong(song)}
                />
              ))}
            </div>
          </section>
        )}
        
        {artistAlbums.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Albums</h2>
            
            <div className="flex flex-wrap gap-8">
              {artistAlbums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtistDetailPage;