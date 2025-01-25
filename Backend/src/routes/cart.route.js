const express = require('express');
const router = express.Router();
const cartController=require("../controllers/cart.controller")
const authMiddleware=require("../middleware/auth-middleware")

router.get("/",authMiddleware.authenticate,cartController.findUserCart)
router.put("/add",authMiddleware.authenticate,cartController.addItemToCart)

module.exports = router;