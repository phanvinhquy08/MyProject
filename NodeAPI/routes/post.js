const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const validation = require("../validation/post")
const requireJwt = require("../controllers/auth")

router.get("/", requireJwt.requireSignin, postController.getPost)
router.post("/post", validation.createPostValidation, postController.createPost)

module.exports = router;