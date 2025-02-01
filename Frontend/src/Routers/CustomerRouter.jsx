import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from '../customer/pages/homepage/Home'
import ProducPage from '../customer/pages/ProductPage/ProducPage'
import Navbar from '../customer/components/navbar/Navbar'
import ProductDetailsPage from '../customer/pages/ProductDetailsPage/ProductDetailsPage'
import Footer from '../customer/components/Footer/Footer'
import CartPage from '../customer/pages/CartPage/CartPage'
import CheckOutPage from '../customer/pages/CheckoutPage/CheckOutPage'
import OrderPage from '../customer/pages/Orderpage/OrderPage'
import OrderDetailsPage from '../customer/pages/Orderpage/OrderDetailsPage'
import PaymentSucessPage from '../customer/pages/Paymentpage/PaymentSucessPage'




const CustomerRouter = () => {
    return (
        <div>
         <Navbar/>
         <div>
           <Routes>
             {/* customer routes */}
           <Route path='/' element={<Home/>}/>
           <Route path='/:levelOne/:levelTwo/:levelThree' element={<ProducPage/>}/>
           <Route path='/product/:productId' element={<ProductDetailsPage/>}/>
           <Route path='/cart' element={<CartPage/>}/>
           <Route path='/checkout' element={<CheckOutPage/>}/>
           <Route path='/account/order' element={<OrderPage/>}/>
           <Route path='/account/order/:orderId' element={<OrderDetailsPage/>}/>
           <Route path='/login' element={<Home/>}/>
           <Route path='/register' element={<Home/>}/>
           <Route path='/payment/:orderId' element={<PaymentSucessPage/>}/>
     
     
     
           
           </Routes>
           
         </div>
         <Footer/>
        </div>
       )
}

export default CustomerRouter