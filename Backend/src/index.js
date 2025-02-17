const dotenv=require('dotenv');
dotenv.config()
const express=require('express')
const cors=require('cors')
const connectDB=require("./config/mongoose")
const path=require("path")
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
      origin:"https://e-commerce-website-seven-mauve.vercel.app/",
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      
      credentials: true, // Allows cookies, Authorization headers, etc.
     
      allowedHeaders: ["Content-Type", "Authorization"],
      optionsSuccessStatus: 200
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


app.use(express.static(path.join(__dirname,'../public')));
app.get("*", (req, res) => {
  console.log(`Request received for: ${req.url}`);
  const filePath = path.join(__dirname, "../public","dist", "index.html");
  console.log(`Serving file: ${filePath}`);
  res.sendFile(filePath, (err) => {
      if (err) {
          console.error("Error serving frontend:", err);
          res.status(500).send("Internal Server Error");
      }
  });
});



module.exports = app