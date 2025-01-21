import { Grid } from "@mui/material";
import React from "react";
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 mb-7 shadow-md shadow-gray-700 hover:shadow-xl hover:shadow-gray-500 border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt=""/>

            <div className="ml-5 space-y-2">
                <p>A Beautiful Men's Kurta</p>
                <p className="opacity-50 text-xs font-semibold ">Size: M</p>
                <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1455</p>
        </Grid>

        <Grid item xs={4}>
          {true &&  <p>
            <DeliveryDiningOutlinedIcon  fontSize="extrasmall" sx={{ color: "blue" ,  border: "1px solid blue", 
    borderRadius: "50%", 
    padding: "1px" }}  className="mr-1"/>
            <span className="font-bold pl-1">
             Expected Delivery On March 03
            </span>
          </p>}
         {false && <p className="text-xs flex items-center justify-center">Your Item Has Been Delivered</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
