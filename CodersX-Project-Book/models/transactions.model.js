const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const transactionSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "user"
    },
    book: {
        type: ObjectId,
        ref: "book"
    },
    isComplete: Boolean
})

module.exports = mongoose.model("transactions", transactionSchema)