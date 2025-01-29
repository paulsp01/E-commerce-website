const categoryModel=require("../models/category.model");
const productModel=require("../models/product.model");

module.exports.createProduct=async (reqData)=>{

    let  topLevel=await categoryModel.findOne({name:reqData.topLevelCategory})

    if(!topLevel){
        topLevel=new categoryModel({
            name:reqData.topLevelCategory,
            level:1
        })
        await topLevel.save()
    }

    let secondLevel=await categoryModel.findOne({
        name:reqData.secondLevelCategory,
        parentcategoty:topLevel._id,

    })

    if(!secondLevel){
        secondLevel=new categoryModel({

            name:reqData.secondLevelCategory,
            parentcategoty:topLevel._id,
            level:2
        })
        await secondLevel.save()
    }

    let thirdLevel=await categoryModel.findOne({
        name:reqData.thirdLevelCategory,
        parentcategoty:secondLevel._id,
    })

    if(!thirdLevel){
        thirdLevel=new categoryModel({
            name:reqData.thirdLevelCategory,
            parentcategoty:secondLevel._id,
            level:3

        })
        await thirdLevel.save()
    }

    const product=await productModel.create({
        title:reqData.title,
        color:reqData.color,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountPersent:reqData.discountPersent,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        size:reqData.size,
        quantity:reqData.quantity,
        category:thirdLevel._id,

    })

   
    return product
}

module.exports.deleteProduct=async (productId)=>{

    const product=await this.findProductById(productId)

    await productModel.findByIdAndDelete(productId)
    return "Product deleted successfully"
}

module.exports.updateProduct=async (productId, reqData)=>{
    const updated = await productModel.findByIdAndUpdate(productId, reqData, { new: true });
   
    return updated;
}

module.exports.findProductById=async (productId)=>{
    const product=await productModel.findById(productId).populate("category").exec()


    if(!product){
        throw new Error("product is not found",productId);
        
    }

    return product
}

module.exports.getAllProducts = async (reqQuery) => {
    let { category, pageNumber, pageSize,color,size,minPrice,maxPrice,minDiscount,stock,sort } = reqQuery;
    
    pageNumber = parseInt(pageNumber, 6); // Convert to number
    
   
    pageSize = reqQuery.pageSize ? parseInt(reqQuery.pageSize) : 6 ;
   
    let query = productModel.find().populate("category");
  
    if (category) {
      const existCategory = await categoryModel.findOne({ name: category });
      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        console.log("Category not found");
        return { content: [], currentPage: pageNumber, totalPages: 0 };
      }
    }
   

    if (color) {
        const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
        query = query.where("color").regex(colorRegex);
      }
     


      if (size) {
        const sizeSet = new Set(size);
        query = query.where("size.name").in([...sizeSet]);
      }
    

      if (minPrice !== undefined && maxPrice !== undefined && minDiscount !== undefined) {
        query = query.where({
          $expr: {
            $and: [
              { $gte: [{ $toDouble: "$discountedPrice" }, parseFloat(minPrice)] },
              { $lte: [{ $toDouble: "$discountedPrice" }, parseFloat(maxPrice)] },
              { $gte: [{ $toDouble: "$discountPersent" }, parseFloat(minDiscount)] }
            ]
          }
        });
      }
      


    
  if (stock && stock !== 'null') {
    if (stock == 'in_stock') {
      query = query.where("quantity").gte(1);
    } else if (stock === 'out_of_stock') {
      query = query.where("quantity").lte(0);
    }
  }
 
  if (sort) {
    const sortDirection = sort == 'price_high' ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }
  
  
    try {
      const totalProducts = await productModel.countDocuments(query);
      
      if (totalProducts === 0) {
        return { content: [], currentPage: pageNumber, totalPages: 0 };
      }
      const skip = (pageNumber - 1) * pageSize;
     
      query = query.skip(skip).limit(pageSize);
  
    
        const products = await query.exec();
       
        const totalPages = Math.ceil(totalProducts / pageSize);
        return { content: products, currentPage: pageNumber, totalPages: totalPages };
      
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products");
    }
  };

module.exports.createdMultipleProduct=async (products)=>{
    for(let product of products){
        await createProduct(product)
    }

}