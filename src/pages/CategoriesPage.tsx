import React from 'react';
import Header from '../components/Header';
import { categories } from '../data/mockData';
import CategoryCard from '../components/CategoryCard';
import { Song } from '../types';

interface CategoriesPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
  return (
    <div>
      <Header showSearch title="Categories" />
      
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;