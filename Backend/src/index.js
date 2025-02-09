require('dotenv').config()
const express=require('express')
const cors=require('cors')
const connectDB=require("./config/mongoose")
const app = express()
const authRouter=require("./routes/auth.route")
const userRouter=require("./routes/user.route")
const adminRouter=require("./routes/admin.route")
const adminProductRouter=require("./routes/adminProduct.route")
const cartRouter=require("./routes/cart.route")
const cartItemRouter=require("./routes/cartItem.route")
const orderRouter=require("./routes/order.route")
const productRouter=require("./routes/product.route")
const ratingRouter=require("./routes/rating.route")
const reviewRouter=require("./routes/review.route")
const paymentRouter=require("./routes/payment.route")









connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(
  cors({
      origin:[
         "http://localhost:5173",
         "https://e-commerce-website-9bpm-nzrn7bmn6-swarnalee-pauls-projects.vercel.app"

      ],
     
      
      credentials: true, // Allows cookies, Authorization headers, etc.
     
      allowedHeaders: "Content-Type,Authorization",
  })
);

app.get("/", (req, res) => {
    res.send("hello world");
});


app.use('/auth',authRouter)
app.use('/user',userRouter)
app.use("/admin/order",adminRouter)
app.use("/admin/product",adminProductRouter)
app.use("/cart",cartRouter)
app.use("/cart-item",cartItemRouter)
app.use("/order",orderRouter)
app.use("/product",productRouter)
app.use("/rating",ratingRouter)
app.use("/review",reviewRouter)
app.use("/payment",paymentRouter)


module.exports = app