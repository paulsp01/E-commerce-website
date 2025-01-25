const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({

   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
   } ,
   orderItems:[{
     type:mongoose.Schema.Types.ObjectId,
    ref:'orderitems'

   }],
   orderDate:{
    type:Date,
    required:true,
    default:Date.now()
   },
   deliveryDate:{
    type:Date,
   },
   shippingAddress:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'address'
   },
   paymentDetails:{
    paymentmethod:{
        type:String,
    },
    trasactionId:{
        type:String,
    },
    paymentId:{
        type:String,
    },
    paymentStatus:{
        type:String,
        default:"Pending"
    }
   },
   totalPrice:{
    type:Number,
    required:true

   },
   totalDiscountedPrice:{
    type:Number,
    required:true

   },
   discount:{
    type:Number,
    required:true

   },
   orderStatus:{
    type:String,
    required:true,
    default:"Pending"
   },
   totalItem:{
    type:Number,
    required:true

   },
   createdAt:{
    type:Date,
    default:Date.now()
   }
    
})

module.exports = mongoose.model('order', orderSchema);