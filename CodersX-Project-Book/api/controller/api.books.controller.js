const Book = require("../../models/books.model")
module.exports.getAll = (req, res) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(err => res.status(400).json(err))
}
module.exports.getById = (req, res) => {
    res.json(req.profile)
}
module.exports.bookById = (req, res, next, id) => {
    Book.findById(id).exec((err, book) => {
        if (err || !book) {
            res.json({
                error: "Book not found"
            })
        }
        req.profile = book;
        next();
    })
}
module.exports.postAdd = (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json(book)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.postEdit = (req, res) => {
    const book = req.profile;
    book.description = req.body.description;
    book.title = req.body.title;
    book.save()
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            res.json(err)
        })
}
module.exports.delete = (req, res) => {
    const book = req.profile;
    book.remove((err, book) => {
        if(err) {
            return res.status(400).json({
                error : err
            })
        }
        res.json(book)
    })
}