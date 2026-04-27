import React from 'react';
import { Globe, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer bg-neutral">
      <div className="container footer-container new-footer-layout">
        <div className="footer-col brand-col">
          <h3 className="footer-logo">Legal Mart</h3>
          <p className="footer-copyright">© 2024 LEGAL MART. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-col links-col">
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">PRIVACY POLICY</a>
        </div>
        <div className="footer-col contact-col">
          <p>OFFICE HOURS - MON-FRI 9AM-6PM</p>
          <p>CONTACTS - INFO@LEGALMART.COM</p>
        </div>
        <div className="footer-col social-col">
          <div className="social-icons">
            <a href="#"><Globe size={20} color="#6E1A37" /></a>
            <a href="#"><Phone size={20} color="#6E1A37" /></a>
            <a href="#"><Mail size={20} color="#6E1A37" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
