const orderService=require("../services/orderService")


module.exports.createOrder=async (req,res)=>{
    try {
      const user= req.user
      
      
     
        const createdOrder=await orderService.createOrder(user,req.body)
       
        return res.status(200).send(createdOrder)
        
    } catch (error) {
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
      
        const user=await req.user
       
        const orderHistory=await orderService.usersOrderHistory(user._id)
        return res.status(200).send(orderHistory)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}