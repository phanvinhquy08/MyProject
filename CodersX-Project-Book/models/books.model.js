const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title : {
        type: String
    },
    description : {
        type: String
    }
})


module.exports = mongoose.model("books", bookSchema)