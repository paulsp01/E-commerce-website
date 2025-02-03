import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../State/Product/Action';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const CreateProductForm = () => {
  const initialSizes=[
    {name:"S", quantity:0},
    {name:"M", quantity:0},
    {name:"L", quantity:0},
  ]

  const [productData,setProductData]=useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    price:"",
    discountParsent:"",
    size:initialSizes,
    quantity:"",
    topLevelCategory:"",
    secondLevelCategory:"",
    thirdLevelCategory:"",
    description:"",
  })
  
   const dispatch = useDispatch()
   const jwt=localStorage.getItem("jwt")

  const handleChange=(e)=>{
    let {name,value}=e.target
    setProductData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }

  const handleSizeChange=(e,index)=>{
    let {name,value}=e.target
    name=="size_quantity"?name="quantity":name=e.target.name

    const sizes=[...productData.size]
    sizes[index][name]=value
    setProductData((prevState)=>({
      ...prevState,
      size:sizes
    }))

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addProduct(productData))
    console.log("productData",productData)
  }

  return (
   <div className='p-10'>
    <Typography
    variant='h3'
    sx={{textAlign:"center"}}
    className='py-10 text-center'
    >
      Add New Product

    </Typography>

    <form
    onSubmit={handleSubmit}
    className='min-h-screen'
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
          fullWidth
          label="Image URL"
          name='imageUrl'
          value={productData.imageUrl}
          onChange={handleChange}
          />

          

        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="brand"
          name='brand'
          value={productData.brand}
          onChange={handleChange}
          />

        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="color"
          name='color'
          value={productData.color}
          onChange={handleChange}
          />

        </Grid>


        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="quantity"
          name='quantity'
          value={productData.quantity}
          onChange={handleChange}
          type='number'
          />

        </Grid>


        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="price"
          name='price'
          value={productData.price}
          onChange={handleChange}
          type='number'
          />

        </Grid>


        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Discounted Price"
          name='discountedPrice'
          value={productData.discountedPrice}
          onChange={handleChange}
          type='number'
          />

        </Grid>


        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Discounted Percentage"
          name='discountePersent'
          value={productData.discountParsent}
          onChange={handleChange}
          type='number'
          />

        </Grid>

        <Grid item xs={6} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Top Level Category</InputLabel>
            <Select
            name='topLevelCategory'
            value={productData.topLevelCategory}
            onChange={handleChange}
            label="Top Level Category"
            >
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>


            </Select>
          </FormControl>
        </Grid>



        <Grid item xs={6} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Top Level Category</InputLabel>
            <Select
            name='secondLevelCategory'
            value={productData.topLevelCategory}
            onChange={handleChange}
            label="Second Level Category"
            >
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
              <MenuItem value="brands">Brands</MenuItem>


            </Select>
          </FormControl>
        </Grid>



        <Grid item xs={6} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Top Level Category</InputLabel>
            <Select
            name='thirdLevelCategory'
            value={productData.topLevelCategory}
            onChange={handleChange}
            label="Third Level Category"
            >
              <MenuItem value="top">Tops</MenuItem>
              <MenuItem value="women_dress">Dresses</MenuItem>
              <MenuItem value="t-shirts">T-Shirts</MenuItem>
              <MenuItem value="saree">Saree</MenuItem>

              <MenuItem value="lenga_choli">Lengha Choli</MenuItem>



            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          name='description'
          rows={3}
          value={productData.description}
          onChange={handleChange}
          />

          

        </Grid>


        {productData.size.map((size,index)=>(
          <Grid container item spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
              label="Size Name"
              name='name'
              value={size.name}
              onChange={(event)=>handleSizeChange(event,index)}
              required
              fullWidth
              />

              

              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                label="Quantity"
                name='size_quantity'
                type='number'
                onChange={(event)=>handleSizeChange(event,index)}
                required
                fullWidth
                />

               

                </Grid>

          </Grid>

        ))}


        <Grid item xs={12}>
          <Button
          variant='contained'
          sx={{p:1.8}}
          className='py-20'
          size='large'
          type='submit'
          >
         Add New Product
          </Button>

        </Grid>

      </Grid>

    </form>
   </div>
  )
}

export default CreateProductForm