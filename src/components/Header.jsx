import React from 'react'
import Navbar from './Navbar'
import image1 from '/resized-pic-5.jpg'

function Header() {
  return (
    <div>
    <Navbar></Navbar>
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-24">
        <div className="text-left md:w-1/2">
            <h1 className="text-6xl font-bold text-black">Glasses & Lens</h1>
            <p className="mt-4 text-lg text-gray-700">Buy the best high-quality sunglasses from us.<br />More than 100 types of assortment</p>
            <div className="mt-8 flex items-center">
                <button className="bg-rose-300 font-medium text-black px-6 py-3 rounded-lg mr-4 shadow-lg">Start Shopping</button>
                <button className="flex items-center font-medium text-black px-6 py-3 rounded-lg border-2 border-rose-300 shadow-lg">
                    Explore More
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
        <div className="relative mt-8 md:mt-0 md:ml-8">
            <img src={image1} alt="Sunglasses on a yellow background" className="rounded-2xl w-96" />
            <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full flex items-center">
                <span className="text-lg">$250</span>
                <button className="ml-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header
