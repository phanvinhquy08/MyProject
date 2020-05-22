const { validationResult } = require('express-validator');
const Book = require("../models/books.model")

module.exports.index = async (req, res) => {
    const books = await Book.find()
    res.render("books/index", { books })
}

module.exports.getAdd = (req, res) => {
    res.render("books/add")
}

module.exports.postAdd = (req, res) => {
    const objErrors = validationResult(req);
    console.log(objErrors.errors)
    if(objErrors.isEmpty()) {
        const book = new Book(req.body)
        book.save();
        res.redirect("/books")
    }
    else {
        res.render("books/add", {errors : objErrors.errors})
    }
}

module.exports.getEdit = (req, res) => {
    const { id } = req.params;
    Book.findById(id).then(book => {
        res.render("books/edit", { book })
    })
}

module.exports.postEdit = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body
    Book.findByIdAndUpdate(id, { title, description }, () => {
        res.redirect("/books");
    })
}

module.exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Book.findByIdAndDelete(id, () => {
        res.redirect("/books")
    })
}