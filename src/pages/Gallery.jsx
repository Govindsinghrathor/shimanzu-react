import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/images/1713003050.webp';
import img2 from '../assets/images/1713003056.webp';
import img3 from '../assets/images/1713003063.webp';
import img4 from '../assets/images/1694428044.webp';
import img5 from '../assets/images/1694428114.webp';
import img6 from '../assets/images/1694428214.webp';

const Gallery = () => {
  const images = [
    { id: 1, src: img1, title: "Farm Production" },
    { id: 2, src: img2, title: "Agricultural Research" },
    { id: 3, src: img3, title: "Tractor Operations" },
    { id: 4, src: img4, title: "Crop Yields" },
    { id: 5, src: img5, title: "Wheat Fields" },
    { id: 6, src: img6, title: "Sustainable Farming" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="h2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Gallery</h1>
          <p className="text-secondary">Home / Gallery</p>
        </motion.div>
      </div>

      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="grid grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {images.map((img) => (
              <motion.div 
                key={img.id} 
                variants={itemVariants}
                style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
              >
                <motion.img 
                  src={img.src} 
                  alt={img.title} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
