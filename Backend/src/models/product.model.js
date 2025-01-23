const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required: true,
    },
    discountedPrice:{
        type: String,
        required:true
    },
    discountPersent:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required: true,
    },
    brand:{
        type: String,
       
    },
    color:{
        type: String,
       
    },
    size:[{
        name:{
            type: String,
            required:true
        },
        quantity:{
            type: Number
        }
    }],
    imageUrl:{
        type: String,
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ratings'
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'reviews'
    }],
    numRatings:{
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }



})

module.exports = mongoose.model('products', productSchema);