const express = require('express');
const userRouter = express.Router();
const userController = require("../controllers/user.controller")
const isLoggedIn = require('../middleware/isLoggedIn');


userRouter.post("/follow/:id",isLoggedIn,userController.follow);
userRouter.post("/unfollow/:id",isLoggedIn,userController.unfollow);
userRouter.get("/me",isLoggedIn,userController.getMe);
userRouter.get("/following",isLoggedIn,userController.getFollowing);
userRouter.get("/followers",isLoggedIn,userController.getFollowers);

module.exports = userRouter