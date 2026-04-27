import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/Button';
import './Insights.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const articles = [
  {
    category: 'CORPORATE LAW',
    date: 'MAY 12, 2024',
    title: 'Environmental Liability in Modern Mergers',
    excerpt: 'Exploring the shifting responsibilities of acquiring firms in the era of strict ESG mandates.',
    image: '/insights_thumb_1.png'
  },
  {
    category: 'FIRM NEWS',
    date: 'MAY 08, 2024',
    title: 'Expanding Our Reach: The Brussels Office',
    excerpt: 'Legal Mart strengthens its European presence with a new hub dedicated to EU policy.',
    image: '/insights_thumb_2.png'
  },
  {
    category: 'LITIGATION',
    date: 'MAY 01, 2024',
    title: 'The Future of Intellectual Property Disputes',
    excerpt: 'How AI-generated assets are forcing a re-evaluation of centuries-old patent frameworks.',
    image: '/insights_thumb_3.png'
  },
  {
    category: 'SUCCESS STORIES',
    date: 'APRIL 25, 2024',
    title: 'Landmark Settlement in FinTech Antitrust',
    excerpt: 'Securing a favorable resolution for a leading startup against systemic market barriers.',
    image: '/about_fountain_pen.png'
  },
  {
    category: 'CORPORATE LAW',
    date: 'APRIL 18, 2024',
    title: 'Navigating Tax Reform in Southeast Asia',
    excerpt: 'A guide for Western firms entering the rapidly evolving regulatory markets of the Pacific Rim.',
    image: '/about_courthouse_pillars.png'
  },
  {
    category: 'LITIGATION',
    date: 'APRIL 12, 2024',
    title: 'Class Action Defense in the Tech Sector',
    excerpt: 'Developing resilient defense strategies against emerging privacy and data breach claims.',
    image: '/about_library_lamp.png'
  }
];

export const Insights = () => {
  return (
    <div className="insights-page">
      {/* Featured Hero */}
      <section className="insights-hero container">
        <motion.div 
          className="featured-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="featured-content" variants={fadeUpVariant}>
            <span className="section-label-maroon">FEATURED ANALYSIS</span>
            <h1 className="hero-headline">
              Navigating Global<br />
              Compliance in a<br />
              Digital Age
            </h1>
            <p>A comprehensive briefing on the evolving cross-border regulatory landscape for multinational digital enterprises.</p>
            <a href="#" className="read-more-link">
              Read the full analysis <ArrowRight size={18} />
            </a>
          </motion.div>
          
          <motion.div className="featured-visual" variants={fadeUpVariant}>
            <div className="featured-image-wrapper">
              <img src="/insights_featured.png" alt="Global Compliance" />
              <div className="featured-quote-card">
                <p>"The law is a living archive of human conduct."</p>
                <cite>— Heritage Digest, 2024</cite>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className="insights-filters container">
        <div className="filter-list">
          <button className="filter-btn active">All Insights</button>
          <button className="filter-btn">Corporate Law</button>
          <button className="filter-btn">Litigation</button>
          <button className="filter-btn">Firm News</button>
          <button className="filter-btn">Success Stories</button>
        </div>
        <div className="search-box-minimal">
          <Search size={18} />
        </div>
      </div>

      {/* Article Grid */}
      <section className="article-grid-section container">
        <motion.div 
          className="article-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {articles.map((article, index) => (
            <motion.div key={index} className="article-card" variants={fadeUpVariant}>
              <div className="article-thumb">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="separator">•</span>
                <span className="date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href="#" className="read-briefing">Read Briefing</a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section container">
        <motion.div 
          className="newsletter-card bg-neutral"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <div className="newsletter-content">
            <h2>Stay informed with<br />The Heritage Letter</h2>
            <p>Curated legal analysis, delivered monthly to the executive desk. No noise, just heritage-level insight.</p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input type="email" placeholder="Your professional email" />
              <Button variant="primary">Subscribe</Button>
            </div>
            <p className="form-disclaimer">STRICTLY CONFIDENTIAL. PRIVACY ASSURED.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
