import React from 'react';
import aboutImg from '../assets/images/about-img-1.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="h2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>About Shimanzu</h1>
          <p className="text-secondary">Engineering sustainable growth.</p>
        </motion.div>
      </div>

      <div className="container" style={{ marginTop: '80px' }}>
        <div className="grid grid-cols-2 gap-8 items-center" style={{ marginBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={aboutImg} 
              alt="Lab" 
              style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)', width: '100%' }} 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="h3" style={{ color: 'var(--accent-gold)', marginBottom: '24px' }}>Our Legacy of Quality</h2>
            <p className="text-secondary" style={{ marginBottom: '16px' }}>
              We are committed to bringing the pinnacle of Japanese agricultural technology to farmers. By establishing state-of-the-art manufacturing plants, we ensure that every product meets the highest standards of quality and efficacy.
            </p>
            <p className="text-secondary">
              Our mission is to enhance crop productivity, improve farmer income, and promote sustainable agriculture across the nation through our extensive network of distributors and experts.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="h4 text-emerald" style={{ marginBottom: '16px' }}>R&D Infrastructure</h3>
            <p className="text-muted">Equipped with GLC, HPLC, and UV testing capabilities to ensure 100% molecular purity.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="h4 text-emerald" style={{ marginBottom: '16px' }}>Manufacturing</h3>
            <p className="text-muted">ISO 9001:2015 & 14001:2015 certified plants capable of producing complex formulations (EC, SC, WG).</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="h4 text-emerald" style={{ marginBottom: '16px' }}>Global Reach</h3>
            <p className="text-muted">Exporting premium agrochemicals to over 150 countries worldwide, supporting global food security.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
