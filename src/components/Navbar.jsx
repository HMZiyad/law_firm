import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo_legalmart.png" alt="Legal Mart Logo" style={{ height: '38px', width: 'auto', display: 'block' }} />
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Our Firm</Link>
          <Link to="/practices" className="nav-link">Practices</Link>
          <Link to="/team" className="nav-link">Attorneys</Link>
          <Link to="/insights" className="nav-link">Insights</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/contact">
            <Button variant="primary">Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
