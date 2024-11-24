import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('pink');

  const product = products.find(p => p.id === parseInt(id));

  const colorOptions = [
    { name: 'green', class: 'bg-green-500' },
    { name: 'red', class: 'bg-red-400' },
    { name: 'pink', class: 'bg-pink-300' }
  ];

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.category}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-blue-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-medium mb-2">Select Color</h3>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name 
                      ? 'ring-2 ring-offset-2 ring-gray-400' 
                      : ''
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>

          {/* Product Description */}
          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;