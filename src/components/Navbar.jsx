import { BsCart3 } from "react-icons/bs";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import MovingTextBar from "./MovingTextBar ";
import StyleInjector from "./StylesInjector";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="bg-slate-50 shadow-lg pb-1 z-30 fixed top-0 w-full transition-all delay-200">
      <MovingTextBar />
      <StyleInjector/>
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className=" flex items-center justify-center gap-x-4">

              <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
              <span className="text-2xl font-extrabold text-primary">TASCARA</span>
            </div>

            {/* Desktop Navigation */}

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link to="/cart">
                <button className="relative p-2 text-black hover:text-gray-700">
                  <BsCart3 className="h-7 w-7" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>

              <SignedOut>
              <SignInButton>
      <button className="bg-primary border-2 border-primary hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary transition-all delay-100 font-normal text-white hidden sm:block text-xs sm:text-base px-3 py-2 rounded-lg mr-4 shadow-lg">
        Sign In
      </button>
    </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-50 z-50 shadow-lg transform transition-transform duration-300 ease-in-out  ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        onClick={() => setOpen(false)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-800">TASCARA</span>
            <Hamburger size={25} className="flex items-center " toggled={isOpen} toggle={setOpen} />
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