const userModel=require("../models/user.model");
const userService=require("../services/user.service");

module.exports.getUserProfile=async (req,res)=>{
  try {
    const jwt=  req.headers.authorization.split(' ')[1];
    if(!jwt){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user= await userService.getUserProfileByToken(jwt);
    return res.status(200).send(user);
  } catch (error) {
    console.error('Error getting user profile:', error.message); // Log the error
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}

module.exports.getAllUsers=async (req,res)=>{
    try {
        const users=await userService.getAllUser();
        return res.status(200).send(users);
    } catch (error) {
        console.error('Error getting all users:', error.message); // Log the error
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}