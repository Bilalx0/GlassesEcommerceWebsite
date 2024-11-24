import React, { useState } from 'react';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Vintage Leather Jacket', 
      price: 129.99, 
      quantity: 1, 
      image: '/api/placeholder/100/100' 
    },
    { 
      id: 2, 
      name: 'Classic Sneakers', 
      price: 89.99, 
      quantity: 2, 
      image: '/api/placeholder/100/100' 
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <ShoppingCart className="mr-3" /> Your Cart
        </h1>
        <span className="text-xl font-semibold">Total: ${calculateTotal()}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <ShoppingCart className="mx-auto mb-4 w-16 h-16" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-md mr-4" 
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-full">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 rounded-l-full"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-full"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;