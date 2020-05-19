const Post = require("../models/post");
const validationHandler = require("../validation/validationHandler")
module.exports.index = (req, res) => {
    res.send({ message: "hi" })
}
module.exports.store = async (req, res, err) => {
    try {
        validationHandler(req);
        let post = new Post();
        post.description = req.body.description;
        post.image = req.file.filename;
        post = await post.save();
    } catch (error) {
        next(err)
    }
}