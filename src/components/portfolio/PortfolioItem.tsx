import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioItemType } from './types';

const PortfolioItem: React.FC<PortfolioItemType> = ({ 
  title, 
  category, 
  image, 
  description,
  link 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 overflow-hidden group">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2 hover:text-indigo-200"
          >
            <ExternalLink size={20} />
            View Project
          </a>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-600">{category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;