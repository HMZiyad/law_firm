import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <div className="logo-icon"></div>
          <Link to="/" className="logo-text">Legal Mart</Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Our Firm</Link>
          <a href="#" className="nav-link">Practices</a>
          <a href="#" className="nav-link">Attorneys</a>
          <a href="#" className="nav-link">Insights</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="nav-actions">
          <Button variant="primary">Consultation</Button>
        </div>
      </div>
    </header>
  );
};
