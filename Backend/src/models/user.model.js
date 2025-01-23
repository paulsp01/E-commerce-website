const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    min: [3, "firstname must be atleast 3 charecters"],
  },
  lastname: {
    type: String,
    require: true,
    min: [2, "firstname must be atleast 3 charecters"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    min: [5, "Email must be atleast 5 characters"],
    max: 255,
  },
  password: {
    type: String,
    required: true,
   
  },
  role: {
    type: String,
    required: true,
    default: "CUSTOMER",
  },
  mobile: {
    type: Number,
    
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
  ],
  payment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payment",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
