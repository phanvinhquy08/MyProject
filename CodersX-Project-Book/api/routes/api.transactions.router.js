const express = require("express");
const router = express.Router();
const apiTransactionController = require("../controller/api.transaction.controller")

router.get("/transactions", apiTransactionController.getAll);

module.exports = router