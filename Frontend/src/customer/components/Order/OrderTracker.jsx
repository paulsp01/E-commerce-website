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

const getStepIndex = (status) => {
  switch (status) {
    case 'PLACED':
      return 1;
    case 'CONFIRMED':
      return 2;
    case 'SHIPPED':
      return 3;
    case 'OUT_FOR_DELIVERY':
      return 4;
    case 'DELIVERED':
      return 5;
    default:
      return 0;
  }
};

const OrderTracker = ({ activeStep }) => {
  const stepIndex = getStepIndex(activeStep);

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='w-full'>
        <Box sx={{ width: '100%' }}>
          <Stepper 
            activeStep={stepIndex} 
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
  );
};

export default OrderTracker;