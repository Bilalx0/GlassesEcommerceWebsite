import React from 'react'
import Cards from './Cards' 

function BestSeller() {
  return (
    <div className="px-24 mt-64" >
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-4xl font-bold text-black leading-[3rem]">Optic Odyssey A <br /> <span className='font-normal'>Clearer Perspective</span></h2>

                        </div>
                            <p className="text-base text-gray-700 w-[500px]">Embark on an optical journey that transcends mere vision; Optic Odyssey is an immersive exploration into the multifaceted world of eyewear.</p>
                            <button className=" bg-rose-300 text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center shadow-lg">
                                <i className="fas fa-search mr-2"></i> Show Products
                            </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-20'>
                    <Cards src="/arrivel-2.jpg"></Cards>
                    <Cards src="/arrivel-1.jpg"></Cards>
                    <Cards src="/arrivel-3.jpg"></Cards>
                    <Cards src="/arrival-4.jpg"></Cards>
                    <Cards src="/arrivel-1.jpg"></Cards>
                    <Cards src="/arrivel-2.jpg"></Cards>
                    </div>
    </div>
  )
}

export default BestSeller
