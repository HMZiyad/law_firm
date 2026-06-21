import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Home as HomeIcon, Search, User, Gavel, Shield, Handshake } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const clientLogos = [
  { name: 'Al-Arafah Islami Bank PLC', img: '/clients/aib.png' },
  { name: 'BoiSodai', img: '/clients/boishodai.png' },
  { name: 'BRAC Bank', img: '/clients/brac bank.png' },
  { name: 'City Bank', img: '/clients/city bank.png' },
  { name: 'IDLC', img: '/clients/IDLC.png' },
  { name: 'LankaBangla Finance', img: '/clients/Lanka Bangla.png' },
  { name: 'Neuron Publication', img: '/clients/Neuron Publications.png' },
  { name: 'One Direction', img: '/clients/One Dirction.png' },
  { name: 'Remark', img: '/clients/Remark.png' },
  { name: 'Shajgoj', img: '/clients/SHAJGOJ.png' },
  { name: 'Skin Cafe', img: '/clients/Skin Cafe.png' }
];

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/hero_office_bg.png" alt="Office Background" />
          <div className="hero-overlay"></div>
        </motion.div>
        <motion.div 
          className="container hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-headline" variants={fadeUpVariant}>
              Modern.<br />
              <em>Corporate-Focused.</em>
          </motion.h1>
          <motion.p className="hero-subtext" variants={fadeUpVariant}>
            Legal Mart is a modern, corporate-focused law firm dedicated to delivering practical,<br />
            business-oriented legal solutions in an evolving commercial landscape.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUpVariant}>
            <Link to="/practices">
              <Button variant="primary">Explore Practices</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Our Legacy</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section 
        className="mission"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        <div className="container mission-container">
          <div className="mission-left">
            <h2>Our Mission</h2>
            <div className="divider"></div>
          </div>
          <div className="mission-right">
            <p className="mission-quote">
              "Legal Mart is a modern, corporate-focused law firm dedicated to delivering practical, business-oriented legal solutions in an evolving commercial landscape. We combine legal expertise with a deep understanding of business operations to help clients navigate complex legal challenges with confidence and efficiency."
            </p>
            <span className="mission-author">— LEGAL MART</span>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Firm Section */}
      <section className="features bg-neutral">
        <div className="container features-container">
          <motion.div 
            className="features-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <span className="section-label">DISTINCTION</span>
            <h2>Why Choose Our Firm</h2>
          </motion.div>
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card institutional-heritage bg-white" variants={fadeUpVariant}>
              <div className="feature-icon"><HomeIcon size={24} color="#6E1A37" /></div>
              <h3>Institutional Heritage</h3>
              <p>Over four decades of navigating complex regulatory frameworks and high-stakes litigation with surgical precision and unyielding dedication.</p>
            </motion.div>
            <motion.div className="feature-card unmatched-precision bg-primary text-white" variants={fadeUpVariant}>
              <div className="feature-icon"><Gavel size={24} color="#FFFFFF" /></div>
              <h3 style={{color: 'white'}}>Unmatched Precision</h3>
              <p style={{color: 'rgba(255,255,255,0.8)'}}>Every word matters. Our editorial approach to law ensures no detail is overlooked.</p>
            </motion.div>
            <motion.div className="feature-card steadfast-protection" variants={fadeUpVariant}>
              <div className="feature-icon"><Shield size={24} color="#6E1A37" /></div>
              <h3>Steadfast Protection</h3>
              <p>Safeguarding your intellectual and physical assets through proactive risk mitigation strategies.</p>
            </motion.div>
            <motion.div className="feature-card bespoke-partnership split-card" variants={fadeUpVariant}>
              <div className="split-content">
                <div className="feature-icon"><Handshake size={24} color="#6E1A37" /></div>
                <h3>Bespoke Partnership</h3>
                <p>We operate as an extension of your leadership team, aligning legal strategies with your overarching commercial objectives.</p>
              </div>
              <div className="split-image">
                <div className="image-frame">
                  <img src="/handshake_image.png" alt="Handshake" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="philosophy container">
        <motion.div 
          className="philosophy-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="philosophy-visual" variants={fadeUpVariant}>
            <img src="/home_philosophy_office.png" alt="Chambers" />
            <div className="philosophy-quote-card bg-neutral">
              <p>"Precision is not just our standard, it's our signature."</p>
            </div>
          </motion.div>
          <motion.div className="philosophy-content" variants={fadeUpVariant}>
            <span className="section-label">THE PHILOSOPHY</span>
            <h2>Heritage meets<br />modernity.</h2>
            <div className="philosophy-divider"></div>
            <p>Our chambers represent a synthesis of tradition and contemporary legal strategy. We believe that clarity in counsel is the cornerstone of success.</p>
            <div className="philosophy-footer">
              <strong>ELEANOR THORNE</strong>
              <span>Founding Partner</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Marquee Section */}
      <section className="clients-marquee-section">
        <div className="container">
          <motion.div 
            className="clients-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <span className="section-label">TRUSTED BY</span>
            <h2>Our Valuable Clients</h2>
          </motion.div>
        </div>
        <motion.div 
          className="marquee-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="marquee-content">
            <div className="marquee-track">
              {clientLogos.map((client, index) => (
                <div key={index} className="client-logo-wrapper">
                  <img src={client.img} alt={client.name} />
                </div>
              ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
              {clientLogos.map((client, index) => (
                <div key={`dup-${index}`} className="client-logo-wrapper">
                  <img src={client.img} alt={client.name} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpVariant}
      >
        <div className="container">
          <div className="cta-box bg-neutral">
            <div className="cta-content">
              <h2>Secure Your Future with Legal Mart.</h2>
              <p>Schedule a confidential consultation with our lead attorneys to discuss your case or corporate requirements.</p>
            </div>
            <div className="cta-action">
              <Link to="/contact">
                <Button variant="primary">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
