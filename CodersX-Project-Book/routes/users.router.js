const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const userValidate = require("../validate/users.validate");
const authRequire = require("../middleware/auth.middleware")

router.get("/", authRequire.requireAuth, authRequire.requireAdmin, userController.index);
router.get("/add", userController.getAdd)
router.post("/add",userValidate.postAdd, userController.postAdd)
router.get("/edit/:userId", userController.getEdit);
router.post("/edit/:userId", userController.postEdit);
router.get("/delete/:userId", userController.delete)


module.exports = router;