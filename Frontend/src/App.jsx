import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import CustomerRouter from './Routers/CustomerRouter'
import AdminRouter from './Routers/AdminRouter'




//import Navbar from './customer/components/navbar/navbar'


const App = () => {
  return (
  <div>
    <Routes>
    <Route path="/admin/*" element={<AdminRouter/>}/>
      <Route path="/*" element={<CustomerRouter/>}/>
     
    </Routes>
  </div>
  )
}

export default App