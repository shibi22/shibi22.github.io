import React from 'react';
import PortfolioItem from './PortfolioItem';
import { portfolioData } from './portfolioData';

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioData.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PortfolioGrid;