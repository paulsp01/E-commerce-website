import React, { useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import Divider from '@mui/material/Divider'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'


const Cart = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const {cart}=useSelector(store=>store)


useEffect(() => {
  dispatch(getCart())
}, [dispatch, cart.updateCartItem, cart.deleteCartItem])



  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
      <div className='col-span-2'>
     {cart.cart?.cartItem.map((item, index)=><CartItem key={index} item={item}/>) }
        
      </div>


      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
       <div className='border px-4'>
       <p className='uppercase font-bold  opacity-60 pb-4 text-xl pt-3'>Price Details</p>
       <hr/>
       <div className='space-y-3  '>
        <div className='flex justify-between pt-2 text-black font-medium opacity-90 text-base px-2  '>
          <span>Price</span>
          <span>₹{cart.cart?.totalPrice}</span>

        </div>
        <div className='flex justify-between  text-black font-medium opacity-90 text-base px-2'>
          <span>Discount</span>
          <span>-₹{cart.cart?.discount}</span>

        </div>
        <div className='flex justify-between  text-black font-medium opacity-90 text-base px-2 '>
          <span>Delivery Charge</span>
          <span className='text-green-800'>Free</span>

        </div>

        <div className='flex justify-between pt-3 pb-3 text-black font-bold text-lg'>
          <span>Total Amount</span>
          <span>₹{cart.cart?.totalDiscountedPrice}</span>

        </div>


       </div>
       <div >
        <Link to='/checkout/?step=2' className='text-white font-medium w-full px-5 bg-purple-700 flex items-center justify-center p-2 my-6  rounded-md cursor-pointer'>Check Out</Link>
       </div>
       </div>

      </div>

      </div>
      


       
    </div>
  )
}

export default Cart