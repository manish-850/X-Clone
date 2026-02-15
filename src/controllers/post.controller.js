const postModel = require("../models/post.model");
const saveImgToImageKit = require("../services/imageKit")

const createController = async (req, res) => {
    const { caption } = req.body;
    const response = await saveImgToImageKit(req.file);
    const post = await postModel.create({
        caption,
        user: req.user.userId,
        postImg: response.url
    })
    
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
}

module.exports = {
    createController
}