const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const authController = require('../controllers/auth');

router.get("/users",  userController.allUsers);
router.get("/users/:userId", authController.requireSignin, userController.getUser);

router.param("userId", userController.userById);

module.exports = router;