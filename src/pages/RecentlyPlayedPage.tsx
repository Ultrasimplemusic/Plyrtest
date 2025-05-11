import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Song } from '../types';
import SongRow from '../components/SongRow';

interface RecentlyPlayedPageProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
  recentlyPlayed: Song[];
}

const RecentlyPlayedPage: React.FC<RecentlyPlayedPageProps> = ({ 
  currentSong, 
  isPlaying, 
  onPlaySong,
  recentlyPlayed
}) => {
  return (
    <div>
      <Header showSearch title="Recently Played" />
      
      <div className="px-6 py-4">
        {recentlyPlayed.length > 0 ? (
          <div className="rounded-md overflow-hidden">
            {recentlyPlayed.map((song, index) => (
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
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl text-white mb-2">No recently played songs</h2>
            <p className="text-gray-400">Start playing some music to see your history here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentlyPlayedPage;