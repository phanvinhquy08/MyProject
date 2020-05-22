const express = require("express");
const router = express.Router();
const transactionRouter = require("../controllers/transactions.controller")
const authRequire = require("../middleware/auth.middleware")

router.get("/",authRequire.requireAuth, authRequire.filterUser, transactionRouter.index);
router.get("/:id/complete", transactionRouter.complete);
router.get("/add", transactionRouter.getAdd);
router.post("/:id/complete", transactionRouter.postComplete);
router.post("/add", transactionRouter.postAdd)

module.exports = router;