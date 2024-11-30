import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Buyer",
      rating: 5,
      text: "Absolutely love the quality of the products! The customer service was exceptional, and delivery was faster than expected. Will definitely be shopping here again.",
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      rating: 5,
      text: "This has become my go-to online store. The website is easy to navigate, prices are competitive, and the product selection is outstanding.",
    },
    {
      name: "Emma Thompson",
      role: "Verified Buyer",
      rating: 5,
      text: "I was skeptical about ordering online, but this experience exceeded my expectations. The quality control is impressive, and returns process is hassle-free.",
    },
    {
      name: "David Wilson",
      role: "New Customer",
      rating: 4,
      text: "Great first experience with this store. The checkout process was smooth, and I received regular updates about my order status.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className=" mx-auto">
        <h2 className="text-2xl sm:text-center font-semibold mb-12 text-secondary">
          What Our Customers Say
        </h2>

        <div className="relative">
          {/* Main testimonial content */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
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

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 p-2 rounded-full bg-primary shadow-lg hover:shadow-2xl hover:shadow-teal-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-100" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 p-2 rounded-full bg-primary shadow-lg hover:shadow-2xl hover:shadow-teal-400 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-100" />
          </button>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
