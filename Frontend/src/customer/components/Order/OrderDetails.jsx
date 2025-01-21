import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const OrderDetails = () => {
  return (
    <div className='py-10 lg:px-20 px-5'>
       <div>
        <h1 className='text-xl pb-3 font-bold'>Delivery Address :</h1>
       <AddressCard/>
       </div>
      <div className='py-20'>
      <OrderTracker activeStep={3}/>
      </div>

      <Grid className='space-y-5' container>
       {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>

<Grid item xs={6}>
    <div className='flex items-center space-x-4'>
        <img className='h-[5rem] w-[5rem] object-cover objrct-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70' alt=''/>

         <div className='space-y-2 ml-5'>
            <p className='font-semibold'>A Men's Jeans Cotton</p>
            <p className='space-x-5 text-gray-700 text-sm'><span >Color: Pink</span><span>Size: M</span></p>
            
            <p className='text-sm text-gray-700'>Seller: Linaria</p>
            <p className='text-sm font-semibold opacity-70'>Price: <span className='text-gray-950 '>₹1234</span></p>
         </div>

    </div>

</Grid>

<Grid item>
    <Box sx={{color:'#7a31f7'}}>
        <StarBorderOutlinedIcon sx={{fontSize:'2rem'}} className='px-2 text-5xl'/>
        <span>Rate & Review Product</span>

    </Box>

</Grid>

</Grid>)}

      </Grid>
    </div>
  )
}

export default OrderDetails