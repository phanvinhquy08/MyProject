const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    book: String,
    user: String,
    isComplete: Boolean
})

module.exports = mongoose.model("transactions", transactionSchema)