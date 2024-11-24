import React from 'react';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleUpdateQuantity = (id, selectedColor, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id, selectedColor);
    } else {
      updateQuantity(id, selectedColor, newQuantity);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <ShoppingCart className="mr-3" /> Your Cart
        </h1>
        <span className="text-xl font-semibold">
          Total: ${getCartTotal().toFixed(2)}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <ShoppingCart className="mx-auto mb-4 w-16 h-16" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.selectedColor}`}
              className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <div className="space-y-1">
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 capitalize">
                    Color: {item.selectedColor}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-full">
                  <button
                    onClick={() => handleUpdateQuantity(
                      item.id,
                      item.selectedColor,
                      item.quantity - 1
                    )}
                    className="p-2 hover:bg-gray-100 rounded-l-full"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(
                      item.id,
                      item.selectedColor,
                      item.quantity + 1
                    )}
                    className="p-2 hover:bg-gray-100 rounded-r-full"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedColor)}
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