import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Card, CardHeader } from '@mui/material';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store);
  console.log("products", products);


  const handleProductDelete= (productId) => {
    dispatch(deleteProduct(productId))
  } 

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 50,
      stock: ""
    };
    dispatch(findProducts(data));
  }, [dispatch]);

  return (
    <div className='p-5'>

      <Card  sx={{mt:2}} >
        <CardHeader title="All Products"/>

        <TableContainer sx={{}} component={Paper}>
        <Table sx={{ minWidth: 650, bgcolor: '#190d2b', color: "white" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Image</TableCell>
              <TableCell sx={{ color: "white" }} align="left">Title</TableCell>
              <TableCell sx={{ color: "white" }} align="left">Category</TableCell>
              <TableCell sx={{ color: "white" }} align="left">Price</TableCell>
              <TableCell sx={{ color: "white" }} align="left">Quantity</TableCell>
              <TableCell sx={{ color: "white" }} align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: "white" }}>
            {products?.products?.content.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "white" }}
              >
                <TableCell align="left">
                  <Avatar src={item.imageUrl} />
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left" component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">{item?.category.name}</TableCell>
                <TableCell sx={{ color: "white" }} align="left">{item?.price}</TableCell>
                <TableCell sx={{ color: "white" }} align="left">{item?.quantity}</TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  <Button onClick={() =>handleProductDelete(item._id)} variant='outlined' sx={{ color: "white", borderColor: "white" }}>
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

export default ProductsTable;