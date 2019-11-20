import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/NavbarComponent';

const PortfolioComponent = () => {
  return (
    <div>
      <Navbar className="mb-5" />
      <div className="page-title">
        <h1 className="portfolio-title">Portfolio</h1>
        <hr />
        <Link to={'#'} className="page-scroll btn btn-md portfolio-links">
          All
        </Link>
        <Link to={'#'} className="page-scroll btn btn-md portfolio-links">
          Frontend
        </Link>
        <Link to={'#'} className="page-scroll btn btn-md portfolio-links">
          Backend
        </Link>
        <Link to={'#'} className="page-scroll btn btn-md portfolio-links">
          Devops
        </Link>
      </div>
    </div>
  );
};

export default PortfolioComponent;
