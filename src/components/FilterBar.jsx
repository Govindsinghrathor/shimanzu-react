import React from 'react';
import { Search, Filter } from 'lucide-react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange, currentFilter }) => {
  return (
    <div className="filter-bar">
      <div className="search-wrapper">
        <Search size={20} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by product name or active ingredient..." 
          className="search-input"
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>
      
      <div className="filter-options">
        <div className="filter-group">
          <Filter size={18} className="filter-icon" />
          <span className="filter-label">Category:</span>
          <select 
            className="filter-select"
            value={currentFilter.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Fungicide">Fungicides</option>
            <option value="Herbicide">Herbicides</option>
            <option value="Insecticide">Insecticides</option>
            <option value="PGR">PGRs</option>
          </select>
        </div>
        
        <div className="filter-group">
          <span className="filter-label">Formulation:</span>
          <select 
            className="filter-select"
            value={currentFilter.formulation}
            onChange={(e) => onFilterChange('formulation', e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="EC">EC</option>
            <option value="WP">WP</option>
            <option value="SC">SC</option>
            <option value="GR">GR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
