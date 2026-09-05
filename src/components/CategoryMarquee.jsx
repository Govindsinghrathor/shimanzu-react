import React from 'react';
import './CategoryMarquee.css';

const CategoryMarquee = () => {
  const items = [
    "FERTILIZER 🍃", "INSECTICIDE 🍃", "HERBICIDE 🍃", "FUNGICIDE 🍃", "PGRs 🍃",
    "WP 🍃", "SC 🍃", "EC 🍃", "GR 🍃", "SG 🍃"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* Duplicate the items array multiple times to create a seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarquee;
