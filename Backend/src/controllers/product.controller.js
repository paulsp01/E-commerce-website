const productServce=require("../services/product.service")

module.exports.createProduct=async (req,res)=>{
   try {
    const product=await productServce.createProduct(req.body)
    return res.status(201).send(product)
    
   } catch (error) {
    return res.status(500).send({ error: error.message });
   }
}


module.exports.deleteProduct=async (req,res)=>{
    try {
        const productId=req.params.id
     const product=await productServce.deleteProduct(productId)
     return res.status(201).send(product)
     
    } catch (error) {
     return res.status(500).send({ error: error.message });
    }
 }


 module.exports.updateProduct=async (req,res)=>{
    try {
        const productId=req.params.id
     const product=await productServce.updateProduct(productId,req.body)
     return res.status(201).send("deleted successfully",product)
     
    } catch (error) {
     return res.status(500).send({ error: error.message });
    }
 }


 module.exports.findProductById=async (req,res)=>{
    try {
        const productId=req.params.id
     const product=await productServce.findProductById(productId)
     return res.status(201).send(product)
     
    } catch (error) {
     return res.status(500).send({ error: error.message });
    }
 }

 module.exports.getAllProducts=async (req,res)=>{
    try {
       
     const product=await productServce.getAllProducts(req.query)
     return res.status(201).send(product)
     
    } catch (error) {
     return res.status(500).send({ error: error.message });
    }
 }

 module.exports.createMultipleProduct=async (req,res)=>{
    try {
       
     const product=await productServce.createdMultipleProduct(req.body)
     return res.status(201).send({message:"products are created succssfully"})
     
    } catch (error) {
     return res.status(500).send({ error: error.message });
    }
 }