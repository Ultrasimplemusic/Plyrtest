import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getAlbumById, getSongsByAlbum, getArtistById } from '../data/mockData';
import SongRow from '../components/SongRow';
import { Song, Album, Artist } from '../types';

interface AlbumDetailPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const AlbumDetailPage: React.FC<AlbumDetailPageProps> = ({ 
  currentSong, 
  isPlaying, 
  onPlaySong 
}) => {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [artist, setArtist] = useState<Artist | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (id) {
      const foundAlbum = getAlbumById(id);
      if (foundAlbum) {
        setAlbum(foundAlbum);
        setSongs(getSongsByAlbum(id));
        
        const albumArtist = getArtistById(foundAlbum.artist);
        if (albumArtist) {
          setArtist(albumArtist);
        }
      }
    }
  }, [id]);

  const getTotalDuration = () => {
    const totalSeconds = songs.reduce((acc, song) => acc + song.duration, 0);
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes} min`;
  };

  if (!album) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Album not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header showSearch />
      
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img 
            src={album.cover} 
            alt={album.title} 
            className="w-full h-full object-cover blur-sm opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-8 flex items-end">
          <div className="w-48 h-48 overflow-hidden shadow-2xl">
            <img 
              src={album.cover} 
              alt={album.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-white">{album.title}</h1>
            <div className="flex items-center mt-2">
              {artist && (
                <span className="text-gray-300">By {artist.name}</span>
              )}
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{album.year}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{songs.length} songs, {getTotalDuration()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-8">
        {songs.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default AlbumDetailPage;