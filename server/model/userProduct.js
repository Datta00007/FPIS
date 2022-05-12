const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  pid:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  username : {
      type: String,
      required: true,
  },
  
  company: {
      type:String,
      required : true,
  },

  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required:true,
    
  },

  address: {
    type: String,
    required:true,
  },
  mfg: {
    type: String,
    required:true,
  },
  expiry: {
    type: String,
    required:true,
  }
});


const Product = mongoose.model("product", userSchema);

module.exports = Product;
