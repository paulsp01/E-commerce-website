import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Grid, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Textarea } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DelivaerAddressForm = () => {
const dispatch=useDispatch()
const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
   const address={
        firstname:data.get('firstname'),
        lastname:data.get('lastname'),
        address:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        zip:data.get("zip"),
        phone:data.get("phone"),

   }
   const orderData={ address, navigate }; // Correctly format orderData with navigate

   dispatch(createOrder(orderData))
    console.log(orderData);
  };
  return (
    <div className="mt-20">
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-2 py-4 border-b cursor-pointer">
            <AddressCard />
            <button className="mt-2 bg-[#7a24d1] text-white p-2 px-4  rounded-md">
              Deliver Here
            </button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="Firstname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Lastname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                    }}
                    
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="off"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "#7a24d1" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DelivaerAddressForm;
