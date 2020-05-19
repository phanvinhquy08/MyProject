const { body } = require("express-validator/check");

exports.hasDescription = body("description")
    .isLength({ min: 5})
    .withMessage("description is required, min length 5 char ")
