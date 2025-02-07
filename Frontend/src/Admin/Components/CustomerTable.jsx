import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader } from '@mui/material';
import { getOrders } from '../../State/Admin/Order/Action';

const CustomerTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);
  console.log("adminOrder from customer", adminOrder);

  useEffect(() => {
    console.log("dispatching here ");
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div className='p-5'>
       <Card sx={{ mt: 2 }}>
        <CardHeader title="Customer's Details" />
        <TableContainer sx={{}} component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: '#190d2b', color: "white" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} align="left">UserId</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Name</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Address</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Contact</TableCell>
                <TableCell sx={{ color: "white" }} align="left">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "white" }}>
              {adminOrder?.orders.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "white" }}
                >
                  <TableCell sx={{ color: "white" }} align="left" component="th" scope="row">
                    {item?.user?._id}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {item?.user?.firstname + " " + item?.user?.lastname}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {item?.shippingAddress?.address + ", " + item?.shippingAddress?.state + ", " + item?.shippingAddress?.zip}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {item?.shippingAddress?.phone}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {item?.user?.email}
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

export default CustomerTable;