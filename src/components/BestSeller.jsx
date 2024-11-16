import React from 'react'
import Cards from './Cards' 

function BestSeller() {
  return (
    <div className="" >
                    <div className="flex  justify-between lg:items-center flex-col lg:flex-row">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-[2.5rem]">Optic Odyssey A <br /> <span className='font-normal'>Clearer Perspective</span></h2>

                        </div>
                            <p className="text-base text-gray-700 md:w-[500px] w-full mt-3">Embark on an optical journey that transcends mere vision; Optic Odyssey is an immersive exploration into the multifaceted world of eyewear.</p>
                            <button className=" bg-rose-300 text-gray-900 font-semibold py-3 px-2 w-36 mt-3 rounded-lg flex items-center shadow-lg">
                                <i className="fas fa-search mr-2"></i> Show Products
                            </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-12 mt-20'>
                    <Cards  image="/arrivel-1.jpg" 
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    <Cards  image="/arrivel-2.jpg"
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    <Cards  image="/arrivel-3.jpg"
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    <Cards  image="/arrivel-1.jpg"
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    <Cards  image="/arrivel-3.jpg"
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    <Cards  image="/arrivel-2.jpg"
  title="Full rim square"
  subtitle="Glasses"
  price={25.00}
  originalPrice={45.00}
  colorOptions={['#00FF00', '#FF0000', '#FFC0CB']}/>
                    
                    </div>
    </div>
  )
}

export default BestSeller
