const express = require('express');
const router = express.Router();
const orderController=require("../controllers/order.controller")
const authMiddleware=require("../middleware/auth-middleware")


router.post("/",authMiddleware.authenticate,orderController.createOrder)
router.get("/:id",authMiddleware.authenticate,orderController.findOrderById)
router.get("/user",authMiddleware.authenticate,orderController.orderHistory)




module.exports = router;