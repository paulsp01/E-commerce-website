const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()


function connectDB() {
   

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
       
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
}

module.exports = connectDB;