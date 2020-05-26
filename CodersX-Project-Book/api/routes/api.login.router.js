const express = require("express");
const router = express.Router();
const apiLoginController = require("../controller/api.login.controller");
const loginValidate = require("../../validate/auth.validate");

router.post("/login",loginValidate.postLogin ,apiLoginController.postLogin);

module.exports = router