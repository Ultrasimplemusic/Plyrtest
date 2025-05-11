export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  audioSrc: string;
  duration: number;
  category: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  bio?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  year: number;
  songs: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
}