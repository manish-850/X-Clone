const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Email is required"]
    },
    bio: String,
    profileImg: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/035/857/753/small/people-face-avatar-icon-cartoon-character-png.png"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        defalut: []
    }],
    saves: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
            defalut: []
        }]
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;