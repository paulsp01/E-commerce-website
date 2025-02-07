import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliverOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Grid,
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AvatarGroup,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const OrderTableView = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
 
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.order,adminOrder.deleteOrders]);
  console.log("admin orders", adminOrder);

  

  

  return (
    <div className='shadow-lg shadow-black pb-5 border border-black'  >
      <Card sx={{ mt: 2 }}>
        <CardHeader title="Recent Orders" />

        <TableContainer sx={{}} component={Paper}>
          <Table
            sx={{ minWidth: 650, bgcolor: "#190d2b", color: "white" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Image</TableCell>
                {/* <TableCell sx={{ color: "white" }} align="left">Category</TableCell> */}
                <TableCell sx={{ color: "white" }} align="left">
                  Title
                </TableCell>
               
                <TableCell sx={{ color: "white" }} align="left">
                  ProductId
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Quantity
                </TableCell>

                <TableCell sx={{ color: "white" }} align="left">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "white" }}>
              {adminOrder?.orders?.slice(0,3).map?.((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    color: "white",
                  }}
                >
                  <TableCell align="left">
                    {/* <AvatarGroup sx={{justifyContent:"start", flexDirection: "column"}}>
                    {item.orderItems.map((orderItem)=><Avatar src={orderItem?.product?.imageUrl} />)}
                  </AvatarGroup> */}

                    <Grid container xs={6} sx={{ width: "fit-content" }}>
                      {item.orderItems.map((orderItem, index) => (
                        <Grid
                          item
                          xs={5} // Each column takes half the width (2 columns in total)
                          key={orderItem._id}
                          sx={{ display: "flex", justifyContent: "start" }} // Ensures perfect alignment
                        >
                          <Avatar src={orderItem?.product?.imageUrl} />
                        </Grid>
                      ))}
                    </Grid>
                  </TableCell>
                  {/* <TableCell sx={{ color: "white" }} align="left" component="th" scope="row">
                {item.orderItems.map((orderItem)=><p> {orderItem.product.category.name}</p>)}
                 
                </TableCell> */}
                  <TableCell
                    sx={{ color: "white" }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {item.orderItems.map((orderItem) => (
                      <p> {orderItem.product.title}</p>
                    ))}
                  </TableCell>
                 
                  <TableCell sx={{ color: "white" }} align="left">
                    {" "}
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?._id}</p>
                    ))}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {item.totalPrice}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {" "}
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.quantity}</p>
                    ))}
                  </TableCell>
                  <TableCell sx={{ color: "black" }} align="left">
                   
                      <p
                        className={`${
                          item.orderStatus === "CONFIRMED"
                            ? "bg-[#e6fa50]  px-2 py-1 rounded-full"
                            : item.orderStatus === "SHIPPED"
                            ? "bg-[#54f7e6]  px-2 py-1 rounded-full"
                            : item.orderStatus === "PLACED"
                            ? "bg-[#ffb164] px-2 py-1 rounded-full "
                            : item.orderStatus === "PENDING"
                            ? "bg-[#2af556]  px-2 py-1 rounded-full"
                            : "bg-[#fb64fd]  px-2 py-1 rounded-full"
                        }`}
                      >
                        {" "}
                        {item.orderStatus}{" "}
                      </p>
                   
                    
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
