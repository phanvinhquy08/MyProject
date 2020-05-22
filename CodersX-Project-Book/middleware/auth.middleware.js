const jwt = require('jsonwebtoken');
const User = require("../models/users.model")
const Transaction = require("../models/transactions.model")

module.exports.requireAuth = (req, res, next) => {
    if (!req.cookies.token) {
        res.redirect("/auth/login")
        return;
    }
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    User.findById(decoded._id)
        .then(user => {
            res.locals.user = user;
            next();
        })

}
module.exports.requireAdmin = (req, res, next) => {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    User.findById(decoded._id)
        .then(user => {
            res.locals.user = user;
            if (user.position !== "admin") res.redirect("/")
            next();
        })
}
module.exports.filterUser = async (req, res, next) => {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id)
    Transaction.find({ user: user.name })
        .then(transactions => {
            if (user.position === "admin") next();
            else {
                next();
                res.render("transaction/index", { transactions })
            }
        })
}