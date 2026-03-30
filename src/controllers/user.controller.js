const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');


const follow = async (req, res) => {
    const user = await userModel.findOne({ _id: req.params.id });
    if (!user) res.status(404).json({
        message: "User not found"
    })

    const follow = await followModel.create({
        follower: user._id,
        followee: req.user.userId,
    })

    return res.status(200).json({
        messge: "User has been followed",
        follow
    })
}

module.exports = {
    follow
}