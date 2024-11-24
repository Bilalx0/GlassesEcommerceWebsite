import React from 'react'
import Hero from '../components/Hero'
import Arrivals from '../components/Arrivals'
// import Model from '../components/Model'
import BestSeller from '../components/BestSeller'
import Testimonials from '../components/Testimonials'
import PreFooter from '../components/PreFooter'

function Home() {
  return (
    <>
      <div className='bg-gray-50'>
        <div className='px-6 md:px-12 lg:px-24'>
          <div className='flex flex-col gap-52'>
            <Hero />
            <Arrivals />
            {/* <Model></Model> */}
            <BestSeller />
            <Testimonials />
            <PreFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
