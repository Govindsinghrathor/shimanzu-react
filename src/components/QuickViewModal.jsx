import React from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import './QuickViewModal.css';

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-grid">
          <div className="modal-image-col">
            {product.imgSrc ? (
              <img src={product.imgSrc} alt={product.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
            ) : (
              <div className="modal-image-placeholder">
                <span className="modal-formulation">{product.formulation}</span>
              </div>
            )}
          </div>
          
          <div className="modal-info-col">
            <div className="modal-badges">
              <span className="badge category-badge">{product.category}</span>
              <span className={`badge stock-badge ${product.inStock ? 'in-stock' : 'low-stock'}`}>
                {product.inStock ? 'In Stock' : 'Low Stock'}
              </span>
            </div>
            
            <h2 className="modal-title h3">{product.name}</h2>
            <p className="modal-chemical">{product.chemical}</p>
            
            <div className="modal-details">
              <div className="detail-row">
                <span className="detail-label">Pack Sizes:</span>
                <span className="detail-value">{product.packSizes.join(', ')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Target Crops:</span>
                <span className="detail-value">
                  {product.crops.map((crop, idx) => (
                    <span key={idx} className="crop-tag-modal">{crop}</span>
                  ))}
                </span>
              </div>
            </div>
            
            <div className="modal-description">
              <h4 className="description-title">Product Overview</h4>
              <p className="description-text">
                This is a premium {product.category.toLowerCase()} formulated as a {product.formulation} 
                specifically designed to provide superior protection and yield enhancement for your crops.
                It features excellent rainfastness and systemic activity.
              </p>
              
              <ul className="benefits-list">
                <li><CheckCircle2 size={16} className="text-emerald" /> Broad-spectrum control</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> High efficacy at low doses</li>
                <li><CheckCircle2 size={16} className="text-emerald" /> Environmentally conscious formulation</li>
              </ul>
            </div>
            
            <div className="modal-actions">
              <a href={`https://wa.me/1234567890?text=I am interested in ${product.name}`} target="_blank" rel="noreferrer" className="btn btn-gold w-full">
                <MessageCircle size={18} style={{ marginRight: '8px' }} /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
