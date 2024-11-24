import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const Products = () => {
  const { products } = useContext(DataContext);

  const [filters, setFilters] = useState({
    availability: [],
    priceRange: { min: 0, max: 99 },
    brand: []
  });

  const [sortBy, setSortBy] = useState('best-selling');

  const handleAvailabilityChange = (value) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter(item => item !== value)
        : [...prev.availability, value]
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: value
      }
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        
      </div>
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
            
            {/* Availability Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">AVAILABILITY</h3>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="inStock"
                  className="mr-2"
                  onChange={() => handleAvailabilityChange('inStock')}
                />
                <label htmlFor="inStock">In stock (5)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="outOfStock"
                  className="mr-2"
                  onChange={() => handleAvailabilityChange('outOfStock')}
                />
                <label htmlFor="outOfStock">Out of stock (0)</label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">PRICE</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-24 border rounded px-2 py-1"
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-24 border rounded px-2 py-1"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm">
              <span className="text-gray-500">Home / Kids Glasses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select
                className="border rounded px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="best-selling">Best selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;