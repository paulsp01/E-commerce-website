const express = require('express');
const router = express.Router();
const cartItemController=require("../controllers/cartItem.controller")
const authMiddleware=require("../middleware/auth-middleware")


router.put("/:id",authMiddleware.authenticate,cartItemController.updateCartItem)
router.delete("/:id",authMiddleware.authenticate,cartItemController.removeCartItem)

module.exports = router;