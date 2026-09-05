import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800', title: "Tractor Farming" },
    { id: 2, src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800', title: "Crop Fields" },
    { id: 3, src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800', title: "Rice Plantation" },
    { id: 4, src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800', title: "Green Fields" },
    { id: 5, src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800', title: "Spraying Crops" },
    { id: 6, src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800', title: "Harvest Season" },
    { id: 7, src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', title: "Sustainable Farming" },
    { id: 8, src: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800', title: "Field Workers" },
    { id: 9, src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800', title: "Irrigation" },
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
