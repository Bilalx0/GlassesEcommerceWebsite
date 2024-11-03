import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Left navigation items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">HOME</a>
            <a href="/shop" className="text-gray-700 hover:text-gray-900">SHOP</a>
            <a href="/new" className="text-gray-700 hover:text-gray-900">NEW</a>
            <a href="/sale" className="text-gray-700 hover:text-gray-900">SALE</a>
          </div>

          {/* Center logo */}
          <div className="flex-1 flex justify-center md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
            <a href="/" className="text-2xl font-bold">Tascara</a>
          </div>

          {/* Right menu and cart */}
          <div className="flex items-center gap-5">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none flex gap-5"
            >
              <span className="block">Menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/cart" className="text-gray-700 hover:text-gray-900">
              <ShoppingBag size={24} />
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block p-2 text-gray-700 hover:bg-gray-100">HOME</a>
            <a href="/shop" className="block p-2 text-gray-700 hover:bg-gray-100">SHOP</a>
            <a href="/new" className="block p-2 text-gray-700 hover:bg-gray-100">NEW</a>
            <a href="/sale" className="block p-2 text-gray-700 hover:bg-gray-100">SALE</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;