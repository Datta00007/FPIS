const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },
    username:
    {
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,
     
    }
    // date:{
    //     type:Date,
    //     default:Date.now
    // }

//collection

})

const Message = new mongoose.model("contact",userSchema);
module.exports = Message;