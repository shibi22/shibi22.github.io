import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PriceRange {
  min: number;
  max: number;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  price: PriceRange;
  tagline?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  price,
  tagline 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <Icon className="h-6 w-6 text-indigo-600" />
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {tagline && (
          <p className="mt-2 text-sm font-medium text-indigo-600">{tagline}</p>
        )}
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            ₹{price.min} - ₹{price.max}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;