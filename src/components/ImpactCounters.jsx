import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Lightbulb, Briefcase } from 'lucide-react';
import './ImpactCounters.css';

const ImpactCounters = () => {
  const stats = [
    { label: 'Team Members', value: '100+', icon: <Users size={32} /> },
    { label: 'Happy Clients', value: '20,000+', icon: <Star size={32} /> },
    { label: 'Products', value: '200+', icon: <Lightbulb size={32} /> },
    { label: 'Exports Countries', value: '157+', icon: <Briefcase size={32} /> }
  ];

  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="impact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-emerald)' }}
            >
              <div className="impact-icon-wrapper" style={{ color: 'var(--accent-emerald)', marginBottom: '16px' }}>
                {stat.icon}
              </div>
              <h3 className="impact-value">{stat.value}</h3>
              <p className="impact-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
