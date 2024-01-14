import mongoose from "mongoose";

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

export default mongoose.model('User', User);