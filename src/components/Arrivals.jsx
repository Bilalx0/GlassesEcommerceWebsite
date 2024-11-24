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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold">New Arrivals</h1>
        <a href="#" className="text-gray-500">See All</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10">
      {limitedProducts.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default Arrivals
