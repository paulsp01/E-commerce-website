import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mb-6 '>

        <div className='flex items-center'>


            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt=""/>

            </div>


            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Product Title</p>
                <p className='opacity-70'>Size:L, white</p>
                <p className='opacity-70 mt-2'>Seller:Brand Name</p>
                 <div className='flex items-center space-x-2  py-3 pt-3'>
                    <p className='font-semibold '>₹455</p>
                    <p className='line-through text-green-800 font-semibold'>₹1466</p>
                    <p className='text-red-700 font-semibold'>70% off</p>
                 </div>
                 

            </div>

            



        </div>


        <div className='lg:flex items-center lg:space-x-10 pt-2 -mb-3'>
              <div className='flex items-center '>
                <IconButton sx={{color:'#6643e6'}}>
                  <RemoveCircleOutlineIcon/>
                 
                </IconButton>

                <span className='mx-7 '>3</span>

                <IconButton sx={{color:'#6643e6'}}>
                <ControlPointIcon/>
                </IconButton>


              </div>

             <div >
              <Button sx={{color:'#0c9940'}}>REMOVE</Button>
             
              
             </div>

                  
            </div>
       
    </div>
  )
}

export default CartItem