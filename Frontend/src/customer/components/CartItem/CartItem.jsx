import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';


const CartItem = ({item}) => {
  const dispatch=useDispatch()
  const handleCartItemQuantity=(num)=>{
    const data={data:{quantity:item.quantity+num},cartItemId:item?._id}
   dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item._id))
  }
  return (
    <div className='p-5 shadow-lg border rounded-md mb-6 '>

        <div className='flex items-center'>


            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt=""/>

            </div>


            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>{item.product?.title}</p>
                <p className='opacity-70'>Size:{item.size}, {item.product?.color}</p>
                <p className='opacity-70 mt-2'>Seller:{item.product?.brand}</p>
                 <div className='flex items-center space-x-2  py-3 pt-3'>
                    <p className='font-semibold '>₹{item.product.discountedPrice}</p>
                    <p className='line-through text-green-800 font-semibold'>₹{item.product?.price}</p>
                    <p className='text-red-700 font-semibold'>{item.product?.discountPersent}% off</p>
                 </div>
                 

            </div>

            



        </div>


        <div className='lg:flex items-center lg:space-x-10 pt-2 -mb-3'>
              <div className='flex items-center '>
                <IconButton sx={{color:'#6643e6'}} onClick={()=>handleCartItemQuantity(-1)} disabled={item.quantity<=1}>
                  <RemoveCircleOutlineIcon />
                 
                </IconButton>

                <span className='mx-7 '>{item.quantity}</span>

                <IconButton sx={{color:'#6643e6'}} onClick={()=>handleCartItemQuantity(1)}>
                <ControlPointIcon/>
                </IconButton>


              </div>

             <div >
              <Button sx={{color:'#0c9940'}} onClick={handleRemoveCartItem}>REMOVE</Button>
             
              
             </div>

                  
            </div>
       
    </div>
  )
}

export default CartItem