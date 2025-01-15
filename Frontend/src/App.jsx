import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './customer/pages/homepage/Home'
import ProducPage from './customer/pages/ProductPage/ProducPage'
import Navbar from './customer/components/navbar/Navbar'


//import Navbar from './customer/components/navbar/navbar'


const App = () => {
  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<ProducPage/>}/>
      </Routes>
      
    </div>
   </div>
  )
}

export default App