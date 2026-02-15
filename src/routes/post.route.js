const express = require('express');
const postRouter = express.Router()
const postConroller = require("../controllers/post.controller");
const isLoggedIn = require("../middleware/isLoggedIn")
const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

postRouter.post("/",isLoggedIn ,upload.single("postImg"),postConroller.createController)

module.exports = postRouter;