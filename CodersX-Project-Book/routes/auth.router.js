const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller")
const authValidate = require("../validate/auth.validate")

router.get("/login", authController.index);
router.post("/login",authValidate.postLogin, authController.postLogin)

module.exports = router;