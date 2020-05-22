const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String,
    position: String
});

    

module.exports = mongoose.model("users", userSchema)