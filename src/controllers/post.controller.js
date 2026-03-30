const postModel = require("../models/post.model");
const userModel = require("../models/user.model");
const saveImgToImageKit = require("../services/imageKit")

const createController = async (req, res) => {
    const { caption } = req.body;
    const response = await saveImgToImageKit(req.file);
    const post = await postModel.create({
        caption,
        user: req.user.userId,
        postImg: response.url
    })
    const user = await userModel.findOne({_id:req.user.userId});
    user.posts.push(post._id)
    await user.save()

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
}

const getController = async (req, res) => {
    const userId = req.user.userId;
    const posts = await postModel.find({ user: userId });
    return res.status(200).json({
        posts
    })
}
const getDetailsController = async (req, res) => {
    const userId = req.user.userId;
    const post = await postModel.findById(req.params.postId);
    if(!post) return res.status(404).json({
        message:"Post not found"
    })
    if (String(userId) !== String(post.user)) return res.status(403).json({
        message:"User is not authorised"
    })
    return res.status(200).json({
        message:"Post details fetched successfully",
        post
    })
}

module.exports = {
    createController,
    getController,
    getDetailsController
}