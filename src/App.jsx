import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Arrivals from './components/Arrivals'
import Model from './components/Model'
import BestSeller from './components/BestSeller'
import Testimonials from './components/Testimonials'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#fcf8f5]'>
          <Navbar></Navbar>
        <div className='px-6 md:px-12 lg:px-24'>
          <Header></Header>
    <div className='flex flex-col gap-52'>
          <Arrivals></Arrivals>
          {/* <Model></Model> */}
          <BestSeller></BestSeller>
          <Testimonials></Testimonials>
          <PreFooter></PreFooter>
    </div>
        </div>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
