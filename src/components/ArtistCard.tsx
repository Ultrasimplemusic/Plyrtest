import React from 'react';
import { Artist } from '../types';
import { useNavigate } from 'react-router-dom';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/artists/${artist.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="text-center cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="w-40 h-40 mx-auto mb-3 overflow-hidden rounded-full">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="font-medium text-white">{artist.name}</h3>
      <p className="text-gray-400 text-sm">Artist</p>
    </div>
  );
};

export default ArtistCard;