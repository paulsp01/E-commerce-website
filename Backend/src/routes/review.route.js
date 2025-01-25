const express = require('express');
const router = express.Router();
const reviewController=require("../controllers/review.controller")
const authMiddleware=require("../middleware/auth-middleware")

router.post("/create",authMiddleware.authenticate,reviewController.createReview)
router.get("/product/:productId",authMiddleware.authenticate,reviewController.getAllReviews)

module.exports = router;