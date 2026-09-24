import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Warehouse, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Layers, 
  Clock, 
  Boxes,
  FlaskConical,
  Award,
  Globe
} from 'lucide-react';
import aboutImg from '../assets/images/about-img-1.jpg';
import './About.css';

// Import Godown/Warehouse photos
import godown1 from '../assets/images/godown/godown-1.jpeg';
import godown2 from '../assets/images/godown/godown-2.jpeg';
import godown3 from '../assets/images/godown/godown-3.jpeg';
import godown4 from '../assets/images/godown/godown-4.jpeg';

const GODOWN_GALLERY = [
  {
    id: 1,
    img: godown1,
    badge: 'PRIMARY DISTRIBUTION HUB',
    tag: '50,000+ SQ. FT. CAPACITY',
    title: 'Central Inventory Stacks & Staging Area',
    desc: 'High-density vertical storage holding ready-to-dispatch master cartons of herbicides, insecticides, and fungicides, organized for rapid multi-state freight.'
  },
  {
    id: 2,
    img: godown2,
    badge: 'BULK STORAGE BAY',
    tag: '500+ MT BUFFER',
    title: 'Bulk Finished Goods & Secondary Storage',
    desc: 'Heavy-duty multi-layer stacking zone with climate and moisture regulation, keeping bulk agricultural chemical formulations pristine before distribution.'
  },
  {
    id: 3,
    img: godown3,
    badge: 'FORMULATION & GRANULE WING',
    tag: 'READY DISPATCH',
    title: 'Granular Packaging & Specialty Inventory',
    desc: 'Dedicated organized storage for granular insecticides and bio-stimulants in tamper-evident multi-ply valve bags, segmented by batch lot numbers.'
  },
  {
    id: 4,
    img: godown4,
    badge: 'LOGISTICS & DISPATCH CORRIDOR',
    tag: '24/7 FREIGHT STAGING',
    title: 'Main Dispatch Corridor & Quality Check Lot',
    desc: 'Spacious logistics aisles allowing swift forklift movement, systematic barcode scanning, and thorough quality inspection prior to nationwide distribution.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
};

const vp = { once: true, margin: '-50px' };

const About = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="about-page-wrap">
      {/* Page Header */}
      <div className="about-hero-header">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <span className="about-badge-pill">
            <Building2 size={14} /> SHIMANZU CHEMICALS PVT. LTD.
          </span>
          <h1 className="about-page-title">About Shimanzu</h1>
          <p className="about-page-subtitle">
            Pioneering Japanese agricultural technology, world-class formulations, and nationwide supply chain infrastructure.
          </p>
        </motion.div>
      </div>

      <div className="container" style={{ marginTop: '70px', marginBottom: '80px' }}>
        {/* Legacy of Quality */}
        <div className="grid grid-cols-2 gap-8 items-center" style={{ marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={aboutImg} 
              alt="Shimanzu Quality Lab" 
              style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)', width: '100%', display: 'block', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }} 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-pill-badge" style={{ marginBottom: '14px' }}>OUR HERITAGE</span>
            <h2 className="h3" style={{ color: '#ffffff', marginBottom: '20px' }}>Our Legacy of Quality & Precision</h2>
            <p className="text-secondary" style={{ marginBottom: '16px', lineHeight: '1.8' }}>
              Shimanzu Chemicals Private Limited is committed to bringing the pinnacle of Japanese agricultural technology to farmers across India and the globe. By establishing state-of-the-art manufacturing plants, we ensure that every formulation meets the highest standards of purity, efficacy, and environmental safety.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.8' }}>
              Our mission is to enhance crop productivity, maximize farm income, and champion sustainable agriculture through our robust nationwide network of dealers, distributors, and certified agronomists.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-3 gap-6 text-center" style={{ marginBottom: '90px' }}>
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            style={{ padding: '36px 28px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <div style={{ color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <FlaskConical size={32} />
            </div>
            <h3 className="h4 text-emerald" style={{ marginBottom: '14px' }}>R&D Infrastructure</h3>
            <p className="text-muted" style={{ lineHeight: '1.6' }}>Equipped with advanced GLC, HPLC, and UV testing capabilities ensuring 100% molecular purity and formulation stability.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            style={{ padding: '36px 28px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <div style={{ color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <Award size={32} />
            </div>
            <h3 className="h4 text-emerald" style={{ marginBottom: '14px' }}>Certified Manufacturing</h3>
            <p className="text-muted" style={{ lineHeight: '1.6' }}>ISO 9001:2015 & 14001:2015 certified plants capable of producing complex formulations (EC, SC, WG) under strict Japanese supervision.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            style={{ padding: '36px 28px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <div style={{ color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <Globe size={32} />
            </div>
            <h3 className="h4 text-emerald" style={{ marginBottom: '14px' }}>Global Supply Chain</h3>
            <p className="text-muted" style={{ lineHeight: '1.6' }}>Exporting high-efficacy agrochemicals and rutile grade pigments to over 157 countries worldwide with guaranteed lot traceability.</p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          WAREHOUSE & GODOWN INFRASTRUCTURE SECTION
          ========================================================================= */}
      <section className="warehouse-section">
        <div className="container">
          <div className="warehouse-header-wrap">
            <span className="about-badge-pill">
              <Warehouse size={14} /> WAREHOUSING & INVENTORY SCALE
            </span>
            <h2 className="h2" style={{ color: '#ffffff', marginBottom: '14px' }}>
              Our Godown & Storage Infrastructure
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Real-time glimpse inside Shimanzu's massive storage facilities. With modern climate regulation, high-throughput logistics aisles, and extensive safety protocols, we maintain ample buffer inventory to serve agricultural demand year-round.
            </p>
          </div>

          {/* Infrastructure Metrics Bar */}
          <div className="warehouse-stats-bar">
            <div className="wh-stat-card">
              <div className="wh-stat-number">50,000+</div>
              <div className="wh-stat-label">SQ. FT. STORAGE AREA</div>
            </div>
            <div className="wh-stat-card">
              <div className="wh-stat-number">500+ MT</div>
              <div className="wh-stat-label">READY INVENTORY BUFFER</div>
            </div>
            <div className="wh-stat-card">
              <div className="wh-stat-number">100%</div>
              <div className="wh-stat-label">BATCH TRACEABILITY</div>
            </div>
            <div className="wh-stat-card">
              <div className="wh-stat-number">24/7</div>
              <div className="wh-stat-label">EXPEDITED DISPATCH</div>
            </div>
          </div>

          {/* Godown Photos 2x2 Interactive Grid */}
          <div className="godown-photos-grid">
            {GODOWN_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="godown-photo-card"
                onClick={() => setSelectedPhoto(item)}
              >
                <div className="godown-img-wrap">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="godown-img"
                    loading="lazy"
                  />
                  <div className="godown-zoom-overlay">
                    <span className="zoom-pill">
                      <Maximize2 size={15} /> Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="godown-card-caption">
                  <div className="godown-caption-top">
                    <span className="godown-badge">{item.badge}</span>
                    <span className="godown-capacity-tag">{item.tag}</span>
                  </div>
                  <h3 className="godown-title">{item.title}</h3>
                  <p className="godown-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Fullscreen Godown Inspection */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="godown-modal-backdrop" onClick={() => setSelectedPhoto(null)}>
            <motion.div 
              className="godown-modal-box"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="godown-modal-close" 
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image"
              >
                <X size={22} />
              </button>

              <img 
                src={selectedPhoto.img} 
                alt={selectedPhoto.title} 
                className="godown-modal-img" 
              />

              <div className="godown-modal-footer">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="godown-badge">{selectedPhoto.badge}</span>
                  <span className="godown-capacity-tag">{selectedPhoto.tag}</span>
                </div>
                <h3 className="godown-modal-title">{selectedPhoto.title}</h3>
                <p className="godown-modal-desc">{selectedPhoto.desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
