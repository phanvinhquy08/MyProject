const { validationResult } = require("express-validator");
const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");

module.exports.getPost = (req, res) => {
    const post = Post.find()
        .populate("postedBy","_id name")
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
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be upload"
            })
        }
        let post = new Post(fields);
        post.postedBy = req.profile;
        if (files.photo) {
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contentype = files.photo.type
        }
        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.json({ result })
        })
    })
}