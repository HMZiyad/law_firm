import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, X } from 'lucide-react';
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
  const [articlesList, setArticlesList] = useState(articles);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState({ success: null, message: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterStatus({ success: false, message: 'Please enter a valid email address.' });
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterStatus({ success: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e2cc3a46-0ad0-4bec-a2cc-73b1daf83580',
          subject: 'New Newsletter Subscription Request',
          email: newsletterEmail,
          message: `The user with email ${newsletterEmail} has requested to subscribe to The Heritage Letter.`
        })
      });

      const result = await response.json();
      if (result.success) {
        setNewsletterStatus({ 
          success: true, 
          message: 'Thank you! You have successfully subscribed to The Heritage Letter.' 
        });
        setNewsletterEmail('');
      } else {
        setNewsletterStatus({ 
          success: false, 
          message: result.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting newsletter:', error);
      setNewsletterStatus({ 
        success: false, 
        message: 'Failed to connect. Please check your network and try again.' 
      });
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = 'AIzaSyDkPaxeejuu5sqyhWpZHxkWX_IO9P1XEO4';
        const spreadsheetId = '1kMkcPQ9RfuEUgPUXyRcdB7VYIfuVgetSLr-srUhNBIY';
        const range = 'Sheet1!A2:F';
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch from Google Sheets');
        }

        const data = await response.json();
        if (data.values && data.values.length > 0) {
          const parsed = data.values
            .map((row) => {
              const detailsVal = row[3] || '';
              const excerptVal = row[4] || '';
              return {
                title: row[0] || '',
                date: row[1] || '',
                category: row[2] || '',
                details: detailsVal || excerptVal,
                excerpt: excerptVal || (detailsVal ? (detailsVal.length > 150 ? detailsVal.substring(0, 150) + '...' : detailsVal) : ''),
                image: row[5] || '/insights_thumb_1.png'
              };
            })
            .filter((item) => item.title.trim() !== '');

          if (parsed.length > 0) {
            setArticlesList(parsed);
          }
        }
      } catch (err) {
        console.error('Error fetching blog data from Google Sheets, using fallbacks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categories = ['All Insights', 'Corporate Law', 'Litigation', 'Firm News', 'Success Stories'];

  const filteredArticles = articlesList.filter(article => {
    const matchesCategory = selectedCategory === 'All Insights' || 
      article.category.trim().toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

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
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search-box-minimal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative' }}>
          <Search size={18} style={{ color: searchQuery ? 'var(--color-primary)' : '#CCC', transition: 'color 0.3s' }} />
          <input 
            type="text" 
            placeholder="Search insights..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              borderBottom: '1px solid #EBEAE6',
              fontSize: '0.85rem',
              outline: 'none',
              padding: '0.3rem 0',
              width: '180px',
              fontFamily: 'var(--font-label)',
              color: 'var(--color-text)',
              background: 'transparent',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
            onBlur={(e) => e.target.style.borderColor = '#EBEAE6'}
          />
        </div>
      </div>

      {/* Article Grid */}
      <section className="article-grid-section container">
        {loading ? (
          <div className="article-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="article-card skeleton-card">
                <div className="skeleton-thumb"></div>
                <div className="skeleton-line short"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text" style={{ width: '80%' }}></div>
              </div>
            ))}
          </div>
        ) : filteredArticles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-light)' }}>
            <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>No briefs found</p>
            <p style={{ fontSize: '0.95rem' }}>Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <motion.div 
            className="article-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {filteredArticles.map((article, index) => (
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
                <button 
                  onClick={() => setSelectedArticle(article)} 
                  className="read-briefing"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  Read Briefing
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
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
            <form onSubmit={handleNewsletterSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  value={newsletterEmail} 
                  onChange={(e) => setNewsletterEmail(e.target.value)} 
                  placeholder="Your professional email" 
                  required 
                />
                <Button variant="primary" disabled={newsletterSubmitting}>
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>
            <p className="form-disclaimer">STRICTLY CONFIDENTIAL. PRIVACY ASSURED.</p>
            {newsletterStatus.message && (
              <div style={{
                marginTop: '1.25rem',
                padding: '0.85rem 1rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-label)',
                fontSize: '0.8rem',
                fontWeight: '600',
                backgroundColor: newsletterStatus.success ? 'rgba(110, 26, 55, 0.08)' : 'rgba(235, 94, 85, 0.08)',
                color: newsletterStatus.success ? 'var(--color-primary)' : '#D03B2E',
                border: `1px solid ${newsletterStatus.success ? 'rgba(110, 26, 55, 0.15)' : 'rgba(235, 94, 85, 0.15)'}`,
                transition: 'all 0.3s ease'
              }}>
                {newsletterStatus.message}
              </div>
            )}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            className="briefing-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              className="briefing-modal-container"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="briefing-modal-close" 
                onClick={() => setSelectedArticle(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="briefing-modal-hero">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
              </div>

              <div className="briefing-modal-content">
                <div className="briefing-modal-meta">
                  <span className="category">{selectedArticle.category}</span>
                  <span className="separator">•</span>
                  <span className="date">{selectedArticle.date}</span>
                </div>
                <h2>{selectedArticle.title}</h2>
                <div className="briefing-modal-body">
                  <p>{selectedArticle.details || selectedArticle.excerpt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
