import { Grid } from '@mui/material'
import React from 'react'
import Achivment from './Achivment'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrderTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <Grid  container spacing={2} >
            <Grid item xs={12} md={4}>
                <Achivment/>

            </Grid>
            <Grid  item xs={12} md={8}>
              <MonthlyOverview/>

            </Grid>
            <Grid  item xs={12} md={6}>
             <OrderTableView/>

            </Grid>
            <Grid  item xs={12} md={6}>
             <ProductTableView/>

            </Grid>

        </Grid>

    </div>
  )
}

export default Dashboard