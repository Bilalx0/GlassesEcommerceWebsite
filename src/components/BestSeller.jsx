import React from 'react'
import Cards from './Cards' 
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

function BestSeller() {
  const { products } = useContext(DataContext);

  

  // Show only the first 3 products
  const limitedProducts = products.slice(0, 6);

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
                    {limitedProducts.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
                    </div>
    </div>
  )
}

export default BestSeller
