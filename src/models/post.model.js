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
    url: {
        type: String,
    },
    thumbnailUrl: {
        type: String,
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: Date

})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;