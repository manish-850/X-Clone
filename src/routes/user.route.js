const express = require('express');
const userRouter = express.Router();
const userController = require("../controllers/user.controller")
const isLoggedIn = require('../middleware/isLoggedIn');


userRouter.post("/follow/:id",isLoggedIn,userController.follow);
userRouter.post("/unfollow/:id",isLoggedIn,userController.unfollow);

module.exports = userRouter