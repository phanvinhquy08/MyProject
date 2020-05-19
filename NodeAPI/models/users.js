const mongoose = require("mongoose");
const uuidv1 = require('uuidv1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    hashed_password: {
        type: String
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now()
    },
    update: Date
});

userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password 
    },
    encryptPassword: function (password) {
        if (!password) return "";
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (error) {
            return ""
        }
    }
}
module.exports = mongoose.model("Users", userSchema);