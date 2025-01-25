const cartService=require("../services/cart.service")

module.exports.findUserCart=async (req,res)=>{

    try {
        const user=req.user
        const cart=await cartService.findUserCart(user._id)
        return res.status(200).send(cart)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports.addItemToCart=async (req,res)=>{

    try {
        const user=req.user
        const cartItem=await cartService.addCartItem(user._id,req.body)
        return res.status(200).send(cartItem)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}