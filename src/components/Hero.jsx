import React from 'react'
import { Link } from 'react-router-dom';

const images = [
    "/placeholder.svg?height=384&width=256&text=Image%201",
    "/placeholder.svg?height=384&width=256&text=Image%202",
    "/placeholder.svg?height=384&width=256&text=Image%203",
    "/placeholder.svg?height=384&width=256&text=Image%204",
    "/placeholder.svg?height=384&width=256&text=Image%205",
  ]

function Hero() {



  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-between pt-40">
        <div className="text-left w-full">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">Glasses <span className='text-secondary'>& Lens</span></h1>
            <p className="mt-6 text-lg text-gray-700">Buy the best high-quality sunglasses from us.<br />More than 100 types of assortment</p>
            <div className="mt-8 flex items-center">
                <Link to="/products">
                <button className="bg-primary border-2 border-primary hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary transition-all delay-100 font-medium text-white text-xs sm:text-base px-6 py-3 rounded-lg mr-4 shadow-lg">Start Shopping</button>
                </Link>
                <Link to="/products">
                <button className="flex items-center font-medium text-gray-900 hover:border-2  hover:bg-primary hover:text-white transition-all delay-100 text-xs sm:text-base px-6 py-3 rounded-lg border-2 border-primary shadow-lg">
                    Explore More
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
                </Link>
            </div>
        </div>
        <img src="/resized-pic-1.jpg" className="rounded-2xl h-auto w-full md:w-72 mt-12 sm:m-0" alt="" />    
    </div>
</div>
  )
}

export default Hero;


