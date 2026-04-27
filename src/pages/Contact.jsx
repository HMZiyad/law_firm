import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import './Contact.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero container">
        <motion.div 
          className="contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="section-label-top" variants={fadeUpVariant}>GET IN TOUCH</motion.span>
          <motion.h1 className="hero-headline" variants={fadeUpVariant}>
            Advocacy that begins<br />
            with a <em>conversation.</em>
          </motion.h1>
        </motion.div>
      </section>

      {/* Main Contact Content */}
      <section className="contact-main container">
        <div className="contact-grid">
          {/* Inquiry Form */}
          <motion.div 
            className="contact-form-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <div className="form-card bg-white">
              <h2>Case Inquiry</h2>
              <form className="inquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>FULL NAME</label>
                    <input type="text" placeholder="Johnathan Doe" />
                  </div>
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" placeholder="j.doe@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>PRACTICE AREA</label>
                  <div className="select-wrapper">
                    <select defaultValue="Corporate Law">
                      <option>Corporate Law</option>
                      <option>Family & Heritage</option>
                      <option>Criminal Defense</option>
                      <option>Real Estate & Land</option>
                      <option>Civil Litigation</option>
                    </select>
                    <ChevronDown className="select-icon" size={18} />
                  </div>
                </div>
                <div className="form-group">
                  <label>HOW CAN WE ASSIST YOU?</label>
                  <textarea placeholder="Briefly describe your legal needs..."></textarea>
                </div>
                <div className="form-action">
                  <Button variant="primary">SEND INQUIRY</Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            className="contact-sidebar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Map Card */}
            <motion.div className="info-card map-card" variants={fadeUpVariant}>
              <div className="map-image-container">
                <img src="/contact_mayfair_map.png" alt="Mayfair Map" />
                <div className="map-overlay-card">
                  <h3>Mayfair Office</h3>
                  <p>42 Berkeley Square, London W1J 5AW</p>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div className="info-card hours-card bg-white" variants={fadeUpVariant}>
              <h3>Office Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Mon — Fri</span>
                  <span className="time">9am — 6pm</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span className="time">10am — 2pm</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span className="time italic-maroon">By Appointment</span>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Card */}
            <motion.div className="info-card direct-card bg-neutral" variants={fadeUpVariant}>
              <h3>Direct Contact</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={18} color="#6E1A37" /></div>
                  <div className="contact-detail">
                    <span className="label">PHONE</span>
                    <span className="value">+44 (20) 7123 4567</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={18} color="#6E1A37" /></div>
                  <div className="contact-detail">
                    <span className="label">EMAIL</span>
                    <span className="value">info@legalmart.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Quote Section */}
      <section className="partner-section container">
        <motion.div 
          className="partner-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <div className="partner-content">
            <div className="quote-mark">“</div>
            <blockquote>
              "The law should be accessible, authoritative, and above all, human. We are here to bridge the gap between complexity and clarity."
            </blockquote>
            <div className="partner-signature">
              <div className="signature-line"></div>
              <cite>ELEANOR THORNE, SENIOR PARTNER</cite>
            </div>
          </div>
          <div className="partner-portrait">
            <img src="/contact_eleanor_thorne.png" alt="Eleanor Thorne" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};
