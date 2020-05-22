const User = require("../models/users.model");
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.index = (req, res) => {
    res.clearCookie("token");
    res.render("auth/index")
}
module.exports.postLogin = async (req, res) => {
    const objErrors = validationResult(req);
    if (objErrors.isEmpty()) {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            bcrypt.compare(password, userExist.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({_id: userExist.id}, process.env.JWT_SECRET);
                    res.cookie("token", token);
                    res.redirect("/")
                }
                else {
                    objErrors.errors.push({ msg: "Email and password not match" })
                    res.render("auth/index", { errors: objErrors.errors })
                }
            });
        }
        else {
            objErrors.errors.push({ msg: "Email not exist" })
            res.render("auth/index", { errors: objErrors.errors })
        }
    }
    else {
        res.render("auth/index", { errors: objErrors.errors })
    }
}