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
          <Link to="/practices" className="nav-link">Practices</Link>
          <Link to="/team" className="nav-link">Attorneys</Link>
          <Link to="/insights" className="nav-link">Insights</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Button variant="primary">Consultation</Button>
        </div>
      </div>
    </header>
  );
};
