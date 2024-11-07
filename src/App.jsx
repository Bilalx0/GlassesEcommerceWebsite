import { useState } from 'react'
import Header from './components/Header'
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
          <Header></Header>
          <Arrivals></Arrivals>
          <Model></Model>
          <BestSeller></BestSeller>
          <Testimonials></Testimonials>
          <PreFooter></PreFooter>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
