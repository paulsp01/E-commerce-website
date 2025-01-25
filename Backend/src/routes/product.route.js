const express = require('express');
const productController=require("../controllers/product.controller");
const authMiddleware=require("../middleware/auth-middleware");
const router = express.Router();


router.get("/id/:id",authMiddleware.authenticate,productController.findProductById)
router.get("/",authMiddleware.authenticate,productController.getAllProducts)




module.exports = router;