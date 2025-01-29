const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
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

  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },

  zip: {
    type: Number,
    required: true,
  },
  phone:{
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const addressModel = mongoose.model("address", addressSchema);
module.exports = addressModel;
