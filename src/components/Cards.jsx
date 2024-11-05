import React from 'react'

function Cards(props) {
  return (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">Best Sellers</span>
                                <span className="text-gray-500 text-xs">3 Colours</span>
                            </div>
                            <img src={props.src} alt="Glasses - Best Sellers" className="w-full h-40 object-contain mb-4"/>
                            <div className="text-gray-700 text-sm mb-1">AP2548 Optics</div>
                            <div className="text-gray-500 text-xs mb-2">Alex Perry</div>
                            <div className="text-xl font-bold">$187.99</div>
                        </div>
    
      
  )
}

export default Cards
