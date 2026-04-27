import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Share2, Scale, Building2, Gavel, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import './Practices.css';

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

export const Practices = () => {
  return (
    <div className="practices-page">
      {/* Practices Hero */}
      <section className="practices-hero container">
        <motion.div 
          className="practices-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="section-label-top" variants={fadeUpVariant}>PRECISION IN PRACTICE</motion.span>
          <motion.h1 className="hero-headline" variants={fadeUpVariant}>
            Comprehensive Legal<br />
            <em>Architects</em> for a Modern Era.
          </motion.h1>
          <motion.div className="header-divider" variants={fadeUpVariant}></motion.div>
        </motion.div>
      </section>

      {/* Practice Grid */}
      <section className="practice-grid-section container">
        <motion.div 
          className="practice-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Card 1: Corporate & Global Strategy */}
          <motion.div className="practice-card card-large bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Briefcase size={28} color="#6E1A37" /></div>
            <h2>Corporate & Global Strategy</h2>
            <p>Navigating the complexities of international trade, mergers, and corporate governance with surgical precision. We provide the structural foundation for your commercial ambitions.</p>
            <ul className="practice-list">
              <li>MERGERS & ACQUISITIONS</li>
              <li>VENTURE CAPITAL</li>
              <li>IPO ADVISORY</li>
              <li>INTELLECTUAL PROPERTY</li>
            </ul>
            <div className="card-footer-action">
              <ArrowRight size={20} color="#6E1A37" />
            </div>
          </motion.div>

          {/* Card 2: Family & Heritage */}
          <motion.div className="practice-card card-with-image bg-neutral border-left-maroon" variants={fadeUpVariant}>
            <div className="card-icon"><Share2 size={28} color="#6E1A37" /></div>
            <h2>Family & Heritage</h2>
            <p>Preserving legacies and navigating personal transitions with empathy and absolute discretion. Our approach balances legal rigor with human sensitivity.</p>
            <div className="card-image-container">
              <img src="/practices_family_heritage.png" alt="Family Heritage" />
            </div>
          </motion.div>

          {/* Card 3: Criminal Defense */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Gavel size={28} color="#6E1A37" /></div>
            <h2>Criminal Defense</h2>
            <p>Unwavering advocacy and strategic defense in high-stakes white-collar and federal litigation cases. We protect your freedom with relentless precision.</p>
            <div className="card-label-footer">
              <span>DEFENSE COUNSEL</span>
              <div className="small-shield-icon"></div>
            </div>
          </motion.div>

          {/* Card 4: Real Estate & Land */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Building2 size={28} color="#6E1A37" /></div>
            <h2>Real Estate & Land</h2>
            <p>From commercial development to historic preservation, we secure the legal terrain for your most significant physical assets.</p>
            <a href="#" className="card-link">Review Portfolio</a>
          </motion.div>

          {/* Card 5: Civil Litigation */}
          <motion.div className="practice-card card-small bg-primary text-white" variants={fadeUpVariant}>
            <div className="card-icon"><Scale size={28} color="#FFFFFF" /></div>
            <h2 className="text-white">Civil Litigation</h2>
            <p className="text-white-muted">Aggressive representation in complex civil disputes. We don't just litigate; we engineer outcomes that serve your long-term interests.</p>
            <div className="card-button-container">
              <Button variant="inverted">View Case Studies</Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="quote-section container">
        <motion.div 
          className="quote-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <div className="quote-portrait">
            <img src="/practices_arthur_sterling.png" alt="Arthur Sterling" />
          </div>
          <div className="quote-content">
            <blockquote>
              "Legal Mart doesn't just provide counsel; they provide clarity. In an industry of noise, their quiet authority is the ultimate competitive advantage."
            </blockquote>
            <cite>— ARTHUR STERLING, CEO GLOBAL VISTAS</cite>
          </div>
        </motion.div>
        <div className="bottom-divider"></div>
      </section>
    </div>
  );
};
