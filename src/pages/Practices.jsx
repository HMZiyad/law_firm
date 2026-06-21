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
          {/* Card 1: Corporate & Commercial Law */}
          <motion.div className="practice-card card-large bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Briefcase size={28} color="#6E1A37" /></div>
            <h2>Corporate & Commercial Law</h2>
            <p>At Legal Mart, we provide comprehensive legal solutions tailored to the needs of businesses, corporations, startups, and entrepreneurs.</p>
            <ul className="practice-list">
              <li>Corporate advisory and legal compliance</li>
              <li>Company formation, restructuring, and governance</li>
              <li>Joint venture, partnership, and shareholder agreements</li>
              <li>Mergers, acquisitions, and business transactions</li>
            </ul>
            <div className="card-footer-action">
              <ArrowRight size={20} color="#6E1A37" />
            </div>
          </motion.div>

          {/* Card 2: Intellectual Property Services */}
          <motion.div className="practice-card card-with-image bg-neutral border-left-maroon" variants={fadeUpVariant}>
            <div className="card-icon"><Share2 size={28} color="#6E1A37" /></div>
            <h2>Intellectual Property Services</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <li>Trademark registration and protection</li>
              <li>Patent, industrial design, and copyright services</li>
              <li>IP portfolio management</li>
              <li>Opposition, rectification, and enforcement proceedings</li>
            </ul>
            <div className="card-image-container">
              <img src="/practices_family_heritage.png" alt="Intellectual Property Services" />
            </div>
          </motion.div>

          {/* Card 3: Contract Management */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Gavel size={28} color="#6E1A37" /></div>
            <h2>Contract Management</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Drafting and review of commercial agreements</li>
              <li>Distribution, licensing, and service agreements</li>
              <li>Employment and consultancy contracts</li>
              <li>Negotiation and risk assessment</li>
            </ul>
          </motion.div>

          {/* Card 4: Regulatory & Compliance Advisory */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Building2 size={28} color="#6E1A37" /></div>
            <h2>Regulatory & Compliance Advisory</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Regulatory compliance assessments</li>
              <li>Industry-specific legal guidance</li>
              <li>Corporate policy development</li>
              <li>Due diligence and legal audits</li>
            </ul>
          </motion.div>

          {/* Card 5: Banking & Finance */}
          <motion.div className="practice-card card-small bg-primary text-white" variants={fadeUpVariant}>
            <div className="card-icon"><Scale size={28} color="#FFFFFF" /></div>
            <h2 className="text-white">Banking & Finance</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>Loan and security documentation</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>Banking and financial regulatory matters</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>Debt recovery and enforcement proceedings</li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>Financial transaction advisory</li>
            </ul>
          </motion.div>

          {/* Card 6: Dispute Resolution */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Gavel size={28} color="#6E1A37" /></div>
            <h2>Dispute Resolution</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Litigation and court representation</li>
              <li>Arbitration and mediation</li>
              <li>Commercial dispute management</li>
              <li>Legal notices and enforcement actions</li>
            </ul>
          </motion.div>

          {/* Card 7: Employment & Human Resources */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Building2 size={28} color="#6E1A37" /></div>
            <h2>Employment & Human Resources</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Employment policies and contracts</li>
              <li>Workplace investigations and disciplinary matters</li>
              <li>Employee benefits and compliance</li>
              <li>Employment dispute resolution</li>
            </ul>
          </motion.div>

          {/* Card 8: Legal Research & Advisory */}
          <motion.div className="practice-card card-small bg-neutral" variants={fadeUpVariant}>
            <div className="card-icon"><Scale size={28} color="#6E1A37" /></div>
            <h2>Legal Research & Advisory</h2>
            <ul className="practice-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Legal opinions and risk assessments</li>
              <li>Regulatory research and analysis</li>
              <li>Business-focused legal strategy</li>
              <li>Corporate legal support services</li>
            </ul>
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
