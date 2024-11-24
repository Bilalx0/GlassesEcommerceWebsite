import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Arrivals() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold">New Arrivals</h1>
        <a href="#" className="text-gray-500">See All</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10">
        <Link to="/product">
        <Cards image="/arrivel-3.jpg"
          title="Full rim square"
          subtitle="Glasses"
          price={25.00}
          originalPrice={45.00}
          colorOptions={['#00FF00', '#FF0000', '#FFC0CB']} />
        </Link>
        <Cards image="/arrivel-1.jpg"
          title="Full rim square"
          subtitle="Glasses"
          price={25.00}
          originalPrice={45.00}
          colorOptions={['#00FF00', '#FF0000', '#FFC0CB']} />
        <Cards image="/arrivel-3.jpg"
          title="Full rim square"
          subtitle="Glasses"
          price={25.00}
          originalPrice={45.00}
          colorOptions={['#00FF00', '#FF0000', '#FFC0CB']} />
      </div>
    </div>
  )
}

export default Arrivals
