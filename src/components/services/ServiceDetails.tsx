import React from 'react';
import { X } from 'lucide-react';
import { serviceDetails } from './serviceDetailsData';

interface ServiceDetailsProps {
  serviceId: string;
  onClose: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId, onClose }) => {
  const details = serviceDetails[serviceId];

  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{details.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          {details.image && (
            <img
              src={details.image}
              alt={details.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          )}
          <div className="prose max-w-none">
            {details.description && (
              <p className="text-gray-600 mb-4">{details.description}</p>
            )}
            {details.features && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Features:</h4>
                <ul className="space-y-2">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-6 w-6 text-indigo-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {details.pricing && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Pricing:</h4>
                <p className="text-gray-800">₹{details.pricing.min} - ₹{details.pricing.max}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;