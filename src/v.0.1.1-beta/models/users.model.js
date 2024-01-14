const mongoose = require('mongoose');

const UserSchema = mongoose.Schema;

const User = new UserSchema(
    {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        confirmedMail: {
            type: Boolean,
            default: false,
        }
    }
);

module.exports = mongoose.model('User', User);