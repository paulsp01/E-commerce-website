const userService=require("../services/user.service");
const jwtProvider=require("../config/jwtProvider");
const {validationResult}=require('express-validator');
const cartService=require("../services/cart.service");
const bcrypt=require("bcrypt");

module.exports.register=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const user=await userService.createdUser(req.body);
        const jwt=jwtProvider.generateToken(user._id);

        await cartService.createCart(user)
        res.cookie("token", jwt);
        return res.status(200).send({jwt,user,message:"Register Successfully"});
        
    } catch (error) {
        return res.status(500).send({error: error.message});
    }

}

module.exports.login=async(req,res)=>{
    const {password, email} = req.body;

    
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const user = await userService.findUserByEmail(email);
     
        
        if(!user){
            return res.status(404).send({message: "email or password is incorrect"});
        }
        

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).send({message: "email or password is incorrect"});
        }
      
        const jwt=jwtProvider.generateToken(user._id)
        res.cookie("token",jwt)
        return res.status(200).send({jwt, message:"Logged In Successfully"})
        
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}