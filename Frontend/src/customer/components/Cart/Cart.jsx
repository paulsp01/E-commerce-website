import React from 'react'
import CartItem from '../CartItem/CartItem'
import Divider from '@mui/material/Divider'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
const navigate=useNavigate()



  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
      <div className='col-span-2'>
     {[1,1,1,1].map((item)=><CartItem/>) }
        
      </div>


      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
       <div className='border px-4'>
       <p className='uppercase font-bold  opacity-60 pb-4 text-xl pt-3'>Price Details</p>
       <hr/>
       <div className='space-y-3  '>
        <div className='flex justify-between pt-2 text-black font-medium opacity-90 text-base px-2  '>
          <span>Price(3 items)</span>
          <span>₹1499</span>

        </div>
        <div className='flex justify-between  text-black font-medium opacity-90 text-base px-2'>
          <span>Discount</span>
          <span>₹1099</span>

        </div>
        <div className='flex justify-between  text-black font-medium opacity-90 text-base px-2 '>
          <span>Delivery Charge</span>
          <span className='text-green-800'>Free</span>

        </div>

        <div className='flex justify-between pt-3 pb-3 text-black font-bold text-lg'>
          <span>Total Amount</span>
          <span>₹499</span>

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