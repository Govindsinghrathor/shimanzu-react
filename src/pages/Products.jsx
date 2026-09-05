import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { motion } from 'framer-motion';

import img1 from '../assets/images/1713008833.webp';
import img2 from '../assets/images/1713008853.webp';
import img3 from '../assets/images/1713009018.webp';
import img4 from '../assets/images/1713009051.webp';
import img5 from '../assets/images/1713009112.webp';
import img6 from '../assets/images/1713009164.webp';

const Products = () => {
  const [filter, setFilter] = useState({ search: '', category: 'All', formulation: 'All' });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample data simulating a real catalog
  const products = [
    {
      id: 1,
      name: 'M-45 Mancozeb 75% WP',
      chemical: 'Mancozeb 75% WP',
      category: 'Fungicide',
      formulation: 'WP',
      inStock: true,
      packSizes: ['500g', '1kg', '5kg'],
      crops: ['Potato', 'Tomato', 'Grapes', 'Apple'],
      imgSrc: img1
    },
    {
      id: 2,
      name: 'Khufia Fopronil 40%',
      chemical: 'Fipronil 40% SC',
      category: 'Insecticide',
      formulation: 'SC',
      inStock: true,
      packSizes: ['250ml', '500ml', '1L'],
      crops: ['Cotton', 'Paddy', 'Chilli'],
      imgSrc: img2
    },
    {
      id: 3,
      name: 'Black Label',
      chemical: 'Pretilachlor 50% EC',
      category: 'Herbicide',
      formulation: 'EC',
      inStock: false,
      packSizes: ['500ml', '1L', '5L'],
      crops: ['Paddy'],
      imgSrc: img3
    },
    {
      id: 4,
      name: 'Hanako Growth Promoter',
      chemical: 'Bio-stimulant Extract',
      category: 'PGR',
      formulation: 'SL',
      inStock: true,
      packSizes: ['100ml', '250ml', '500ml'],
      crops: ['All Crops', 'Vegetables', 'Fruits'],
      imgSrc: img4
    },
    {
      id: 5,
      name: 'Volvo Systemic',
      chemical: 'Hexaconazole 5% SC',
      category: 'Fungicide',
      formulation: 'SC',
      inStock: true,
      packSizes: ['250ml', '500ml', '1L'],
      crops: ['Mango', 'Rice', 'Groundnut'],
      imgSrc: img5
    },
    {
      id: 6,
      name: 'Forodon 3G',
      chemical: 'Carbofuran 3% CG',
      category: 'Insecticide',
      formulation: 'GR',
      inStock: true,
      packSizes: ['1kg', '5kg', '10kg'],
      crops: ['Sugarcane', 'Maize', 'Paddy'],
      imgSrc: img6
    }
  ];

  const handleFilterChange = (type, value) => {
    setFilter(prev => ({ ...prev, [type]: value }));
  };

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(filter.search.toLowerCase()) || 
                        product.chemical.toLowerCase().includes(filter.search.toLowerCase());
    const matchCategory = filter.category === 'All' || product.category === filter.category;
    const matchFormulation = filter.formulation === 'All' || product.formulation === filter.formulation;
    
    return matchSearch && matchCategory && matchFormulation;
  });

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: 'var(--bg-card)', padding: '60px 0', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="h2" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Our Product Catalog</h1>
          <p className="text-secondary">Precision chemistry for maximum yield.</p>
        </motion.div>
      </div>

      <section className="section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FilterBar currentFilter={filter} onFilterChange={handleFilterChange} />
          </motion.div>
          
          <div className="grid grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ProductCard product={product} onViewClick={setSelectedProduct} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}
            >
              <h3 className="h4" style={{ marginBottom: '1rem' }}>No products found</h3>
              <p>Try adjusting your search or filters.</p>
              <button 
                className="btn btn-outline-gold" 
                style={{ marginTop: '1rem' }}
                onClick={() => setFilter({ search: '', category: 'All', formulation: 'All' })}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default Products;
