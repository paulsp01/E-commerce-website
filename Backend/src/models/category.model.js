const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    parentcategoty:{
        type: mongoose.Schema.Types.ObjectId,
       ref:'categories'
    },



   level:{
    type:Number,
    required: true,
   }
})

const categoryModeel=mongoose.model("categories", categorySchema)
module.exports = categoryModeel