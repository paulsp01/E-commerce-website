const razorpay = require("../config/razorpayClient"); // Correct import
const orderService = require("./orderService");

module.exports.createPaymentLink = async (orderId) => {
  try {
    const order = await orderService.findOrderById(orderId);
    
    const paymentLinReq = {
      amount: order.totalPrice * 100,
      currency: "INR",
      customer: {
        name: order.user.firstname + " " + order.user.lastname,
        contact:String( order.shippingAddress.phone),
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:5173/payment/${orderId}`,
      callback_method: "get",
    };
   
    const paymentLink = await razorpay.paymentLink.create(paymentLinReq); // Correct usage
    const paymentLinkId = paymentLink.id;
    const payment_link_url = paymentLink.short_url;
   
    const resData = {
      paymentLinkId,
      payment_link_url,
    };
   
    return resData;
  } catch (error) {
    console.error("Error creating payment link:", error); // Add error logging
    throw new Error(`Payment link creation failed: ${error.message}`);
  }
};

module.exports.updatePaymentInfo = async (reqData) => {
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;
 

  try {
    const order = await orderService.findOrderById(orderId);
    const payment = await razorpay.payments.fetch(paymentId); // Correct usage
  
    if (payment.status == "captured") {
      order.paymentDetails.paymentId = paymentId;
      order.paymentDetails.paymentStatus = "COMPLETED";
      order.orderStatus = "PLACED";

      await order.save(); // Correct typo
    }
   
    const resData = { message: "Your Order Is Placed", success: true, paymentLink: order.paymentDetails.paymentLink };
    return resData;
  } catch (error) {
    console.error("Error updating payment info:", error); // Add error logging
    throw new Error(error.message);
  }
};
