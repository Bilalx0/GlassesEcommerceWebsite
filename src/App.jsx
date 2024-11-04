import { useState } from 'react'
import Header from './components/Header'
import Arrivals from './components/Arrivals'
import Model from './components/Model'
import BestSeller from './components/BestSeller'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#fcf8f5]'>
          <Header></Header>
          <Arrivals></Arrivals>
          <Model></Model>
          <BestSeller></BestSeller>
      </div>
    </>
  )
}

export default App
