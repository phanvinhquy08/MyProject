const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const validation = require("../validation/post")
const requireJwt = require("../controllers/auth")

router.get("/", postController.getPost)
router.post("/post", requireJwt.requireSignin, validation.createPostValidation, postController.createPost)

module.exports = router;