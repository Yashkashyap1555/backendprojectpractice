const mongoose = require("mongoose");

//asign 
const yashSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    contactnumber : {
        type : Number,
    },

})
const user = mongoose.model("userModel", yashSchema)

module.exports = user;