const express = require("express");
const router = express.Router();
const apiControllerBook = require("../controller/api.books.controller")

router.get("/books", apiControllerBook.getAll);
router.post("/books", apiControllerBook.postAdd)
router.get("/books/:id", apiControllerBook.getById);
router.put("/books/:id", apiControllerBook.postEdit);
router.delete("/books/:id", apiControllerBook.delete);

router.param("id", apiControllerBook.bookById);

module.exports = router