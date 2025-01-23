const mongoose = require('mongoose');

const ratingSchema=new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:'users',
        required: true
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref:'products',
        required: true
    },
    rating:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('ratings', ratingSchema);