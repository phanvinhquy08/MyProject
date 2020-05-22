const { check } = require('express-validator');

module.exports.createPostValidation = [
    check("title", "title not be empty").notEmpty(),
    check("title", "title must be between 4 to 150 char").isLength({ min: 4, max: 150 }),
    check("body", "body not be empty").notEmpty(),
    check("body", "body must be between 4 to 150 char").isLength({ min: 4, max: 150 })
]; 
