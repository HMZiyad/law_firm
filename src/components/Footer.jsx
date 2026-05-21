import React from 'react';
import { Share2, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer bg-neutral">
      <div className="container footer-container contact-footer-layout">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/logo_legalmart.png" alt="Legal Mart Logo" style={{ height: '36px', width: 'auto', display: 'block', marginBottom: '1.25rem' }} />
          </div>
          <p className="footer-subtext-small">Dedicated to providing premium legal counsel with heritage and precision since 1984.</p>
        </div>
        
        <div className="footer-col">
          <h4>RESOURCES</h4>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">PRIVACY POLICY</a>
        </div>
        
        <div className="footer-col">
          <h4>HOURS</h4>
          <p>OFFICE HOURS: MON-FRI 9AM-6PM</p>
        </div>
        
        <div className="footer-col">
          <h4>CONNECT</h4>
          <p>CONTACT:<br/>LEGALMART22@GMAIL.COM<br/>+880 1718-119699</p>
          <div className="social-icons-footer">
            <Share2 size={18} />
            <Mail size={18} />
          </div>
        </div>
      </div>
      
      <div className="footer-copyright-center">
        <p>© 2024 LEGAL MART. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
