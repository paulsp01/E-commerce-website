const express = require('express');
const productController=require("../controllers/product.controller");
const authMiddleware=require("../middleware/auth-middleware");
const router = express.Router();


router.post("/",authMiddleware.authenticate,productController.createProduct)
router.delete("/:id",authMiddleware.authenticate,productController.deleteProduct)

router.put("/:id",authMiddleware.authenticate,productController.updateProduct)

router.post("/create",authMiddleware.authenticate,productController.createMultipleProduct)



module.exports = router;