import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from "../Cart/Cart"
import CartItem from '../CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummery = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  const {order}=useSelector(store=>store)
  const searchParams=new URLSearchParams(location.search)
  const orderId=searchParams.get("order_id")

  useEffect(()=>{
   dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div className="-mx-6 lg:-mx-0">
      <div className='p-3 sm:p-5 shadow-lg rounded-md border m-2 sm:m-4'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
       
      <div className='p-3 sm:p-5'>
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4'>
          {/* Cart Items Section */}
          <div className='col-span-2'>
            {order.order?.orderItems?.map((item, index) => <CartItem key={index} item={item}/>)}
          </div>

          {/* Price Details Section */}
          <div className='lg:sticky lg:top-0 lg:h-[100vh]'>
            <div className='border rounded-md shadow-sm'>
              <p className='uppercase font-bold opacity-60 p-4 text-lg sm:text-xl'>Price Details</p>
              <hr/>
              <div className='p-4 space-y-4'>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Price </span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Discount</span>
                  <span>₹{order.order?.discount}</span>
                </div>
                <div className='flex justify-between text-black font-medium opacity-90'>
                  <span>Delivery Charge</span>
                  <span className='text-green-800'>Free</span>
                </div>
                <hr/>
                <div className='flex justify-between pt-2 text-black font-bold text-lg'>
                  <span>Total Amount</span>
                  <span>₹{order.order?.totalDiscountedPrice
                  }</span>
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