import React from 'react'

function Model() {
  return (
    <div className="flex flex-col md:flex-row justify-center h-96 py-8 px-32 bg-rose-600">
                    <div className="w-full md:w-1/2 p-4">
                        <img src="/model.jpg" alt="Woman wearing glasses" className="w-[510px] h-96" />
                        <div className="mt-4 relative bottom-32">
                            <span className="text-rose-200 font-semibold">Tascara</span>
                            <h2 className="text-2xl font-bold mt-2 text-white">VisionQuest A <br /> Spectacular Spectacle</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <span className="text-rose-200 font-semibold">Tascara</span>
                        <h1 className="text-4xl font-bold mt-2 text-white">Through The Looking Lens Visionary Vistas</h1>
                        <p className="text-gray-200 mt-4">The event under the banner of "VisionQuest" aims to unveil the untold stories behind eyewear, delving into the historical narrative that traces back to the inception of spectacles.</p>
                        <button className="mt-6 bg-rose-300 text-gray-900 font-semibold py-2 px-4 rounded-lg flex items-center">
                            <i className="fas fa-link mr-2"></i> Show Products
                        </button>
                    </div>
                </div>
  )
}

export default Model
