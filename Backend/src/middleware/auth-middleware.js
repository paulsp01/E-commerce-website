const jwtProvider=require("../config/jwtProvider");
const userService=require("../services/user.service");

module.exports.authenticate=async (req,res,next) => {
    try {
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({ message: "Authentication failed: No token provided" });
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        const user=await userService.findUserById(userId);
        req.user=user;
       
        
      
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error",error: error.message});
    }

    next();
}