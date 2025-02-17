const app=require("./index");
const dotenv = require("dotenv");
dotenv.config({path: './Backend/.env'})


app.listen(process.env.PORT, function() {
    console.log(`port is runnibg on ${process.env.PORT}`);
})