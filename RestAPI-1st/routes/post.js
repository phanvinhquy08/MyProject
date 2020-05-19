const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller")
const { hasDescription } = require("../validation/validator");
const uploadImg = require("../middleware/multer");

router.get("/", postController.index);
router.post("/",
    uploadImg("posts").single("image"),
    hasDescription,
    postController.store
)

module.exports = router;