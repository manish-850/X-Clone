const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },    
},
{
    timestamps: true // Enable timestamps option
})

const followModel = mongoose.model("follow", followSchema);
module.exports = followModel;