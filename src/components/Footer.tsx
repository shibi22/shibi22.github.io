import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/cbee..rawj_/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shibiraj-r/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/shibi22',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:shibi73201@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-gray-500">© {new Date().getFullYear()} shibiraj. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Website designed and developed by shibiraj</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;