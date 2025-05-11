import React from 'react';
import Header from '../components/Header';
import MusicGrid from '../components/MusicGrid';
import { getFeaturedSongs, artists, categories } from '../data/mockData';
import ArtistCard from '../components/ArtistCard';
import CategoryCard from '../components/CategoryCard';
import { Song } from '../types';

interface HomePageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

const HomePage: React.FC<HomePageProps> = ({ currentSong, isPlaying, onPlaySong }) => {
  const featuredSongs = getFeaturedSongs();
  const featuredArtists = artists.slice(0, 4);
  const featuredCategories = categories.slice(0, 4);

  return (
    <div>
      <Header showSearch title="Home" />
      
      <div className="px-6 py-4">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-1 text-white">Welcome Back</h1>
          <p className="text-gray-400 mb-6">Pick up where you left off</p>
          
          <MusicGrid
            songs={featuredSongs}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onPlaySong={onPlaySong}
            title="Featured Songs"
          />
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Popular Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;