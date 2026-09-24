import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, FlaskConical, Globe, Sparkles } from 'lucide-react';
import './ImpactCounters.css';

const ImpactCounters = () => {
  const stats = [
    { 
      number: '100',
      suffix: '+',
      label: 'Team Members', 
      desc: 'Agronomists, research scientists & field advisory experts',
      icon: <Users size={28} /> 
    },
    { 
      number: '20,000',
      suffix: '+',
      label: 'Happy Clients', 
      desc: 'Farmers & progressive growers empowered nationwide',
      icon: <Award size={28} /> 
    },
    { 
      number: '200',
      suffix: '+',
      label: 'Quality Products', 
      desc: 'Certified crop protection & yield-enhancing formulations',
      icon: <FlaskConical size={28} /> 
    },
    { 
      number: '157',
      suffix: '+',
      label: 'Export Countries', 
      desc: 'Global footprint delivering premium Japanese standards',
      icon: <Globe size={28} /> 
    }
  ];

  return (
    <section className="impact-section">
      {/* Decorative ambient background glows */}
      <div className="impact-bg-glow impact-glow-left" />
      <div className="impact-bg-glow impact-glow-right" />

      <div className="container impact-container">
        {/* Header pill & title */}
        <motion.div 
          className="impact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="impact-badge">
            <Sparkles size={14} className="impact-badge-icon" />
            <span>PROVEN EXCELLENCE AT SCALE</span>
          </div>
          <h2 className="impact-heading">Our Global Agricultural Impact</h2>
          <p className="impact-subheading">
            Decades of Japanese chemical science and field dedication, delivering tangible results for farmers worldwide.
          </p>
        </motion.div>

        {/* 4 Stat Cards */}
        <div className="impact-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="impact-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              {/* Top luxury gold highlight line */}
              <div className="impact-card-topline" />

              {/* Glowing Icon Badge */}
              <div className="impact-icon-orb">
                {stat.icon}
              </div>

              {/* Value with styled Plus */}
              <div className="impact-value-wrap">
                <span className="impact-number">{stat.number}</span>
                <span className="impact-suffix">{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="impact-label">{stat.label}</h3>

              {/* Description */}
              <p className="impact-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
