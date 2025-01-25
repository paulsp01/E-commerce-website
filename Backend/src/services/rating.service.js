const ratingModel=require("../models/rating.model")
const productService=require("./product.service")

module.exports.createdRating=async (req,user) => {
    const product=await productService.findProductById(req.productId)

    const rating=await ratingModel.create({
        product:product._id,
        user:user._id,
        rating:req.rating,
        createdAt:new Date()
    })

    return rating
}


module.exports.getProductRating=async (productId)=>{
    return await ratingModel.find({product:productId})
}