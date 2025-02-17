const dotenv = require("dotenv");
dotenv.config()


const app=require("./index");


app.listen(process.env.PORT||8003, function() {
    console.log(`port is runnibg on ${process.env.PORT}`);
})