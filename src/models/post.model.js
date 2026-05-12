const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Post creation is not allowed without user."]
    },
    postImg: {
        type: String,
    },
    likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            defalut:[]
        }],
    createdAt: Date

})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;