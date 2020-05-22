const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator');

const User = require("../models/users.model")
module.exports.index = (req, res) => {
    User.find().then(users => {
        res.render("users/index", { users });
    })
}
module.exports.getAdd = (req, res) => {
    res.render("users/add")
}
module.exports.postAdd = (req, res) => {
    const objErrors = validationResult(req);
    if(objErrors.isEmpty()) {
        const { name, email, password } = req.body;
        bcrypt.hash(password, 10, function (err, hash) {
            const user = new User({ name, email, password: hash, position: "member" });
            user.save().then(() => {
                res.redirect("/users")
            });
        });
    }
    else {
        res.render("users/add", {errors: objErrors.errors})
    }
}
module.exports.getEdit = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            res.render("users/edit", { user })
        })
}
module.exports.postEdit = (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    bcrypt.hash(password, 10, function (err, hash) {
        User.findByIdAndUpdate(req.params.userId, { name, email, password: hash })
            .then(() => res.redirect("/users"))
    });
}
module.exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.userId).then(() => res.redirect("/users"))
}