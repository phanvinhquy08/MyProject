const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    photo: {
        type: Buffer,
        contentype: String 
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Post", postSchema)