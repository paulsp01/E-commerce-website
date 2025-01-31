import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";


const LoginForm = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()


    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const data=new FormData(e.currentTarget);
    
        const userData={
            
            email:data.get("email"),
            password:data.get("password"),
        }
        dispatch(login(userData))
    
       
      };
  return (
    <div>
         <form onSubmit={handleSubmit}>
           <Grid container spacing={3}>
            
   
             
   
             <Grid item xs={12}>
               <TextField
                 required
                 id="email"
                 name="email"
                 label="Email"
                 fullWidth
                 autoComplete="email"
               />
             </Grid>
   
             <Grid item xs={12}>
               <TextField
                 required
                 id="password"
                 name="password"
                 label="Password"
                 fullWidth
                 autoComplete="password"
               />
             </Grid>
   
             <Grid item xs={12}>
               <Button 
               className=" w-full"
               type="submit"
               variant="contained"
               size="large"
               sx={{padding: ".8rem 0" ,bgcolor: "#b734eb"}}
               >
                   Login              
                    </Button>
             </Grid>
           </Grid>
         </form>

         <div className="flex justify-center items-center flex-col">
        <div className="flex py-3 items-center">
            <p>If you do not have account?</p>
            <button className="text-blue-800 ml-2  " onClick={()=>navigate("/register")} size="small">Register</button>
        </div>
      </div>
       </div>
  )
}

export default LoginForm