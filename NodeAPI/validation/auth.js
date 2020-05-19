const { check } = require('express-validator');

module.exports.signUpValidation = [
    check("name", "name not be empty").notEmpty(),
    check("email", "email not be empty").notEmpty(),
    check("email", "unvalid email").isEmail(),
    check("password", "password not be empty").notEmpty()
]; 
module.exports.signInValidation = [
    check("email", "email not be empty").notEmpty(),
    check("email", "unvalid email").isEmail(),
    check("password", "password not be empty").notEmpty()
]; 
