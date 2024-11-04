import React from 'react'

function BestSeller() {
  return (
    <div className="flex items-center justify-center h-screen bg-white px-24">
                    <div className="flex items-center space-x-8 gap-8">
                        <div className='w-96'>
                            <h1 className="text-3xl font-bold text-black">Optic Odyssey A</h1>
                            <h1 className="text-3xl font-medium text-black">Clearer Perspective</h1>
                        </div>
                        
                            <p className="text-base text-gray-700 mb-4">Embark on an optical journey that transcends mere vision; Optic Odyssey is an immersive exploration into the multifaceted world of eyewear.</p>
                            <button className="flex items-center px-4 py-2 bg-teal-400 text-black font-semibold rounded">
                                <i className="fas fa-search mr-2"></i> Show Products
                            </button>
                    </div>
                </div>
  )
}

export default BestSeller
