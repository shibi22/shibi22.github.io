import React from 'react';
import { FileText, Briefcase, Linkedin } from 'lucide-react';

const ServicePreview = () => {
  const services = [
    {
      icon: FileText,
      title: 'Resume Design',
      description: 'Stand out with professionally crafted resumes'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Creation',
      description: 'Showcase your work with modern portfolios'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Optimization',
      description: 'Enhance your professional online presence'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional solutions tailored to your needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <Icon className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePreview;