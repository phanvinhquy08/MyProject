const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const authValidate = require("../validation/auth")
const userController = require("../controllers/users")

// router.get("/", postController.getPost)
router.post("/signup", authValidate.signUpValidation, authController.signup)
router.post("/signin",authValidate.signInValidation,  authController.signin)
router.get("/signout",  authController.signout)


module.exports = router;