require("dotenv").config();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");
const User = require("../models/users");


module.exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) {
        res.status(403).json({ error: "Email is taken" })
        return;
    }
    const user = await new User(req.body);
    await user.save()
    res.status(200).json({ user });

}
module.exports.signin = (req, res) => {
    // find the user base on email
    const { email, password } = req.body;
    // if error or no user
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: "user with that email does not exist. Please signup"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password not match"
            })
        }
        // if user authenticate
        // generate a token user id and secret
        const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
        // persit the token as "t" in cookie with expiry date
        res.cookie("t", token, { expire: new Date() + 9999 })
        // return response with user and token to front end client
        const { _id, name, email } = user;
        return res.json({ token, user: { _id, name, email } })
    });
}
module.exports.signout = (req, res) => {
    res.clearCookie("t");
    return res.json({ message: "Signout success" })
}
module.exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET
})