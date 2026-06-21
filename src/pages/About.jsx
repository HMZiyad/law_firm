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
              Modern.<br />
              <em>Corporate-Focused.</em>
            </h1>
            <p className="hero-subtext">
              Legal Mart is a modern, corporate-focused law firm dedicated to delivering practical, business-oriented legal solutions in an evolving commercial landscape.
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
            <h2>About Us</h2>
            <p>We combine legal expertise with a deep understanding of business operations to help clients navigate complex legal challenges with confidence and efficiency.</p>
            <p>Our services are designed to meet the needs of corporations, startups, entrepreneurs, financial institutions, and growing enterprises. We provide strategic legal support in areas including corporate and commercial law, intellectual property, contracts, regulatory compliance, employment matters, dispute resolution, banking and finance, and business transactions.</p>
            <p>At Legal Mart, we believe legal services should be accessible, responsive, and aligned with our clients’ commercial objectives. By leveraging modern technology, efficient processes, and a client-centric approach, we strive to deliver timely, innovative, and value-driven legal solutions. Whether you are launching a new venture, protecting your intellectual assets, managing regulatory risks, or expanding your business, Legal Mart is committed to being your trusted legal partner every step of the way.</p>
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
