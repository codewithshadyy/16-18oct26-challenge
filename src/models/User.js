
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

   

    roles:{
        type:[String],
        enum:{
            values:["user", "staff", "admin"]
        },
        default:["user"]
    },

     password:{
        type:String,
        required:true
    }
}, {timestamps:true})

const User = mongoose.model("Userr",  userSchema)

module.exports = User