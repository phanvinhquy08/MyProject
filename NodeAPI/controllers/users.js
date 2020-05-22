const User = require('../models/users');
module.exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    })
}
module.exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if (!authorized) {
        res.status(403).json({
            error: "User is not authorized to perform this action"
        })
    }
}
module.exports.allUsers = (req, res) => {
    User.find()
        .select("name email created")
        .then(result => {
            res.status(200).json({ users: result })
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
}
module.exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
}