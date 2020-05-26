const User = require("../../models/users.model");
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.postLogin = async (req, res) => {
    const objErrors = validationResult(req);
    if (objErrors.isEmpty()) {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            bcrypt.compare(password, userExist.password, function (err, result) {
                if (result) {
                    console.log(result)
                    const token = jwt.sign({ _id: userExist.id }, process.env.JWT_SECRET);
                    res.cookie("token", token);
                    res.status(200).json({

                        message: "Bạn đăng nhập thành công"
                    })
                }
                else {
                    res.status(400).json({
                        message: "mật khẩu không chính xác"
                    })
                }
            });
        }
        else {
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
    }
    else {
        res.json({ errors: objErrors.errors })
    }
}