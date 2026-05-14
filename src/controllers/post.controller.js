const postModel = require("../models/post.model");
const userModel = require("../models/user.model");
const likeModel = require("../models/like.model");
const saveImgToImageKit = require("../services/imageKit");

const createController = async (req, res) => {
  try {
    const { caption } = req.body;
    let response = {};
    if (req.file) response = await saveImgToImageKit(req.file);
    const post = await postModel.create({
      caption,
      user: req.user.userId,
      url: req.file ? response.url : null,
      thumbnailUrl: req.file ? response.thumbnailUrl : null,
    });
    const user = await userModel.findOne({ _id: req.user.userId });
    user.posts.push(post._id);
    await user.save();

    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.log("BACKEND ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getController = async (req, res) => {
  const userId = req.user.userId;
  const posts = await postModel.find({ user: userId });
  return res.status(200).json({
    posts,
  });
};
const getDetailsController = async (req, res) => {
  const userId = req.user.userId;
  const post = await postModel.findById(req.params.postId);
  if (!post)
    return res.status(404).json({
      message: "Post not found",
    });
  if (String(userId) !== String(post.user))
    return res.status(403).json({
      message: "User is not authorised",
    });
  return res.status(200).json({
    message: "Post details fetched successfully",
    post,
  });
};

const likeController = async (req, res) => {
  const post = await postModel.findOne({ _id: req.params.postId });
  const isLiked = await likeModel.findOne({
    post: req.params.postId,
    user: req.user.userId,
  });

  if (!post)
    return res.status(404).json({
      message: "Post not found",
    });

  if (isLiked)
    return res.status(409).json({
      message: "Post has been already liked.",
    });
  const like = await likeModel.create({
    post: req.params.postId,
    user: req.user.userId,
  });
  return res.status(200).json({
    message: "Post has been liked.",
    like,
  });
};
const dislikeController = async (req, res) => {
  const post = await postModel.findOne({ _id: req.params.postId });
  const isLiked = await likeModel.findOne({
    post: req.params.postId,
    user: req.user.userId,
  });

  if (!post)
    return res.status(404).json({
      message: "Post not found",
    });

  if (!isLiked)
    return res.status(409).json({
      message: "Post has not liked.",
    });
  const dislike = await likeModel.findOneAndDelete({
    post: req.params.postId,
    user: req.user.userId,
  });
  return res.status(200).json({
    message: "Post has been disliked.",
    dislike,
  });
};
const feedController = async (req, res) => {
  try {
    const posts = await postModel.find().populate("user");
    return res.status(200).json({
      message: "Feed fetched successfully",
      posts,
    });
  } catch (err) {
    console.log(error);
  }
};
module.exports = {
  createController,
  getController,
  getDetailsController,
  likeController,
  dislikeController,
  feedController,
};
