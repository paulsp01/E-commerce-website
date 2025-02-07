import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const orderState = useSelector(state => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  if (!orderState || orderState.loading) {
    return <div>Loading...</div>;
  }

  if (orderState.error) {
    return <div>Error: {orderState.error}</div>;
  }

  const order = orderState.order;

  return (
    <div className='py-10 lg:px-20 px-5'>
      <div>
        <h1 className='text-xl pb-3 font-bold'>Delivery Address :</h1>
        <AddressCard address={order.shippingAddress} />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={order.orderStatus} />
      </div>
      <Grid className='space-y-5' container>
        {order.orderItems.map((orderItem) => (
          <Grid key={orderItem._id} item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid item xs={6}>
              <div className='flex items-center space-x-4'>
                <img className='h-[5rem] w-[5rem] object-cover object-top' src={orderItem.product.imageUrl} alt='' />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>{orderItem.product.name}</p>
                  <p className='space-x-5 text-gray-700 text-sm'><span>Color: {orderItem.product.color}</span><span>Size: {orderItem.size}</span></p>
                  <p className='text-sm text-gray-700'>Seller: {orderItem.product.brand}</p>
                  <p className='text-sm font-semibold opacity-70'>Price: <span className='text-gray-950 '>₹{orderItem.price}</span></p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: '#7a31f7' }}>
                <StarBorderOutlinedIcon sx={{ fontSize: '2rem' }} className='px-2 text-5xl' />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;