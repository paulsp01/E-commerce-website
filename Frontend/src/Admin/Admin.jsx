import React, { useState } from 'react'
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FaceIcon from '@mui/icons-material/Face';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './Components/Dashboard';
import ProductsTable from './Components/ProductsTable';
import OrdersTable from './Components/OrdersTable';
import CustomerTable from './Components/CustomerTable';
import CreateProductForm from './Components/CreateProductForm';
const menu=[
    {name:"Dashboard",path:"/admin ",icon:<DashboardIcon/>},
    {name:"Products",path:"/admin/products ",icon:<ProductionQuantityLimitsIcon/>},
    {name:"Customers",path:"/admin/customers ",icon:<FaceIcon/>},
    {name:"Orders",path:"/admin/orders ",icon:<QrCodeScannerIcon/>},
    {name:"AddProducts",path:"/admin/product/create ",icon:<AddShoppingCartIcon/>},
    
]
const Admin = () => {
  const theme=useTheme()
  const isLargestScreen=useMediaQuery(theme.breakpoints.up("lg"))
  const [sidebarvisible,setSidebarvisible]=useState(false)
  const navigate=useNavigate()

  const drawer=(
    <Box
    sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height:"100%",
    }}
    >
    {/* {isLargestScreen && <Toolbar/>} */}
    <List>
      {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
        <ListItemButton>
          <ListItemIcon>
          {item.icon}
          </ListItemIcon>
          <ListItemText>
            {item.name}
          </ListItemText>
        </ListItemButton>
      </ListItem>)}
    </List>

    <List>
     <ListItem  disablePadding >
        <ListItemButton>
          <ListItemIcon>
          <AccountCircleIcon/>
          </ListItemIcon>
          <ListItemText>
            Account
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
    </Box>
  )
  return (
    
      <div className='relative flex h-[100vh] '>
        <CssBaseline/>
        <div className='w-[15%] border border-r-gray-300 h-full fixed top-0' >
        {drawer}
      </div>


      <div className='w-full h-full ml-[15%]'>

        <Routes>
          <Route  path='/' element={<Dashboard/>} />
          <Route  path='/products' element={<ProductsTable/>} />
          <Route  path='/orders' element={<OrdersTable/>} />
          <Route  path='/customers' element={<CustomerTable/>} />
          <Route  path='/product/create' element={<CreateProductForm/>} />
        </Routes>
      </div>

      </div>
   
  )
}

export default Admin
