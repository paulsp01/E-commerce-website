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

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray=[...anchorEl]
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray);
   
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl]
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
  
    dispatch(getOrders());
  }, [adminOrder.order, adminOrder.deleteOrder]);

  

  const handleShipped = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmed = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDelivered = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  };

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose();
  };

  return (
    <div className="p-10">
      <Card sx={{ mt: 2 }}>
        <CardHeader title="All Orders" />
        <TableContainer sx={{}} component={Paper}></TableContainer>
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
                  UserId
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
                  Edit/Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "white" }}>
              {adminOrder?.orders?.map?.((item,index) => (
                <TableRow
                  key={item._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    color: "white",
                  }}
                >
                  <TableCell align="left">
                   

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
                    {item.user._id}
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
                  <TableCell sx={{ color: "white" }} align="left">
                    <Button
                      sx={{
                        color: "black",
                        borderColor: "white",
                        fontWeight: 500,
                      }}
                      id="basic-button"
                      aria-controls={`basic-menu-${item._id}`}
                      aria-haspopup="true"
                      aria-expanded={Boolean(anchorEl[index])}
                      onClick={(event)=>handleClick(event,index)}
                    >
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
                    </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmed(item._id)}>
                        Confirmed{" "}
                      </MenuItem>
                      <MenuItem onClick={() => handleShipped(item._id)}>
                        Shipped{" "}
                      </MenuItem>
                      <MenuItem onClick={() => handleDelivered(item._id)}>
                        Delivered{" "}
                      </MenuItem>
                    </Menu>
                    <Button
                      onClick={() => handleDelete(item._id)}
                      variant="outlined"
                      sx={{ color: "white", borderColor: "white", mt: 1 }}
                    >
                      Delete
                    </Button>
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

export default OrdersTable;
