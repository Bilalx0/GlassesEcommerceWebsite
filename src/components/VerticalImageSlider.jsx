import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import image1 from '/resized-pic-5.jpg'
import image2 from '/resized-pic-4.jpg'
import image3 from '/resized-pic-3.jpg'
import image4 from '/resized-pic-2.jpg'
import image5 from '/resized-pic-1.jpg'

const VerticalImageSlider = () => {
  // Sample images - replace with your actual images
  const images = [
   {
      src: image1,
      alt: "Product 1",
      price: 130
    },
    {
      src: image2,
      alt: "Product 2",
      price: 180
    },
    {
      src: image4,
      alt: "Product 3",
      price: 320
    },
    {
      src: image5,
      alt: "Product 4",
      price: 290
    },
    {
      src: image3,
      alt: "Product 4",
      price: 290
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
      <div className="relative">
          {/* Main testimonial content */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg p-8 shadow-lg mx-auto max-w-2xl">
                      {/* Testimonial text */}
                      <p className="text-gray-700 mb-6 text-lg italic">
                        "{testimonial.text}"
                      </p>

                      {/* Customer info */}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
  );
};

export default VerticalImageSlider;