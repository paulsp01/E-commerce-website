const Razorpay = require('razorpay');
const dotenv = require("dotenv");
dotenv.config({path: '../Backend/.env'})


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY_ID,
  key_secret: process.env.RAZORPAY_API_KEY_SECRET,
});

module.exports = razorpay; // Correct export