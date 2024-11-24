import React from 'react'
import VerticalImageSlider from './VerticalImageSlider'

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
    <div className="flex flex-col md:flex-row items-center justify-between pt-36">
        <div className="text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-black">Glasses & Lens</h1>
            <p className="mt-4 text-lg text-gray-700">Buy the best high-quality sunglasses from us.<br />More than 100 types of assortment</p>
            <div className="mt-8 flex items-center">
                <button className="bg-rose-300 font-medium text-black text-xs sm:text-base px-6 py-3 rounded-lg mr-4 shadow-lg">Start Shopping</button>
                <button className="flex items-center font-medium text-black text-xs sm:text-base px-6 py-3 rounded-lg border-2 border-rose-300 shadow-lg">
                    Explore More
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
        <VerticalImageSlider />
    
    </div>
</div>
  )
}

export default Hero;


