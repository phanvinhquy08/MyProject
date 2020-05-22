const { body } = require('express-validator');
module.exports.postAdd = [
    body("name").not().isEmpty().withMessage("name not be empty"),
    body("email").not().isEmpty().withMessage("email not be empty"),
    body("email").isEmail().withMessage("invalid email"),
    body("password").not().isEmpty().withMessage("password not be empty")
]