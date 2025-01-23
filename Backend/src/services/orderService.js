const cartService=require('./cart.service')
const addressModel=require("../models/address.model")
const orderItemModel=require("../models/orderItems.model");
const orderModel = require('../models/order.model');


module.exports.createOrder=async (user,shippingAddress)=>{
    let address;

    if(shippingAddress._id){
        let existAddress=await  addressModel.findById(shippingAddress._id)
        address=existAddress
    }else{
        address=new addressModel(shippingAddress)
        address.user=user
        await address.save()
        user.address.push(address)
        await user.save()
    }

    const cart=await cartService.findUserCart(user._id)
    const orderItems=[]

    for(let item of cart.cartItem){
        const orderItem=new orderItemModel({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.userId,
            discountedPrice:item.discountedPrice,
        })

        const createdOrderItem=await orderItem.save()
        orderItems.push(createdOrderItem)
    }

    const createdOrder=new orderModel({
        user,
        orderItems,
        totalprice:cart.totalPrice,
        totalDiscountedprice:cart.totalDiscountedPrice,
        discount:cart.discount,
        totalItem:cart.totalItem,
        shippingAddress:address

    })

    const savedOrder=await createdOrder.save()
    return savedOrder
}

module.exports.placeOrder=async (orderId)=>{
    const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')
    order.orderStatus="PLACED"
    order.paymentDetails.status="COMPLETED"

    return await order.save()
}

module.exports.confirmOrder=async (orderId)=>{
    const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')
    order.orderStatus="CONFIRMED"
    
    return await order.save()
}
module.exports.shipOrder=async (orderId)=>{
    const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')
    order.orderStatus="SHIPPED"
    
    return await order.save()
}
module.exports.deliverOrder=async (orderId)=>{
    const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')
    order.orderStatus="DELIVERED"
    
    return await order.save()
}

module.exports.cancelOrder=async (orderId)=>{
    const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')
    order.orderStatus="CANCELLED"
    
    return await order.save()
}

module.exports.usersOrderHistory=async (userId)=>{
   try {
    
    const orders=await orderModel.find({user:userId,orderStatus:"PLACED"})
    .populate({path:"orderItems",populate:{path:"product"}}).lean

    return orders

   } catch (error) {
    throw new Error(error.message);
   }
}


module.exports.getAllOrders=async ()=>{
    try {

        return await orderModel.find()
        .populate({path:"orderItems",populate:{path:"product"}}).lean
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports.deleteOrder=async (orderId)=>{
const order=await orderModel.findById({orderId}).populate('user').populate({path:"orderItems",populate:{path:"product"}}).populate('shippingAddress')

await orderModel.findByIdAndDelete(order._id)
}