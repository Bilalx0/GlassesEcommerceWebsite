import React, { useState } from 'react';

const Cards = ({ 
  image ,
  title ,
  subtitle ,
  price ,
  originalPrice ,
  colorOptions // green, red, pink
}) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs">
      {/* Product Image */}
      <div className="mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Add to Cart Section */}
      <div className="my-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-lg font-medium border-b border-white transition-colors delay-100 hover:border-b hover:border-gray-600 cursor-pointer">ADD TO CART</span>
          
        </div>
      </div>

      {/* Product Details */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-800 text-lg font-medium">{title}</h3>
          <p className="text-gray-500">{subtitle}</p>
        </div>
        <div className="text-right">
          <span className="text-rose-600 font-bold text-xl">${price.toFixed(2)}</span>
          <p className="text-gray-400 line-through text-sm">
            ${originalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;