import React from 'react';
import { Home, Search, Disc3, Mic2, ListMusic, User, Clock, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Search size={20} />, label: 'Search', path: '/search' },
    { icon: <Disc3 size={20} />, label: 'Albums', path: '/albums' },
    { icon: <Mic2 size={20} />, label: 'Artists', path: '/artists' },
    { icon: <ListMusic size={20} />, label: 'Categories', path: '/categories' },
  ];

  const libraryItems = [
    { icon: <Clock size={18} />, label: 'Recently Played', path: '/recently-played' },
    { icon: <Heart size={18} />, label: 'Liked Songs', path: '/liked-songs' },
    { icon: <User size={18} />, label: 'Your Library', path: '/library' },
  ];

  return (
    <div className="w-64 h-screen bg-black/70 backdrop-blur-lg text-white flex-shrink-0 overflow-y-auto hidden md:block fixed left-0 top-0 pt-5 pb-24">
      <div className="px-5 py-4 flex items-center">
        <Disc3 className="text-purple-500" size={30} />
        <h1 className="text-xl font-bold ml-2">Sonique</h1>
      </div>
      
      <div className="px-3 mt-6">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-gray-400 mb-2 px-2">
          Browse
        </h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-2 py-2 rounded-md text-sm group transition-colors ${
                isActive(item.path)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="px-3 mt-8">
        <h2 className="text-xs uppercase font-semibold tracking-wider text-gray-400 mb-2 px-2">
          Your Library
        </h2>
        <nav className="space-y-1">
          {libraryItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-2 py-2 rounded-md text-sm group transition-colors ${
                isActive(item.path)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="px-5 mt-10">
        <div className="border-t border-gray-800 pt-4">
          <h2 className="text-xs uppercase font-semibold tracking-wider text-gray-400 mb-2">
            Created by
          </h2>
          <p className="text-sm text-gray-400">
            Sonique Music Library
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;