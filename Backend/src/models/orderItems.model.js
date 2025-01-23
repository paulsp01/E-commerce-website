const mongoose=require("mongoose");

const orderitemsSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    size:{
        type:String,
        required:true

    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    delivartDate:{
        type:Date,
    }
})

module.exports = mongoose.model('orderitems', orderitemsSchema);