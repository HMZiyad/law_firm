import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import './About.css';

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

export const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero container">
        <motion.div 
          className="about-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="about-hero-text" variants={fadeUpVariant}>
            <span className="est-label">EST. 1984</span>
            <h1 className="hero-headline">
              Legacy Built on<br />
              <em>Precise Advocacy.</em>
            </h1>
            <p className="hero-subtext">
              For four decades, Legal Mart has stood as a bastion of intellectual rigor and unwavering commitment to the rule of law. We do not just practice; we protect.
            </p>
          </motion.div>
          <motion.div className="about-hero-quote-container" variants={fadeUpVariant}>
            <div className="about-hero-quote">
              <p>"Justice is not a static destination, but a relentless pursuit of clarity in a complex world."</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="narrative container">
        <motion.div 
          className="narrative-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="narrative-image-wrapper" variants={fadeUpVariant}>
            <img src="/about_library_lamp.png" alt="Library Lamp" className="narrative-img" />
            <div className="founding-card">
              <h3>The Founding</h3>
              <p>Legal Mart began in a small brick office in the historic district, founded by three partners who believed law was a craft, not a commodity.</p>
            </div>
          </motion.div>
          <motion.div className="narrative-text" variants={fadeUpVariant}>
            <h2>Our Narrative</h2>
            <p>Our history is woven into the very fabric of the industries we serve. From the early days of corporate restructuring in the 80s to the complex digital jurisdictions of today, Legal Mart has evolved alongside the global economy.</p>
            <p>We grew by choice, not by chance. Every partner joined because they shared a specific vision: that the best legal advice comes from deep immersion in the client's world. We are more than advocates; we are architects of resolution.</p>
            <a href="#" className="download-link">DOWNLOAD FIRM HISTORY</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Milestones Section */}
      <section className="milestones bg-neutral">
        <div className="container">
          <motion.div 
            className="milestones-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2>Milestones of Excellence</h2>
          </motion.div>
          <motion.div 
            className="milestones-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="milestone-card light-grey" variants={fadeUpVariant}>
              <h3 className="year">1984</h3>
              <h4>Chartering the Path</h4>
              <p>The firm is established with a focus on Maritime Law and International Trade, securing its first landmark victory within six months of operation.</p>
            </motion.div>
            <motion.div className="milestone-card primary-bg" variants={fadeUpVariant}>
              <h3 className="year">1996</h3>
              <h4>National Expansion</h4>
            </motion.div>
            <motion.div className="milestone-card light-grey with-border" variants={fadeUpVariant}>
              <h3 className="year">2008</h3>
              <h4>Crisis Management</h4>
              <p>Guiding major financial institutions through the global economic crisis.</p>
            </motion.div>
            <motion.div className="milestone-card white-bg today-card" variants={fadeUpVariant}>
              <h3>Today</h3>
              <p>40 Partners. 12 Countries.<br/>One unwavering standard of excellence.</p>
            </motion.div>
            <motion.div className="milestone-image" variants={fadeUpVariant}>
              <img src="/about_courthouse_pillars.png" alt="Courthouse Pillars" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Justice Section */}
      <section className="pillars dark-section">
        <div className="container">
          <motion.div 
            className="pillars-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <span className="section-label dark-label">OUR PHILOSOPHY</span>
            <h2>The Pillars of Justice</h2>
          </motion.div>
          <motion.div 
            className="pillars-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="pillar-card" variants={fadeUpVariant}>
              <img src="/about_lady_justice.png" alt="Analytical Rigor" />
              <h3>Analytical Rigor</h3>
              <p>We believe that every case is a puzzle of logic. Our approach is surgical—stripping away the noise to find the core legal truth.</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeUpVariant}>
              <img src="/about_fountain_pen.png" alt="Ethical Fortitude" />
              <h3>Ethical Fortitude</h3>
              <p>Integrity is our primary asset. We provide counsel that is not only legally sound but morally defensible in the highest courts.</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeUpVariant}>
              <img src="/about_library_aisle.png" alt="Bespoke Strategy" />
              <h3>Bespoke Strategy</h3>
              <p>No two situations are identical. We reject the template, crafting unique strategies for the unique challenges of our clients.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About CTA Section */}
      <motion.section 
        className="about-cta container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUpVariant}
      >
        <div className="about-cta-content">
          <h2>Experience the Legal Mart Standard.</h2>
          <p>Connect with our partners to discuss how our history can serve your future.</p>
          <div className="about-cta-actions">
            <Button variant="primary">SCHEDULE CONSULTATION</Button>
            <Button variant="outlined">VIEW OUR PRACTICES</Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
