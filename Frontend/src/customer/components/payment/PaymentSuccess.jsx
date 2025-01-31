import { Alert, AlertTitle, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OrderTracker from '../Order/OrderTracker';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { updatePaymentInfo } from '../../../State/Payment/Action'; // Import updatePaymentInfo
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
  const {payment}=useSelector(store=>store)


 
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   setPaymentId(urlParams.get("razorpay_payment_id")); // Correct parameter name
  //   setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  //    // Correct parameter name
  // }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const razorpayPaymentId = urlParams.get("razorpay_payment_id"); // Correct parameter name
    const razorpayPaymentLinkStatus = urlParams.get("razorpay_payment_link_status"); // Correct parameter name
  
    setPaymentId(razorpayPaymentId);
    setPaymentStatus(razorpayPaymentLinkStatus);
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { payment_id: paymentId, order_id: orderId }; // Correct parameter names
     
      dispatch(getOrderById(orderId));
      dispatch(updatePaymentInfo(data)); // Use updatePaymentInfo action
    }
  }, [orderId, paymentId]);

  return (
    <div className='px-2 lg:px-36'>
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant='filled'
          severity='success'
          sx={{ mb: 6, width: 'fit-content' }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations, Your Order Has Been Placed
        </Alert>

        <OrderTracker activeStep={1} />
        <Grid container className='space-y-5 py-5 pt-20'>
          {order.order?.orderItems.map((item) => (
            <Grid container item className='' sx={{ alignItems: "center", justifyContent: "space-between" }}>
              <Grid item xs={6}>
                <div className='flex items-center'>
                  <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product.imageUrl} />
                  <div className='ml-5 space-y-2'>
                    <p>{item.product.title}</p>
                    <div className='opacity-50 text-xs font-semibold'>
                      <span>Size: {item.size}</span>
                    </div>
                    <p>Seller: {item.product.brand}</p>
                    <p>Price: {item.price}</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={order.order?.shippingAddress} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;