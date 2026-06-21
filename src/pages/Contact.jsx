import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practiceArea: 'Corporate Law',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e2cc3a46-0ad0-4bec-a2cc-73b1daf83580',
          subject: `New Case Inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          practiceArea: formData.practiceArea,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your case inquiry has been sent successfully. We will get back to you shortly.' 
        });
        setFormData({ name: '', email: '', practiceArea: 'Corporate Law', message: '' });
      } else {
        setSubmitStatus({ 
          success: false, 
          message: result.message || 'Something went wrong. Please check your credentials and try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to connect to the server. Please check your network and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>FULL NAME</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Johnathan Doe" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="j.doe@example.com" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>PRACTICE AREA</label>
                  <div className="select-wrapper">
                    <select 
                      name="practiceArea" 
                      value={formData.practiceArea} 
                      onChange={handleChange}
                    >
                      <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
                      <option value="Intellectual Property Services">Intellectual Property Services</option>
                      <option value="Contract Management">Contract Management</option>
                      <option value="Regulatory & Compliance Advisory">Regulatory & Compliance Advisory</option>
                      <option value="Banking & Finance">Banking & Finance</option>
                      <option value="Dispute Resolution">Dispute Resolution</option>
                      <option value="Employment & Human Resources">Employment & Human Resources</option>
                      <option value="Legal Research & Advisory">Legal Research & Advisory</option>
                    </select>
                    <ChevronDown className="select-icon" size={18} />
                  </div>
                </div>
                <div className="form-group">
                  <label>HOW CAN WE ASSIST YOU?</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Briefly describe your legal needs..." 
                    required
                  ></textarea>
                </div>
                <div className="form-action">
                  <Button variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                  </Button>
                </div>
                {submitStatus.message && (
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    backgroundColor: submitStatus.success ? 'rgba(110, 26, 55, 0.1)' : 'rgba(235, 94, 85, 0.1)',
                    color: submitStatus.success ? 'var(--color-primary)' : '#D03B2E',
                    border: `1px solid ${submitStatus.success ? 'rgba(110, 26, 55, 0.2)' : 'rgba(235, 94, 85, 0.2)'}`,
                    transition: 'all 0.3s ease'
                  }}>
                    {submitStatus.message}
                  </div>
                )}
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
            <motion.a 
              href="https://www.google.com/maps/dir//Azad+Center,+55+Purana+Paltan,+Dhaka+1000/@23.7305856,90.4134656,6072m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3755b91f2e020b6d:0xbb5ed9832febd211!2m2!1d90.4119353!2d23.7305998?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card map-card" 
              variants={fadeUpVariant}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div className="map-image-container">
                <img src="/contact_mayfair_map.png" alt="Dhaka Office Map" />
                <div className="map-overlay-card">
                  <h3>Dhaka Head Office</h3>
                  <p>Azad Center, Suite No. 20/A (20th Floor), 55 Purana Paltan, Dhaka-1000</p>
                </div>
              </div>
            </motion.a>

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
                    <span className="value">+880 1718-119699</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={18} color="#6E1A37" /></div>
                  <div className="contact-detail">
                    <span className="label">EMAIL</span>
                    <span className="value">legalmart22@gmail.com</span>
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
