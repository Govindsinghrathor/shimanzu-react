import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ImpactCounters from '../components/ImpactCounters';
import CategoryMarquee from '../components/CategoryMarquee';
import { ArrowRight, ShieldCheck, Leaf, FlaskConical, Globe, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import aboutImg from '../assets/images/about-img-1.jpg';
import whyImg from '../assets/images/why.webp';
import prod1 from '../assets/images/1713008833.webp';
import prod2 from '../assets/images/1713008853.webp';
import prod3 from '../assets/images/1713009018.webp';
import prod4 from '../assets/images/1713009051.webp';
import prod5 from '../assets/images/1713009112.webp';
import prod6 from '../assets/images/1713009164.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const vp = { once: true, margin: '-80px' };

const products = [
  { img: prod1, tag: 'HERBICIDE', tagColor: 'var(--accent-emerald)', name: 'Black Label', chemical: 'Biscpyribac Sodium 10% SC', desc: 'Premium weed control solution for paddy and primary crops.' },
  { img: prod2, tag: 'INSECTICIDE', tagColor: 'var(--accent-gold)', name: 'Khufia Fopronil 40%', chemical: 'Fipronil 40% SC', desc: 'Advanced broad-spectrum protection against chewing pests.' },
  { img: prod3, tag: 'INSECTICIDE', tagColor: 'var(--accent-emerald)', name: 'Forodon 3G', chemical: 'Carbofuran 3% CG', desc: 'Premium soil insecticide for enhanced crop safety.' },
  { img: prod4, tag: 'FUNGICIDE', tagColor: 'var(--accent-gold)', name: 'M-45 Mancozeb', chemical: 'Mancozeb 75% WP', desc: 'Broad-spectrum fungicide for disease-free crops.' },
  { img: prod5, tag: 'PGR', tagColor: 'var(--accent-emerald)', name: 'Hanako Growth Promoter', chemical: 'Bio-stimulant Extract', desc: 'Boosts plant growth and improves overall yield quality.' },
  { img: prod6, tag: 'FUNGICIDE', tagColor: 'var(--accent-gold)', name: 'Volvo Systemic', chemical: 'Hexaconazole 5% SC', desc: 'Systemic fungicide with long-lasting crop protection.' },
];

const features = [
  { icon: <FlaskConical size={28} />, title: 'R&D Excellence', desc: 'State-of-the-art research labs with advanced molecular testing capabilities ensuring 100% purity.' },
  { icon: <Award size={28} />, title: 'ISO Certified', desc: 'ISO 9001:2015 & 14001:2015 certified manufacturing processes meeting global standards.' },
  { icon: <Globe size={28} />, title: 'Global Exports', desc: 'Exporting to 157+ countries worldwide, supporting global food security and sustainable farming.' },
  { icon: <Users size={28} />, title: '20,000+ Farmers', desc: 'Trusted by over 20,000 happy clients and farmers across India and beyond.' },
];

const Home = () => {
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

      {/* Featured Products */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h6 style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Our Products</h6>
            <h2 className="h2">Featured Products</h2>
            <p className="text-secondary" style={{ marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>
              Precision chemistry for maximum yield — trusted by farmers across 157+ countries.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                whileHover={{ y: -10, boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}
                style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
              >
                <span style={{ background: 'rgba(212,175,55,0.1)', color: p.tagColor, padding: '4px 14px', borderRadius: 'var(--radius-full)', fontWeight: '700', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                  {p.tag}
                </span>
                <motion.img
                  src={p.img}
                  alt={p.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{ height: '180px', objectFit: 'contain', marginBottom: '1.5rem' }}
                />
                <h3 className="h5" style={{ marginBottom: '6px' }}>{p.name}</h3>
                <p style={{ color: 'var(--accent-gold)', marginBottom: '12px', fontWeight: '600' }}>{p.chemical}</p>
                <p className="text-secondary" style={{ marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>{p.desc}</p>
                <Link to="/products" className="btn btn-outline-gold" style={{ width: '100%' }}>View Product</Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <Link to="/products" className="btn btn-gold">
              View All Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp}>
              <h6 style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>Why Choose Us</h6>
              <h2 className="h2" style={{ marginBottom: '32px' }}>Pioneering Excellence in Agrochemicals</h2>

              {[
                { icon: <ShieldCheck size={24} />, color: 'var(--accent-gold)', bg: 'rgba(212,175,55,0.1)', title: 'Quality Assurance', desc: 'ISO 9001:2015 & 14001:2015 certified processes ensuring world-class standards in every product.' },
                { icon: <Leaf size={24} />, color: 'var(--accent-emerald)', bg: 'rgba(16,185,129,0.1)', title: 'Eco-Friendly Solutions', desc: 'Sustainable agrochemical products designed to protect the environment while maximizing crop yield.' },
                { icon: <FlaskConical size={24} />, color: 'var(--accent-gold)', bg: 'rgba(212,175,55,0.1)', title: 'Japanese Technology', desc: 'Advanced Japanese R&D and manufacturing technology for superior product efficacy and safety.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    style={{ background: item.bg, color: item.color, padding: '14px', borderRadius: '50%', height: 'fit-content', flexShrink: 0 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="h5" style={{ marginBottom: '6px' }}>{item.title}</h4>
                    <p className="text-secondary" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={vp} style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <motion.img
                src={whyImg}
                alt="Why Shimanzu"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', border: '1px solid var(--border-color)', display: 'block' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #8B0000 0%, #3a0000 50%, #1a0a00 100%)',
          padding: '80px 0', textAlign: 'center', position: 'relative', overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,215,0,0.08)', top: '-150px', right: '-100px' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2
            className="h2"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ delay: 0.1 }}
            style={{ color: '#fff', marginBottom: '16px' }}
          >
            Ready to Grow with Shimanzu?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '36px' }}
          >
            Join 20,000+ farmers who trust Shimanzu for quality agrochemical solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/products" className="btn btn-gold">Explore Products <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
            <Link to="/contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff', background: 'transparent' }}>Contact Us</Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
