import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cards = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, selectedColor);
  };

  const [selectedColor, setSelectedColor] = useState('pink');
  
  const colorOptions = [
    { name: 'green', class: 'bg-green-500' },
    { name: 'red', class: 'bg-red-400' },
    { name: 'pink', class: 'bg-pink-300' }
  ];

  if (!product) {
    return <div className="text-gray-500">Product not available</div>;
  }

  return (
    <Link to={`/product/${product.id}`}>
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs">
      {/* Product Image */}
      <div className="mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span onClick={handleAddToCart} className="text-gray-600 text-lg font-medium border-b border-white transition-colors delay-100 hover:border-b hover:border-gray-600 cursor-pointer">
            ADD TO CART
          </span>
          <div className="flex gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                className={`w-6 h-6 rounded-full ${color.class} ${
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
      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-teal-700">${product.price}</span>
            <div className="text-gray-500 line-through">${product.originalPrice}</div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Cards;