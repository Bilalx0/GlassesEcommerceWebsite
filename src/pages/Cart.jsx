import React from 'react';
import { Trash2, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
    <div>

    <section>
  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden shadow-lg">
    <img src="/page-main-image.jpg" className="object-cover w-full h-96" alt="Autumn scene" />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>
      <p className="mt-4 font-medium">Home / Shopping Cart</p>
    </div>
  </div>
</section>
    <div className="container mx-auto  max-w-5xl px-6 py-20">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
          Shopping Cart
        </h1>
        <span className="text-lg sm:text-xl font-semibold">
          Total: ${getCartTotal().toFixed(2)}
        </span>
      </div>

      <div className="space-y-4">
      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <ShoppingCart className="mx-auto mb-4 w-16 h-16" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedColor}`}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-24 md:h-24 object-cover rounded-md mb-4 md:mr-4"
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
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center border rounded-full">
                <button
                  onClick={() =>
                    handleUpdateQuantity(
                      item.id,
                      item.selectedColor,
                      item.quantity - 1
                    )
                  }
                  className="p-2 hover:bg-gray-100 rounded-l-full"
                >
                  <Minus size={20} />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateQuantity(
                      item.id,
                      item.selectedColor,
                      item.quantity + 1
                    )
                  }
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
        ))
      )}
      {cart.length > 0 && (
        <div className="text-right">
          <Link to="/checkout">
            <button className="bg-primary border-2 border-primary hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary transition-all delay-100 text-white px-6 py-3 rounded-lg ">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Cart;