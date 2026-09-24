import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import './FilterSidebar.css';

const FilterSidebar = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
  formulations = [],
  selectedFormulations = [],
  onToggleFormulation,
  crops = [],
  selectedCrops = [],
  onToggleCrop,
  onResetFilters,
  hasActiveFilters
}) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    formulation: true,
    crops: true
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="fmc-filter-sidebar">
      {/* Header */}
      <div className="fmc-filter-header">
        <h4 className="fmc-filter-title">
          <SlidersHorizontal size={14} /> FILTER
        </h4>
        {hasActiveFilters && (
          <button className="fmc-clear-btn" onClick={onResetFilters}>
            CLEAR ALL
          </button>
        )}
      </div>

      {/* Categories / Product Types */}
      {categories.length > 0 && (
        <div className="fmc-filter-group">
          <button 
            className="fmc-group-toggle"
            onClick={() => toggleSection('category')}
          >
            <span className="fmc-group-name">PRODUCT TYPE</span>
            <span className={`fmc-group-arrow ${openSections.category ? 'open' : ''}`}>
              <ChevronDown size={12} />
            </span>
          </button>

          {openSections.category && (
            <div className="fmc-group-content">
              <div className="fmc-filter-list">
                <label className="fmc-checkbox-label">
                  <input 
                    type="radio" 
                    name="category-radio"
                    className="fmc-checkbox-input"
                    checked={!selectedCategory || selectedCategory === 'all'}
                    onChange={() => onSelectCategory('all')}
                  />
                  <span>All Types</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="fmc-checkbox-label">
                    <input 
                      type="radio" 
                      name="category-radio"
                      className="fmc-checkbox-input"
                      checked={selectedCategory === cat.id}
                      onChange={() => onSelectCategory(cat.id)}
                    />
                    <span>{cat.shortName || cat.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Formulations */}
      {formulations.length > 0 && (
        <div className="fmc-filter-group">
          <button 
            className="fmc-group-toggle"
            onClick={() => toggleSection('formulation')}
          >
            <span className="fmc-group-name">FORMULATION</span>
            <span className={`fmc-group-arrow ${openSections.formulation ? 'open' : ''}`}>
              <ChevronDown size={12} />
            </span>
          </button>

          {openSections.formulation && (
            <div className="fmc-group-content">
              <div className="fmc-filter-list">
                {formulations.map(form => (
                  <label key={form} className="fmc-checkbox-label">
                    <input 
                      type="checkbox"
                      className="fmc-checkbox-input"
                      checked={selectedFormulations.includes(form)}
                      onChange={() => onToggleFormulation(form)}
                    />
                    <span>{form}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Target Crops */}
      {crops.length > 0 && (
        <div className="fmc-filter-group">
          <button 
            className="fmc-group-toggle"
            onClick={() => toggleSection('crops')}
          >
            <span className="fmc-group-name">CROP</span>
            <span className={`fmc-group-arrow ${openSections.crops ? 'open' : ''}`}>
              <ChevronDown size={12} />
            </span>
          </button>

          {openSections.crops && (
            <div className="fmc-group-content">
              <div className="fmc-filter-list">
                {crops.slice(0, 8).map(crop => (
                  <label key={crop} className="fmc-checkbox-label">
                    <input 
                      type="checkbox"
                      className="fmc-checkbox-input"
                      checked={selectedCrops.includes(crop)}
                      onChange={() => onToggleCrop(crop)}
                    />
                    <span>{crop}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
