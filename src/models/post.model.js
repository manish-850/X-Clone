const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Post creation is not allowed without user."]
    },
    postImg: {
        type: String,
        required: [true, "Image is required for post creation."]
    },
    createdAt: Date

})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;