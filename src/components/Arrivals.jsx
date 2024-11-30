import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';


function Arrivals() {
  const { products } = useContext(DataContext);

  

  // Show only the first 3 products
  const limitedProducts = products.slice(0, 3);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-secondary">New Arrivals</h1>
        <a href="#" className="text-gray-500">See All</a>
      </div>
      <div className="flex flex-row flex-wrap md:justify-between  gap-y-14 justify-center">
      {limitedProducts.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default Arrivals
