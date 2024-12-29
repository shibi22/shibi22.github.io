import React from 'react';
import { X } from 'lucide-react';

interface ServiceDetailModalProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  price: {
    min: number;
    max: number;
  };
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  title,
  description,
  features,
  image,
  price,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          )}
          <p className="text-gray-600 mb-6">{description}</p>
          {features && features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Features & Benefits</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 text-indigo-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Pricing</h4>
            <p className="text-gray-800">₹{price.min} - ₹{price.max}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;