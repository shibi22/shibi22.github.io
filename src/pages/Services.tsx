import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FileText, Briefcase, Linkedin, Package, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Domain & Hosting Services',
      description: 'Professional domain registration and hosting solutions for your online presence.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      price: { min: 300, max: 500 }
    },
    {
      title: 'Resume Designing',
      description: 'Professional resumes that help you stand out in the job market.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: { min: 75, max: 250 },
      tagline: 'ATS-Friendly Resumes Tailored for Your Career'
    },
    {
      title: 'Portfolio Creation',
      description: 'Showcase your work with a modern, professional portfolio.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      price: { min: 250, max: 500 }
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Enhance your professional presence on LinkedIn.',
      icon: Linkedin,
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: { min: 350, max: 500 }
    },
    {
      title: 'Project Selling',
      description: 'High-quality, customized projects that meet your specific needs.',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      price: { min: 750, max: 4000 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional solutions tailored to your needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;