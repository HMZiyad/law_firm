import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo_legalmart.png" alt="Legal Mart Logo" style={{ height: '38px', width: 'auto', display: 'block' }} />
        </Link>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link">Our Firm</Link>
            <Link to="/practices" className="nav-link">Practices</Link>
            <Link to="/team" className="nav-link">Attorneys</Link>
            <Link to="/insights" className="nav-link">Insights</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="nav-actions">
            <Link to="/contact">
              <Button variant="primary">Consultation</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
