import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <nav className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Brand</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              <Link to="/" className='text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Home </Link>
              <Link to="/products" className=' text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Products</Link>
              <Link to="/" className=' text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> About </Link>
              <Link to="/" className=' text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Contact </Link>

            </ul>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link to="/cart">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              </Link>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-800">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
          <Link to="/" className='block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Home </Link>
              <Link to="/products" className='block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Products</Link>
              <Link to="/" className='block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> About </Link>
              <Link to="/" className='block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-md text-base font-medium'> Contact </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;