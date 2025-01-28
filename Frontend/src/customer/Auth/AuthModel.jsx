import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUpForm from './SignUpForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline:'none',
  boxShadow: 24,
  p: 4,
};


const AuthModel = ({handleClose,open}) => {
    // const [open, setOpen] = React.useState(false);
     //const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const location=useLocation()
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {location.pathname==="/login"?<LoginForm/>:<SignUpForm/>}
           
         
         
        </Box>
      </Modal>
    </div>
  )
}

export default AuthModel