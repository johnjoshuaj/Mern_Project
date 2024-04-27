const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    image:String
})

const useModel = mongoose.model("userss",userSchema)

module.exports = useModel