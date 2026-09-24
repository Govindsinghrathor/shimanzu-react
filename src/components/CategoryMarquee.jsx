import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import './CategoryMarquee.css';

const CategoryMarquee = () => {
  const { categories } = useDataContext();

  const items = categories && categories.length > 0
    ? categories.map(c => ({
        label: `${(c.shortName || c.name).toUpperCase()} 🍃`,
        cat: c.id
      }))
    : [
        { label: "FUNGICIDES 🍃", cat: "fungicides" },
        { label: "HERBICIDES 🍃", cat: "herbicides" },
        { label: "INSECTICIDES & MITICIDES 🍃", cat: "insecticides" }
      ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <Link
            key={index}
            to={`/products?category=${item.cat}`}
            className="marquee-item"
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarquee;
