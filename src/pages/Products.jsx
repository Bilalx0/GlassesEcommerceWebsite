import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Kids Round Frame Sunglasses",
      price: 99.00,
      category: "Kids Glasses",
      image: "/api/placeholder/200/200",
      inStock: true
    },
    {
      id: 2,
      name: "Cat Eye Kids Sunglasses",
      price: 79.00,
      originalPrice: 99.00,
      category: "Kids Glasses",
      image: "/api/placeholder/200/200",
      inStock: true
    }
  ]);

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
            {products.map(product => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs text-cyan-400 mb-1">{product.category}</div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded hover:bg-cyan-500 transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;