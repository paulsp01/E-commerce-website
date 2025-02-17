const dotenv = require("dotenv");
dotenv.config()


const app=require("./index");


app.listen(process.env.PORT, function() {
    console.log(`port is runnibg on ${process.env.PORT}`);
})