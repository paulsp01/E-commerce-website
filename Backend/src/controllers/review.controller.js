const reviewService=require("../services/review.service")

module.exports.createReview=async (req,res)=>{
    try {
        const user=req.user
        const review=await reviewService.createReview(req.body,user)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports.getAllReviews=async (req,res)=>{
    try {
        
        const productId=req.params.productId
        const review=await reviewService.getAllReview(productId)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}