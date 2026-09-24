import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ImpactCounters from '../components/ImpactCounters';
import CategoryMarquee from '../components/CategoryMarquee';
import { 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  FlaskConical, 
  Globe, 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import aboutImg from '../assets/images/about-img-1.jpg';
import whyImg from '../assets/images/why.webp';
import prod1 from '../assets/images/1713008833.webp';
import prod2 from '../assets/images/1713008853.webp';
import prod3 from '../assets/images/1713009018.webp';
import prod4 from '../assets/images/1713009051.webp';
import prod5 from '../assets/images/1713009112.webp';
import prod6 from '../assets/images/1713009164.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const vp = { once: true, margin: '-60px' };

const ALL_PRODUCTS = [
  { 
    id: 1,
    img: prod1, 
    tag: 'HERBICIDE', 
    tagColor: '#10b981', 
    tagBg: 'rgba(16,185,129,0.12)', 
    name: 'Black Label', 
    chemical: 'Biscpyribac Sodium 10% SC', 
    desc: 'Premium post-emergence weed control solution specially formulated for paddy and primary cereal crops.',
    highlight: 'Broad-Spectrum Action'
  },
  { 
    id: 2,
    img: prod2, 
    tag: 'INSECTICIDE', 
    tagColor: '#d4af37', 
    tagBg: 'rgba(212,175,55,0.12)', 
    name: 'Khufia Fopronil 40%', 
    chemical: 'Fipronil 40% SC', 
    desc: 'Advanced broad-spectrum protection against chewing pests, stem borers, and sucking insect complexes.',
    highlight: 'Dual Mode of Action'
  },
  { 
    id: 3,
    img: prod3, 
    tag: 'INSECTICIDE', 
    tagColor: '#38bdf8', 
    tagBg: 'rgba(56,189,248,0.12)', 
    name: 'Forodon 3G', 
    chemical: 'Carbofuran 3% CG', 
    desc: 'Premium granular soil insecticide with systemic translocation for enhanced root and seedling safety.',
    highlight: 'Root-Zone Shield'
  },
  { 
    id: 4,
    img: prod4, 
    tag: 'FUNGICIDE', 
    tagColor: '#f59e0b', 
    tagBg: 'rgba(245,158,11,0.12)', 
    name: 'M-45 Mancozeb', 
    chemical: 'Mancozeb 75% WP', 
    desc: 'Trusted contact fungicide with multi-site activity protecting vegetables, fruits, and field crops from blights.',
    highlight: 'Zero Resistance Risk'
  },
  { 
    id: 5,
    img: prod5, 
    tag: 'PGR', 
    tagColor: '#34d399', 
    tagBg: 'rgba(52,211,153,0.12)', 
    name: 'Hanako Growth Promoter', 
    chemical: 'Bio-stimulant Extract + Micro-nutrients', 
    desc: 'Japanese bio-stimulant formulation boosting root proliferation, flowering retention, and overall harvest quality.',
    highlight: 'Max Yield Booster'
  },
  { 
    id: 6,
    img: prod6, 
    tag: 'FUNGICIDE', 
    tagColor: '#d4af37', 
    tagBg: 'rgba(212,175,55,0.12)', 
    name: 'Volvo Systemic', 
    chemical: 'Hexaconazole 5% SC', 
    desc: 'Highly systemic triazole fungicide delivering curative, preventive, and eradicative protection against fungal pathogens.',
    highlight: 'Long-Lasting Defense'
  },
];

const features = [
  { icon: <FlaskConical size={28} />, title: 'R&D Excellence', desc: 'State-of-the-art research labs with advanced molecular testing capabilities ensuring 100% purity.' },
  { icon: <Award size={28} />, title: 'ISO Certified', desc: 'ISO 9001:2015 & 14001:2015 certified manufacturing processes meeting global standards.' },
  { icon: <Globe size={28} />, title: 'Global Exports', desc: 'Exporting to 157+ countries worldwide, supporting global food security and sustainable farming.' },
  { icon: <Users size={28} />, title: '20,000+ Farmers', desc: 'Trusted by over 20,000 happy clients and farmers across India and beyond.' },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Products' },
  { id: 'HERBICIDE', label: 'Herbicides' },
  { id: 'INSECTICIDE', label: 'Insecticides' },
  { id: 'FUNGICIDE', label: 'Fungicides' },
  { id: 'PGR', label: 'Plant Growth (PGR)' },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.tag === activeTab);
  }, [activeTab]);

  return (
    <>
      <HeroSection />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* Features Strip */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                whileHover={{ y: -8, borderColor: 'var(--accent-gold)' }}
                style={{ background: 'var(--bg-dark)', padding: '32px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', transition: 'border-color 0.3s' }}
              >
                <motion.div
                  style={{ color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="h5" style={{ marginBottom: '10px' }}>{f.title}</h3>
                <p className="text-secondary" style={{ lineHeight: '1.6' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp} style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <motion.img
                src={aboutImg}
                alt="About Shimanzu"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)', display: 'block' }}
              />
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={vp}>
              <motion.h6
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
                transition={{ delay: 0.1 }}
                style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}
              >
                About Us
              </motion.h6>
              <motion.h2
                className="h2"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                transition={{ delay: 0.2 }}
                style={{ marginBottom: '24px' }}
              >
                SHIMANZU CHEMICALS PRIVATE LIMITED
              </motion.h2>
              <motion.p
                className="text-secondary"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                transition={{ delay: 0.3 }}
                style={{ marginBottom: '16px', lineHeight: '1.8' }}
              >
                Shimanzu Chemicals Private Limited is a leading agrochemical company committed to bringing the pinnacle of Japanese agricultural technology to farmers across India and the world. We establish state-of-the-art manufacturing plants capable of producing complex formulations (EC, SC, WG) to ensure every product meets the highest standards.
              </motion.p>
              <motion.p
                className="text-secondary"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                transition={{ delay: 0.4 }}
                style={{ marginBottom: '32px', lineHeight: '1.8' }}
              >
                Our mission is to enhance crop productivity, improve farmer income, and promote sustainable agriculture across the nation through our extensive network of distributors and agrochemical experts.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.5 }}>
                <Link to="/about" className="btn btn-outline-gold">Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImpactCounters />

      {/* =========================================================================
          3. FEATURED PRODUCTS SECTION (ELEVATED LUXURY UI)
          ========================================================================= */}
      <section className="featured-products-section">
        <div className="container">
          <motion.div
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={vp}
            className="featured-header-wrap"
          >
            <span className="section-pill-badge">
              <Sparkles size={14} /> SIGNATURE AGROCHEMICAL PORTFOLIO
            </span>
            <h2 className="h2" style={{ color: '#fff' }}>Featured Products</h2>
            <p className="text-secondary" style={{ marginTop: '12px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Precision chemistry for maximum yield — trusted by farmers across 157+ countries.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <div className="featured-filter-tabs">
            {FILTER_TABS.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`featured-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div 
            layout
            className="featured-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={vp}
                  className="luxury-product-card"
                >
                  {/* Top Bar Tags */}
                  <div className="card-header-tags">
                    <span 
                      className="category-tag-pill" 
                      style={{ 
                        backgroundColor: p.tagBg, 
                        color: p.tagColor,
                        borderColor: `${p.tagColor}50`
                      }}
                    >
                      {p.tag}
                    </span>
                    <span className="jp-tech-tag">🇯🇵 JAPAN TECH</span>
                  </div>

                  {/* Studio White Pedestal Image */}
                  <div className="card-image-pedestal">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="card-product-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="card-content-body">
                    <h3 className="card-product-title">{p.name}</h3>
                    
                    <div className="card-chemical-pill">
                      <FlaskConical size={14} />
                      <span>{p.chemical}</span>
                    </div>

                    <p className="card-product-desc">{p.desc}</p>

                    <Link to="/products" className="card-action-btn">
                      <span>View Product</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={vp}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <Link to="/products" className="btn-cta-gold">
              View All Products <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE US & CTA BANNER SECTION (ELEVATED MODERN UI)
          ========================================================================= */}
      <section className="why-choose-luxury-section">
        <div className="container">
          <div className="why-choose-grid">
            {/* Left Column: Feature Highlights */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp} className="why-left-content">
              <span className="section-pill-badge" style={{ alignSelf: 'flex-start' }}>
                <Leaf size={14} /> WHY CHOOSE SHIMANZU
              </span>
              <h2 className="h2 why-section-title">
                Pioneering Excellence in Agrochemicals
              </h2>

              <div className="why-features-stack">
                {[
                  { 
                    icon: <ShieldCheck size={26} />, 
                    color: 'var(--accent-gold)', 
                    bg: 'rgba(212,175,55,0.15)', 
                    title: 'Quality Assurance', 
                    desc: 'ISO 9001:2015 & 14001:2015 certified processes ensuring world-class purity, strict QA batches, and international efficacy standards.' 
                  },
                  { 
                    icon: <Leaf size={26} />, 
                    color: 'var(--accent-emerald)', 
                    bg: 'rgba(16,185,129,0.15)', 
                    title: 'Eco-Friendly Formulations', 
                    desc: 'Sustainable, crop-safe agrochemicals designed to minimize environmental impact while maximizing yield output.' 
                  },
                  { 
                    icon: <FlaskConical size={26} />, 
                    color: 'var(--accent-gold)', 
                    bg: 'rgba(212,175,55,0.15)', 
                    title: 'Japanese Technology', 
                    desc: 'Advanced Japanese molecular testing & formulations (EC, SC, WG) providing rapid absorption and prolonged crop protection.' 
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    className="why-feature-card"
                  >
                    <div className="feature-icon-pod" style={{ background: item.bg, color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="feature-info-wrap">
                      <h4 className="feature-card-heading">{item.title}</h4>
                      <p className="feature-card-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Hero Visual with Overlapping Stat Cards */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={vp} className="why-right-visual">
              <div className="why-image-frame">
                <img
                  src={whyImg}
                  alt="Modern Agriculture with Shimanzu"
                  className="why-hero-photo"
                />
              </div>

              {/* Floating Stat Badge 1 (Top Left) */}
              <div className="floating-stat-badge badge-top-left">
                <div className="badge-stat-icon" style={{ background: 'rgba(212,175,55,0.2)', color: 'var(--accent-gold)' }}>
                  <Award size={22} />
                </div>
                <div>
                  <div className="badge-stat-label">ISO 9001:2015</div>
                  <div className="badge-stat-sub">Certified Labs</div>
                </div>
              </div>

              {/* Floating Stat Badge 2 (Bottom Right) */}
              <div className="floating-stat-badge badge-bottom-right">
                <div className="badge-stat-icon" style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399' }}>
                  <Users size={22} />
                </div>
                <div>
                  <div className="badge-stat-label">20,000+ Farmers</div>
                  <div className="badge-stat-sub">157+ Export Countries</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA BANNER SECTION (LUXURY EMERALD & GOLD)
          ========================================================================= */}
      <section className="luxury-cta-section">
        <div className="cta-glow-orb"></div>
        <div className="container">
          <div className="cta-content-container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <span className="cta-badge-pill">
                <Sparkles size={14} /> READY TO GROW WITH SHIMANZU?
              </span>
              <h2 className="cta-main-title">
                Elevate Your Farm Productivity With Japanese Agrochemicals
              </h2>
              <p className="cta-main-desc">
                Join over 20,000+ satisfied farmers and distributors worldwide who rely on Shimanzu formulations for superior pest defense and harvest quality.
              </p>
              <div className="cta-buttons-wrap">
                <Link to="/products" className="btn-cta-gold">
                  Explore Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </Link>
                <Link to="/contact" className="btn-cta-outline">
                  <PhoneCall size={18} style={{ marginRight: '8px' }} />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
