const Transaction = require("../models/transactions.model");
const User = require("../models/users.model");
const Book = require("../models/books.model")

module.exports.index = (req, res) => {
    Transaction.find()
        .then(transactions => {
            transactions = transactions.map((x, index) => {
                if (x.isComplete) return { id: x._id, stt: index + 1, book: x.book, user: x.user, isComplete: "Done" }
                else return { id: x._id, stt: index + 1, book: x.book, user: x.user, isComplete: "Pending" }
            })
            res.render("transaction/index", { transactions })
        })

}
module.exports.complete = (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => {
            res.render("transaction/complete", { transaction })
        })
}
module.exports.postComplete = (req, res) => {
    const isComplete = req.body.hasOwnProperty("status") ? true : false;
    Transaction.findByIdAndUpdate(req.params.id, { isComplete: isComplete, book: "aaff", user: "asdfsf" })
        .then(res.redirect("/transactions"))
}
module.exports.getAdd = async (req, res) => {
    const books = await Book.find();
    const users = await User.find();
    res.render("transaction/add", { books, users })
}
module.exports.postAdd = (req, res) => {
    const { user, book } = req.body;
    const transaction = new Transaction({ user, book, isComplete: false });
    transaction.save().then(res.redirect("/transactions"))
}