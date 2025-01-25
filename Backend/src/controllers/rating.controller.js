const ratingService=require("../services/rating.service")

module.exports.createRating=async (req,res)=>{
    try {
        const user=req.user
        const review=await ratingService.createdRating(req.body,user)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports.getAllRatings=async (req,res)=>{
    try {
        
        const productId=req.params.productId
        const review=await ratingService.getProductRating(productId)
        return res.status(201).send(review)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}