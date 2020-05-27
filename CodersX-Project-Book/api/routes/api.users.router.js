const express = require("express");
const router = express.Router();

const apiUserController = require("../controller/api.users.controller")

router.get("/users", apiUserController.getAllUser)
router.get("/users/:id", apiUserController.getOneUser)
router.post("/users", apiUserController.postAdd)

router.param(":id", apiUserController.userById)
module.exports = router;
