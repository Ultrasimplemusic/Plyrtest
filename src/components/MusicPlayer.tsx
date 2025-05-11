import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, SkipBack, SkipForward, Play, Pause } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrevious
}) => {
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
        startProgressTimer();
      } else {
        audioRef.current.pause();
        stopProgressTimer();
      }
    }
    
    return () => {
      stopProgressTimer();
    };
  }, [isPlaying, currentSong]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const startProgressTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      if (audioRef.current) {
        setProgress(audioRef.current.currentTime);
      }
    }, 1000) as unknown as number;
  };

  const stopProgressTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-lg text-white p-3 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="hidden sm:flex w-1/4">
          <div className="flex items-center space-x-3">
            <img 
              src={currentSong.cover} 
              alt={currentSong.title} 
              className="w-12 h-12 object-cover rounded"
            />
            <div className="truncate">
              <p className="font-medium truncate">{currentSong.title}</p>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-2/4 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 mb-2 w-full">
            <button 
              onClick={onPrevious}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SkipBack size={20} />
            </button>
            
            <button 
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={onNext}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center w-full space-x-2">
            <span className="text-xs text-gray-400 w-10 text-right">
              {formatTime(progress)}
            </span>
            
            <input
              type="range"
              min="0"
              max={currentSong.duration}
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 rounded-full bg-gray-600 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full"
            />
            
            <span className="text-xs text-gray-400 w-10">
              {formatTime(currentSong.duration)}
            </span>
          </div>
        </div>
        
        <div className="hidden sm:flex w-1/4 justify-end items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 rounded-full bg-gray-600 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full"
            />
          </div>
        </div>
      </div>
      
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audioSrc}
          onEnded={onNext}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setProgress(audioRef.current.currentTime);
            }
          }}
          preload="auto"
        />
      )}
    </div>
  );
};

export default MusicPlayer;