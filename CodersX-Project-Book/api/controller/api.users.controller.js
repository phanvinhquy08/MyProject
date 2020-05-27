const User = require("../../models/users.model");

module.exports.getAllUser = async (req, res) => {
    const users = await User.find().select("_id name email position");
    res.json(users)
}
module.exports.getOneUser = (req, res) => {
    const user = req.profile;
    res.json(user)
}
module.exports.userById = (req, res, next, id) => {
    User.findById(id)
        .then(user => {
            req.profile = user;
            next();
        }) 
        .catch(err => {
            res.json({error : err})
        })
}
module.exports.postAdd = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(user => res.json(user))
        .catch(err => res.json({error: err}))
}