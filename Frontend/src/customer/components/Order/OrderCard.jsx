import { Grid } from "@mui/material";
import React from "react";
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrderClick = () => {
    dispatch(getOrderById(order._id));
    navigate(`/account/order/${order._id}`);
  };

  return (
    <div onClick={handleOrderClick} className="p-5 mb-7 shadow-md shadow-gray-700 hover:shadow-xl hover:shadow-gray-500 border cursor-pointer">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex flex-col cursor-pointer">
            {order.orderItems.map((orderItem, index) => (
              <div key={orderItem._id} className="flex mb-2">
                <img className="w-[5rem] h-[5rem] object-cover object-top" src={orderItem.product.imageUrl} alt="Product" />
                <div className="ml-5 space-y-2">
                  <p>{orderItem.product.name}</p>
                  <p className="opacity-50 text-xs font-semibold">Size: {orderItem.size}</p>
                  <p className="opacity-50 text-xs font-semibold">Color: {orderItem.product.color}</p>
                </div>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{order.totalDiscountedPrice}</p>
        </Grid>

        <Grid item xs={4}>
          {(order.orderStatus === "SHIPPED" || order.orderStatus === "PLACED" || order.orderStatus === "CONFIRMED") && (
            <p>
              <DeliveryDiningOutlinedIcon fontSize="extrasmall" sx={{ color: "blue", border: "1px solid blue", borderRadius: "50%", padding: "1px" }} className="mr-1" />
              <span className="font-bold pl-1">
                Expected Delivery On {new Date(new Date(order.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </p>
          )}
          {order.orderStatus === "DELIVERED" && <p className="text-xs flex items-center justify-center">Your Item Has Been Delivered</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
