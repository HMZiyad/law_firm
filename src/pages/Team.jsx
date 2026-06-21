import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { teamProfiles } from './teamProfiles';
import './Team.css';

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

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="team-page">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="team-header"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="section-label" variants={fadeUpVariant}>
            LEADERSHIP & ADVOCACY
          </motion.span>
          <motion.h1 className="team-headline" variants={fadeUpVariant}>
            Our Advocates<br />
            of <em>Justice.</em>
          </motion.h1>
          <motion.div className="team-header-content" variants={fadeUpVariant}>
            <p style={{ maxWidth: '600px' }}>
              At Legal Mart, our strength lies in our people. Our team consists of dedicated legal professionals with diverse expertise across corporate and commercial law, intellectual property, banking and finance, dispute resolution, regulatory compliance, and business advisory services. We combine legal excellence with a practical understanding of the commercial realities faced by modern businesses.
            </p>
            <div className="team-stats">
              <h2>24<span>+</span></h2>
              <p>SENIOR PARTNERS</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Senior Partners Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="team-section-title" variants={fadeUpVariant}>
            <div className="team-section-line"></div>
            <h3>Senior Partners</h3>
          </motion.div>

          <div className="senior-partners-grid">
            {/* Wide Card */}
            <motion.div 
              className="partner-card wide" 
              variants={fadeUpVariant}
              onClick={() => openModal(teamProfiles.badal)}
            >
              <div className="partner-img-wrapper">
                <img src={teamProfiles.badal.image} alt={teamProfiles.badal.name} />
                <div className="partner-info-overlay">
                  <span className="badge">{teamProfiles.badal.designation}</span>
                  <h3>{teamProfiles.badal.name}</h3>
                </div>
              </div>
              <div className="partner-desc">
                <p>{teamProfiles.badal.shortDesc}</p>
              </div>
            </motion.div>

            {/* Standard Card */}
            <motion.div 
              className="partner-card standard" 
              variants={fadeUpVariant}
              onClick={() => openModal(teamProfiles.jahidul)}
            >
              <div className="partner-img-wrapper">
                <img src={teamProfiles.jahidul.image} alt={teamProfiles.jahidul.name} />
              </div>
              <div className="partner-info">
                <h3>{teamProfiles.jahidul.name}</h3>
                <span className="designation">{teamProfiles.jahidul.designation}</span>
                <p>{teamProfiles.jahidul.shortDesc}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Board & Associates Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="team-section-title" variants={fadeUpVariant}>
            <div className="team-section-line"></div>
            <h3>Board & Associates</h3>
          </motion.div>

          <motion.div className="associates-grid" variants={staggerContainer}>
            {[teamProfiles.khokon, teamProfiles.maria, teamProfiles.rahul, teamProfiles.tamimur].map((member, index) => (
              <motion.div 
                key={member.id} 
                className="associate-card" 
                variants={fadeUpVariant}
                onClick={() => openModal(member)}
              >
                <div className="associate-img-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="associate-info">
                  <h4>{member.name}</h4>
                  <span className="designation">{member.designation}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="team-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <div className="team-cta-content">
            <h2>Expertise is only a<br /><em><span className="text-primary">Conversation</span></em> away.</h2>
            <p>Our partners are ready to review your case and provide strategic counsel tailored to your specific legal requirements.</p>
            <div className="team-cta-actions">
              <Button variant="primary">Schedule Appointment</Button>
              <button className="btn-secondary">Download Firm Profile</button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>&times;</button>
              
              <div className="modal-header">
                <div className="modal-img-wrapper">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal-title">
                  <span className="modal-designation">{selectedMember.roleLabel} &bull; {selectedMember.designation}</span>
                  <h2>{selectedMember.name}</h2>
                </div>
              </div>

              <div className="modal-body">
                {selectedMember.profile.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
