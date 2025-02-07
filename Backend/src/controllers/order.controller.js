const orderService=require("../services/orderService")


module.exports.createOrder=async (req,res)=>{
    try {
      const user= req.user
     
     
        const createdOrder=await orderService.createOrder(user,req.body)
       
        return res.status(200).send(createdOrder)
        
    } catch (error) {
        console.error("Error in createOrder controller:", error);
        return res.status(500).send({ error: error.message });
    }
}

module.exports.findOrderById=async (req,res)=>{
    try {

        const findOrder=await orderService.findOrderById(req.params.id)
        return res.status(200).send(findOrder)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}


module.exports.orderHistory=async (req,res)=>{
 
    try {
     
      
        const userId = req.user._id; // Ensure userId is an ObjectId
      
        const orderHistory=await orderService.usersOrderHistory(userId)
       
        return res.status(200).send(orderHistory)
        
    } catch (error) {
        console.error("Error in orderHistory controller:", error);
        return res.status(500).send({ error: error.message });
    }
}