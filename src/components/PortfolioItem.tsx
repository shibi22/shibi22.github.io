import React from 'react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-600">{category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;