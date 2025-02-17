const jwt =require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config()

module.exports. generateToken=(userId) => {
    const token=jwt.sign({userId},process.env.JWT_KEY,{expiresIn:'24h'})
    return token


}


module.exports. getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,process.env.JWT_KEY)
    return decodedToken
}
