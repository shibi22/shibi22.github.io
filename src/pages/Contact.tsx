import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss how I can help you succeed
          </p>
        </div>
        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;