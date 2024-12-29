import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PortfolioTypeProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  onClick: () => void;
}

const PortfolioTypeCard: React.FC<PortfolioTypeProps> = ({
  title,
  description,
  image,
  benefits,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-4">
          {benefits.slice(0, 2).map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-gray-500">
              <ChevronRight className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button
          className="text-indigo-600 font-medium flex items-center hover:text-indigo-700"
          onClick={onClick}
        >
          Learn More
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioTypeCard;