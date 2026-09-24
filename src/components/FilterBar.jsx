import React from 'react';
import { Search, Filter } from 'lucide-react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange, currentFilter, formulations = [] }) => {
  return (
    <div className="filter-bar">
      <div className="search-wrapper">
        <Search size={20} className="search-icon" />
        <input 
          type="text" 
          value={currentFilter.search || ''}
          placeholder="Search product name, active chemical, or crop..." 
          className="search-input"
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>
      
      <div className="filter-options">
        <div className="filter-group">
          <Filter size={18} className="filter-icon" />
          <span className="filter-label">Formulation:</span>
          <select 
            className="filter-select"
            value={currentFilter.formulation}
            onChange={(e) => onFilterChange('formulation', e.target.value)}
          >
            <option value="All">All Formulations</option>
            {formulations.map((form) => (
              <option key={form} value={form}>{form}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
