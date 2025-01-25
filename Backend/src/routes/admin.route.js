const express = require('express');
const adminOrderController=require("../controllers/adminOrder.controller");
const authMiddleware=require("../middleware/auth-middleware");



const router = express.Router();


router.get('/',authMiddleware.authenticate,adminOrderController.getAllOrders );
router.put('/:orderId/confirmed', authMiddleware.authenticate,adminOrderController.confirmOrders );
router.put('/:orderId/ship', authMiddleware.authenticate,adminOrderController.shipOrders );
router.put('/:orderId/deliver', authMiddleware.authenticate,adminOrderController.deliverOrders );
router.put('/:orderId/cancel', authMiddleware.authenticate,adminOrderController.cancelOrders );
router.delete('/:orderId/delete', authMiddleware.authenticate,adminOrderController.deleteOrders );





module.exports = router;