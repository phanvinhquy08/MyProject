const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books.controller");
const bookValidate = require("../validate/books.validate");
const authRequire = require("../middleware/auth.middleware")

router.get("/",authRequire.requireAuth, booksController.index);
router.get("/add", booksController.getAdd);
router.post("/add", bookValidate.postAdd, booksController.postAdd);
router.get("/edit/:id", booksController.getEdit);
router.post("/edit/:id", booksController.postEdit);
router.get("/delete/:id" ,booksController.delete);

module.exports = router;