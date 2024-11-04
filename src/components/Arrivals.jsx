import React from 'react'

function Arrivals() {
  return (
                      <div className="max-w-6xl mx-auto py-10">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold">New Arrivals</h1>
                        <a href="#" className="text-gray-500">See All</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">Best Sellers</span>
                                <span className="text-gray-500 text-xs">3 Colours</span>
                            </div>
                            <img src="/arrivel-1.jpg" alt="Glasses - Best Sellers" className="w-full h-40 object-contain mb-4"/>
                            <div className="text-gray-700 text-sm mb-1">AP2548 Optics</div>
                            <div className="text-gray-500 text-xs mb-2">Alex Perry</div>
                            <div className="text-xl font-bold">$187.99</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">Top Pick</span>
                                <span className="text-gray-500 text-xs">2 Colours</span>
                            </div>
                            <img src="/arrivel-3.jpg" alt="Glasses - Top Pick" className="w-full h-40 object-contain mb-4"/>
                            <div className="text-gray-700 text-sm mb-1">AP2549 Optics</div>
                            <div className="text-gray-500 text-xs mb-2">Persol</div>
                            <div className="text-xl font-bold">$214.99</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">Flash Sale</span>
                                <span className="text-gray-500 text-xs">4 Colours</span>
                            </div>
                            <img src="/arrivel-2.jpg" alt="Glasses - Flash Sale" className="w-full h-40 object-contain mb-4"/>
                            <div className="text-gray-700 text-sm mb-1">AP2549 Optics</div>
                            <div className="text-gray-500 text-xs mb-2">Arnette</div>
                            <div className="text-xl font-bold">$199.99</div>
                        </div>
                    </div>
                </div>
  )
}

export default Arrivals
