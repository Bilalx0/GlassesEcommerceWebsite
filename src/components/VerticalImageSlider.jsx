import React, { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const VerticalImageSlider = () => {
  
const images = [
  "/resized-pic-1.jpg",
  "/resized-pic-2.jpg",
  "/resized-pic-3.jpg",
  "/resized-pic-4.jpg",
  "/resized-pic-5.jpg",
]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [])

  return (
    <div className="relative w-64 h-96 overflow-hidden">
      <div 
        className="absolute w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-96">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronUp className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronDown className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  )
}

export default VerticalImageSlider;

