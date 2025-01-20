import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './customer/pages/homepage/Home'
import ProducPage from './customer/pages/ProductPage/ProducPage'
import Navbar from './customer/components/navbar/Navbar'
import ProductDetailsPage from './customer/pages/ProductDetailsPage/ProductDetailsPage'
import Footer from './customer/components/Footer/Footer'
import CartPage from './customer/pages/CartPage/CartPage'
import CheckOutPage from './customer/pages/CheckoutPage/CheckOutPage'
import OrderDetailsPage from './customer/pages/Orderpage/OrderDetailsPage'


//import Navbar from './customer/components/navbar/navbar'


const App = () => {
  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<ProducPage/>}/>
      <Route path='/product-details' element={<ProductDetailsPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/checkout' element={<CheckOutPage/>}/>
      <Route path='/order' element={<OrderDetailsPage/>}/>
      
      </Routes>
      
    </div>
    <Footer/>
   </div>
  )
}

export default App