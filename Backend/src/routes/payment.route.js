const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const paymentController=require("../controllers/payment.controller");


router.post("/:id",authMiddleware.authenticate,paymentController.createPaymentLink)
router.get("/",authMiddleware.authenticate,paymentController.updatePaymentInfo)






module.exports = router;