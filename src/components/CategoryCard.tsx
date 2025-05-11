import React from 'react';
import { Category } from '../types';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/categories/${category.id}`);
  };

  // Generate a random background color for each category
  const bgColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-teal-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-500',
  ];
  
  const randomIndex = parseInt(category.id) % bgColors.length;
  const bgGradient = bgColors[randomIndex];

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className={`relative h-40 rounded-lg overflow-hidden bg-gradient-to-br ${bgGradient}`}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h3 className="text-xl font-bold text-white">{category.name}</h3>
        </div>
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export default CategoryCard;