const express = require('express');
const router = express.Router();
const ratingController=require("../controllers/rating.controller")
const authMiddleware=require("../middleware/auth-middleware")

router.post("/create",authMiddleware.authenticate,ratingController.createRating)
router.get("/product/:productId",authMiddleware.authenticate,ratingController.getAllRatings)

module.exports = router;