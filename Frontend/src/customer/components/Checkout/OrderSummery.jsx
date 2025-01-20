import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from "../Cart/Cart"
import CartItem from '../CartItem/CartItem'

const OrderSummery = () => {
  return (
    <div className="-mx-6 lg:-mx-0">
      <div className='p-3 sm:p-5 shadow-lg rounded-md border m-2 sm:m-4'>
        <AddressCard/>
      </div>
       
      <div className='p-3 sm:p-5'>
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4'>
          {/* Cart Items Section */}
          <div className='col-span-2'>
            {[1,1,1,1].map((item, index) => <CartItem key={index}/>)}
          </div>

          {/* Price Details Section */}
          <div className='lg:sticky lg:top-0 lg:h-[100vh]'>
            <div className='border rounded-md shadow-sm'>
              <p className='uppercase font-bold opacity-60 p-4 text-lg sm:text-xl'>Price Details</p>
              <hr/>
              <div className='p-4 space-y-4'>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Price (3 items)</span>
                  <span>₹1499</span>
                </div>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Discount</span>
                  <span>₹1099</span>
                </div>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Delivery Charge</span>
                  <span className='text-green-800'>Free</span>
                </div>
                <hr/>
                <div className='flex justify-between pt-2 text-black font-bold text-lg'>
                  <span>Total Amount</span>
                  <span>₹499</span>
                </div>
              </div>
              
              <button className='w-full bg-purple-700 text-white font-medium py-3 px-4 rounded-md hover:bg-purple-800 transition-colors mt-4'>
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummery