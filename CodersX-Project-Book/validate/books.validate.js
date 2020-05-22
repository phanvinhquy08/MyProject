const { body } = require('express-validator');
module.exports.postAdd = [
    body("title").not().isEmpty().withMessage("title not be empty"),
    body("description").not().isEmpty().withMessage("description not be empty")
]