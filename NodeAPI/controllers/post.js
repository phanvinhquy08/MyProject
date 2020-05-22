const { validationResult } = require("express-validator");
const Post = require("../models/post");


module.exports.getPost = (req, res) => {
    const post = Post.find()
        .select("_id title body ")
        .then(posts => {
            res.status(200).json({ posts })
        })
        .catch(err => console.log(err))

}
module.exports.createPost = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const post = new Post(req.body)
    console.log("CREATE NEW POST", req.body);
    post.save()
        .then(result => {
            res.status(200).json({ post: result })
        })
        .catch(err => console.log(err))
}