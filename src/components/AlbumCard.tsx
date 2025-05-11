import React from 'react';
import { Album } from '../types';
import { useNavigate } from 'react-router-dom';

interface AlbumCardProps {
  album: Album;
  artistName?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, artistName }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/albums/${album.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="w-48 h-48 mb-3 overflow-hidden rounded-md shadow-lg">
        <img 
          src={album.cover} 
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="font-medium text-white truncate">{album.title}</h3>
      <p className="text-gray-400 text-sm truncate">
        {artistName || `Album • ${album.year}`}
      </p>
    </div>
  );
};

export default AlbumCard;