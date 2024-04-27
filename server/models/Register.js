// eslint-disable-next-line no-undef
const mongoose = require("mongoose")


const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    reasonofmeeting:{
        type:String,
        required:true
    }
   
})


const RegisterModel = mongoose.model("userdetails",RegisterSchema)

// eslint-disable-next-line no-undef
module.exports = RegisterModel