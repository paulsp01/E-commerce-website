const cartItemService=require('../services/cartItem.service')

module.exports.updateCartItem=async (req,res)=>{
    try {
        const user=await req.user
        const updatedCartItem=await cartItemService.updateCartItem(user._id,req.params.id,req.body)
        return res.status(200).send({ message: "updated cart Item",  updatedCartItem });
        
    } catch (error) {
        return res.status(500).send( {error: error.message });
    }
}

module.exports.removeCartItem=async (req,res)=>{
    try {
        const user=await req.user
        
        const CartItem=await cartItemService.removeCartItem(user._id,req.params.id)
        return res.status(200).send({ message: "remove cart Item",  CartItem });
        
    } catch (error) {
        return res.status(500).send(  {error:error.message} );
    }
}