import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
 'Placed',
 'Order Confirmed',
 'Shipped',
 'Out For Delivery',
 'Delivered'
];

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='w-full'>
        <Box sx={{ width: '100%' }}>
          <Stepper 
            activeStep={activeStep} 
            alternativeLabel
            sx={{
             
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'white', // color for active step number
              },
              '& .MuiStepIcon-root.Mui-active': {
                color: '#7a31f7', // color for active step icon
              },
              '& .MuiStepIcon-root.Mui-completed': {
                color: '#7a31f7', // color for completed step icon
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
     


    </div>
  )
}

export default OrderTracker