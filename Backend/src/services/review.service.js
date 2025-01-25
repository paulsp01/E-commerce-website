const reviewModel =require("../models/review.model")
const productService=require("./product.service")


module.exports.createReview=async (reqData,user) => {
    const product=await productService.findProductById(reqData.productId)

    const review=await reviewModel.create({
        user:user._id,
        product:product._id,
        review:reqData.review,
        createdAt:new Date()
    })
   
    return review
}

module.exports.getAllReview=async (productId)=>{
    const product=await productService.findProductById(reqData.productId)
    return await reviewModel.find({product:productId}).populate("user")

}