import React from 'react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicePreview />
    </div>
  );
};

export default Home;