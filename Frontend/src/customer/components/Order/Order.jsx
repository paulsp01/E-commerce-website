import React, { useEffect } from 'react';
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from './OrderCard';
import { getOrderHistory } from '../../../State/Order/Action';

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Returned", value: "Returned" }
];

const Order = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.order);
  console.log("orders", orders); // Check if orders are being fetched

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);

  return (
    <div className='px-5 lg:px-20 py-8 '>
      <Grid container sx={{ justifyContent: "space-between" }}>

        <Grid item xs={2.5}>
          <div className='h-auto shadow-lg bg-white p-5 sticky'>
            <h1 className='font-bold text-lg'>Filter</h1>

            <div className='space-y-4 mt-10'>
              <h1 className='font-semibold'>ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div className='flex items-center' key={option.value}>
                  <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                  <label className='ml-3 text-sm text-gray-700' htmlFor={option.value}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

          </div>

        </Grid>

        <Grid item xs={9}>
          <div className='space-y-7'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {orders && orders.map((order) => <OrderCard key={order._id} order={order} />)}
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Order;