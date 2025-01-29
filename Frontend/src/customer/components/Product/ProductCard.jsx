import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
 const {imageUrl,title,brand,price,discountedPrice,discountPersent}=product
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${product._id}`)} className='ProductCard w-[16rem] m-3 transition-all cursor-pointer border-2 border-gray-500'>
      <div className='h-[18rem]  '>
        <img className='h-full w-full object-cover object-left-top' src={imageUrl}/>
      </div>
      <div className='textPart bg-white p-3 '>
        <div>
        <h4 className='font-semibold opacity-60'>{brand}</h4>
        <p className='text-sm'>{title}</p>

      </div>
      <div className='flex gap-2 items-center  pb-2'>
        <p className='font-bold'>₹{discountedPrice}</p>
        <p className='line-through opacity-60 text-green-900 font-semibold'>₹{price}</p>
        <p className='text-red-600 font-medium'>{discountPersent}% off</p>
      </div>
      </div>

    </div>
  )
}

export default ProductCard