import { Song, Artist, Album, Category } from '../types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.'
  },
  {
    id: '2',
    name: 'Dua Lipa',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Dua Lipa is an English singer and songwriter. After working as a model, she signed with Warner Bros. Records in 2014.'
  },
  {
    id: '3',
    name: 'Tame Impala',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker.'
  },
  {
    id: '4',
    name: 'Childish Gambino',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Donald McKinley Glover Jr., also known by his stage name Childish Gambino, is an American actor, comedian, writer, producer, director, musician, and DJ.'
  },
  {
    id: '5',
    name: 'Billie Eilish',
    image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Billie Eilish Pirate Baird O\'Connell is an American singer and songwriter.'
  }
];

export const albums: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    artist: '1', // The Weeknd
    cover: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2020,
    songs: ['1', '2', '3'],
  },
  {
    id: '2',
    title: 'Future Nostalgia',
    artist: '2', // Dua Lipa
    cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2020,
    songs: ['4', '5', '6'],
  },
  {
    id: '3',
    title: 'The Slow Rush',
    artist: '3', // Tame Impala
    cover: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2020,
    songs: ['7', '8', '9'],
  },
  {
    id: '4',
    title: "Awaken, My Love!",
    artist: '4', // Childish Gambino
    cover: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2016,
    songs: ['10', '11', '12'],
  },
  {
    id: '5',
    title: 'When We All Fall Asleep, Where Do We Go?',
    artist: '5', // Billie Eilish
    cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    year: 2019,
    songs: ['13', '14', '15'],
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Pop',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '2',
    name: 'Rock',
    image: 'https://images.pexels.com/photos/3622532/pexels-photo-3622532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    name: 'Electronic',
    image: 'https://images.pexels.com/photos/2111016/pexels-photo-2111016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '4',
    name: 'Hip Hop',
    image: 'https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    name: 'Jazz',
    image: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const songs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    cover: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio1.mp3', // example link
    duration: 203,
    category: 'Pop'
  },
  {
    id: '2',
    title: 'Heartless',
    artist: 'The Weeknd',
    album: 'After Hours',
    cover: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio2.mp3',
    duration: 198,
    category: 'Pop'
  },
  {
    id: '3',
    title: 'After Hours',
    artist: 'The Weeknd',
    album: 'After Hours',
    cover: 'https://images.pexels.com/photos/1671597/pexels-photo-1671597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio3.mp3',
    duration: 361,
    category: 'Pop'
  },
  {
    id: '4',
    title: 'Don\'t Start Now',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio4.mp3',
    duration: 183,
    category: 'Pop'
  },
  {
    id: '5',
    title: 'Physical',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio5.mp3',
    duration: 194,
    category: 'Pop'
  },
  {
    id: '6',
    title: 'Break My Heart',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    cover: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio6.mp3',
    duration: 222,
    category: 'Pop'
  },
  {
    id: '7',
    title: 'Borderline',
    artist: 'Tame Impala',
    album: 'The Slow Rush',
    cover: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio7.mp3',
    duration: 237,
    category: 'Rock'
  },
  {
    id: '8',
    title: 'Lost in Yesterday',
    artist: 'Tame Impala',
    album: 'The Slow Rush',
    cover: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio8.mp3',
    duration: 248,
    category: 'Rock'
  },
  {
    id: '9',
    title: 'Is It True',
    artist: 'Tame Impala',
    album: 'The Slow Rush',
    cover: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio9.mp3',
    duration: 238,
    category: 'Rock'
  },
  {
    id: '10',
    title: 'Redbone',
    artist: 'Childish Gambino',
    album: 'Awaken, My Love!',
    cover: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio10.mp3',
    duration: 326,
    category: 'Hip Hop'
  },
  {
    id: '11',
    title: 'Me and Your Mama',
    artist: 'Childish Gambino',
    album: 'Awaken, My Love!',
    cover: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio11.mp3',
    duration: 364,
    category: 'Hip Hop'
  },
  {
    id: '12',
    title: 'Boogieman',
    artist: 'Childish Gambino',
    album: 'Awaken, My Love!',
    cover: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio12.mp3',
    duration: 226,
    category: 'Hip Hop'
  },
  {
    id: '13',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio13.mp3',
    duration: 194,
    category: 'Pop'
  },
  {
    id: '14',
    title: 'Bury a Friend',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio14.mp3',
    duration: 193,
    category: 'Pop'
  },
  {
    id: '15',
    title: 'When the Party\'s Over',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    cover: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    audioSrc: 'https://example.com/audio15.mp3',
    duration: 196,
    category: 'Pop'
  }
];

export const getFeaturedSongs = (): Song[] => {
  return [songs[0], songs[3], songs[6], songs[9], songs[12]];
};

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};

export const getAlbumById = (id: string): Album | undefined => {
  return albums.find(album => album.id === id);
};

export const getSongsByArtist = (artistId: string): Song[] => {
  const artist = artists.find(a => a.id === artistId);
  if (!artist) return [];
  return songs.filter(song => song.artist === artist.name);
};

export const getSongsByAlbum = (albumId: string): Song[] => {
  const album = albums.find(a => a.id === albumId);
  if (!album) return [];
  return songs.filter(song => song.album === album.title);
};

export const getSongsByCategory = (categoryName: string): Song[] => {
  return songs.filter(song => song.category === categoryName);
};

export const searchSongs = (query: string): Song[] => {
  const lowercaseQuery = query.toLowerCase();
  return songs.filter(
    song => 
      song.title.toLowerCase().includes(lowercaseQuery) ||
      song.artist.toLowerCase().includes(lowercaseQuery) ||
      song.album.toLowerCase().includes(lowercaseQuery)
  );
};