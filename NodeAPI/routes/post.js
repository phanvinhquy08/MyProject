const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const validation = require("../validation/post");
const requireJwt = require("../controllers/auth");
const userController = require("../controllers/users")

router.get("/", postController.getPost)
router.post("/post/new/:userId", requireJwt.requireSignin, validation.createPostValidation, postController.createPost)

router.param("userId", userController.userById);
module.exports = router;