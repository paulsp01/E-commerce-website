const userModel=require('../models/user.model')
const bcrypt=require("bcrypt")
const jwtProvider=require("../config/jwtProvider")

module.exports.createdUser=async (userData)=>{
    try{
      let {firstname,lastname,email,password} = userData
       if(!firstname || !lastname || !email || !password ){
            throw new Error('All fields are required');
        }
        
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exist' });
        }

        let hashPassword=await bcrypt.hash(password,10)
          

        const user=await userModel.create({
           firstname,
           lastname,
            email,
            password:hashPassword,
            
            
        })

        return user;
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports.findUserById=async ({userId})=>{
  try{
    const user=await userModel.findById(userId)
   
    //.populate('address')
    if(!user){
     throw new Error("user not find",userId)
    }
    return user;
  }catch(error){
    throw new Error(error.message);
  }
}

module.exports.findUserByEmail=async (email)=>{
    try{
      const user=await userModel.findOne({email})
      
      if(!user){
       throw new Error("user not find",email)
      }
      return user;
    }catch(error){
      throw new Error(error.message);
    }
  }


module.exports.getUserProfileByToken=async (token)=>{
  try{
    const userId=jwtProvider.getUserIdFromToken(token)
    
   
    const user=await this.findUserById(userId)
   
    if(!user){
      throw new Error("user not find",userId)
     }
    return user;
  }catch(error){
    throw new Error(error.message);
  }
    
}


module.exports.getAllUser=async ()=>{
try{
  const users=await userModel.find()
  return users
}catch(error){
  throw new Error(error.message);
}
}