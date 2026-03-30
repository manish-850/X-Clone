const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');


const follow = async (req, res) => {
    const user = await userModel.findOne({ _id: req.params.id });
    if (!user) res.status(404).json({
        message: "User not found"
    })

    if (String(req.user.userId) === String(user._id)) return res.status(409).json({
        message:"User can't follow itself"
    })

    const isfollowed = await followModel.findOne({
        follower:req.user.userId,
        followee:user._id
    });
    
    if(isfollowed) return res.status(400).json({
        message:"User has been already followed.",
        follow:isfollowed
    })

    const follow = await followModel.create({
        follower: req.user.userId,
        followee: user._id,
    })

    return res.status(200).json({
        messge: "User has been followed",
        follow
    })
}

const unfollow = async (req,res) =>{
    const isFollowing = await followModel.findOne({
        follower:req.user.userId,
        followee:req.params.id,
    });
    if(!isFollowing) return res.status(400).json({
        message:"User has not been followed."
    })
    const unfollow = await followModel.findOneAndDelete({
        follower: req.user.userId,
        followee: req.params.id,
    });
    return res.status(200).json({
        message:"User has been unfollowed.",
        unfollow
    })
}

module.exports = {
    follow,
    unfollow
}