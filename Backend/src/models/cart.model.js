const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    cartItem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cartitems'

    }],
    totalPrice:{
        type:Number,
        required:true,
        default: 0
    },
    totalItem:{
        type:Number,
        required:true,
        default: 0

    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default: 0
    },
    discount:{
        type:Number,
        required:true,
        default: 0
    }
})

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;