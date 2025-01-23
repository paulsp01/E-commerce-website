require('dotenv').config()
const express=require('express')
const cors=require('cors')
const connectDB=require("./config/mongoose")
const app = express()
const authRouter=require("./routes/auth.route")
const userRouter=require("./routes/user.route")


connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
app.get("/", (req, res)=>{
    res.send("hello world")
})

app.use('/auth',authRouter)
app.use('/user',userRouter)


module.exports = app