const paymentService=require("../services/paymentService")


module.exports.createPaymentLink=async (req,res)=>{
    try {
        const paymentLink=await paymentService.createPaymentLink(req.params.id)
        return res.status(200).send(paymentLink)
        
    } catch (error) {
        console.error("Error in createPaymentLink controller:", error); // Add error logging
        return res.status(500).send(error.message)
    }
}


module.exports.updatePaymentInfo=async (req,res)=>{
    try {
       await paymentService.updatePaymentInfo(req.query)
        return res.status(200).send({message: "payment information updated",status:true})
        
    } catch (error) {
        console.error("Error in updatePaymentInfo controller:", error); // Add error logging
        return res.status(500).send(error.message)
    }
}