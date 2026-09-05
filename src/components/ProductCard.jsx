import React from 'react';
import { Beaker, Eye, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, onViewClick }) => {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onViewClick(product)}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-badges">
        <span className="badge category-badge">{product.category}</span>
        <span className={`badge stock-badge ${product.inStock ? 'in-stock' : 'low-stock'}`}>
          {product.inStock ? 'In Stock' : 'Low Stock'}
        </span>
      </div>
      
      <div className="product-image-container">
        {product.imgSrc ? (
          <img src={product.imgSrc} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="placeholder-image">
            <Beaker size={48} className="placeholder-icon" />
            <span className="formulation-badge">{product.formulation}</span>
          </div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-chemical">{product.chemical}</p>
        
        <div className="product-features">
          <div className="feature-pill">
            <Package size={14} /> {product.packSizes[0]}+
          </div>
        </div>
        
        <motion.button 
          className="btn btn-outline-gold quick-view-btn" 
          whileHover={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)' }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onViewClick(product);
          }}
        >
          <Eye size={18} style={{ marginRight: '8px' }} /> Quick View
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
