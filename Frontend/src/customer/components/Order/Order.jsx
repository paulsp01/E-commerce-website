import React from 'react'
import { Grid } from "@mui/material";
import OrderCard from './OrderCard';

const orderStatus=[
    {label: "On The Way" ,value:"on_the_way"},
    {label: "Delivered",value:"delivered"},
    {label: "Cancelled",value:"Cancelled"},
    {label: "Returned",value:"Returned"}
]

const Order = () => {
  return (
    <div className='px-5 lg:px-20 py-8 '>
        <Grid container sx={{justifyContent:"space-between"}}>

            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky'>
                    <h1 className='font-bold text-lg'>Filter</h1>

                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>

                       {orderStatus.map((option) => <div className='flex items-center'>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                            <lable className='ml-3 text-sm text-gray-700' htmlFor={option.value}>
                                {option.label}

                            </lable>
                        </div>
)}
                    </div>

                </div>

            </Grid>

            <Grid item xs={9} >
              <div className='space-y-7'>
              {[1,1,1,1,1].map((item)=><OrderCard/>)}
              </div>
                

            </Grid>

        </Grid>
    </div>
  )
}

export default Order