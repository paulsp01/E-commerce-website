const cartModel=require("../models/cart.model")
const cartItemModel=require("../models/cartItem.model")
const productModel=require("../models/product.model")

module.exports.createCart=async (user)=>{
  
  try {
    const cart=new cartModel({user})
    const createdCart=await cart.save();
    return createdCart
    
  } catch (error) {
    throw new Error(error.message)
  }
}


module.exports.findUserCart=async (user)=>{
  try {

    let cart=await cartModel.findOne({user})
    let cartItem=await cartItemModel.find({cart:cart._id}).populate('product')
    cart.cartItem=cartItem
    let totalPrice=0;
    let totalDiscountedPrice=0;
    let totalItem=0;

    for(let cartItem of cart.cartItem){
      totalPrice+=cartItem.price
      totalDiscountedPrice+=cartItem.discountedPrice
      totalItem+=cartItem.quantity
    }
    cart.totalPrice=totalPrice
    cart.totalDiscountedPrice=totalDiscountedPrice
    cart.discount=totalPrice-totalDiscountedPrice
    cart.totalItem=totalItem
  
     await cart.save()
     return cart
    
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports.addCartItem=async (userId,req)=>{
  try {

    const cart=await cartModel.findOne({user:userId})
    const product=await productModel.findById(req.productId)

    const isPresent=await cartItemModel.findOne({product:product._id,cart:cart._id,userId})
    if(!isPresent){
      const cartItem=await cartItemModel.create({
        product:product._id,
        cart:cart._id,
        quantity:1,
        userId,
        price:product.price,
        size:req.size,
        discountedPrice:product.discountedPrice,

      })

      //const createdCartItem=await cartItem.save()
      cart.cartItem.push(cartItem)
      await cart.save()
      return cartItem
    }
    return isPresent

    
  } catch (error) {
    throw new Error(error.message)
  }
}