import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { categories, getSongsByCategory } from '../data/mockData';
import MusicGrid from '../components/MusicGrid';
import { Song, Category } from '../types';

interface CategoryDetailPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ 
  currentSong, 
  isPlaying, 
  onPlaySong 
}) => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (id) {
      const foundCategory = categories.find(c => c.id === id);
      if (foundCategory) {
        setCategory(foundCategory);
        setSongs(getSongsByCategory(foundCategory.name));
      }
    }
  }, [id]);

  if (!category) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Category not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header showSearch />
      
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover blur-sm opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white">{category.name}</h1>
          <p className="text-gray-300 mt-2">{songs.length} songs</p>
        </div>
      </div>
      
      <div className="px-6 py-8">
        <MusicGrid
          songs={songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          onPlaySong={onPlaySong}
        />
      </div>
    </div>
  );
};

export default CategoryDetailPage;