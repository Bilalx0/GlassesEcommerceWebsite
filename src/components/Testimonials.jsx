import React from 'react'
import { FaArrowLeft , FaArrowRight , FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-28">
                    <div className="text-start ml-4 flex justify-between items-center">
                        <h2 className="text-4xl font-normal text-gray-800">Our Testimonials</h2>
                    <div className="flex justify-end space-x-2">
                        <button className="bg-rose-300 p-2 rounded-full shadow-lg">
                        <FaArrowLeft />
                        </button>
                        <button className="bg-rose-300 p-2 rounded-full shadow-lg">
                        <FaArrowRight />
                        </button>
                    </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img className="w-full h-72 object-cover rounded-t-lg" src="/testimonial-2.jpg" alt="Portrait of a smiling woman" />
                            <div className="mt-8">
                                <div className="flex items-center">
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-gray-300'/>
                                    <FaStar className='text-gray-300'/>
                                </div>
                                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="mt-4 text-rose-400 font-bold">Michael smith</p>
                                <p className="text-gray-500">Company ceo</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img className="w-full h-72 object-cover rounded-t-lg" src="/testimonial-1.jpg" alt="Portrait of a man holding glasses" />
                            <div className="mt-8">
                                <div className="flex items-center">
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-gray-300'/>
                                    <FaStar className='text-gray-300'/>
                                </div>
                                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="mt-4 text-rose-400 font-bold">Ashley rosa</p>
                                <p className="text-gray-500">Company ceo</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
  )
}

export default Testimonials
