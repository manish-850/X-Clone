// import fs from 'fs';
const ImageKit = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken')
const postModel = require("../models/post.model");

require('dotenv').config()


const createController = async (req, res) => {
    const token = req.cookies.token;
    let userId = null;
    if (!token) return res.status(409).json({
        message: "User is not authorised"
    })
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(409).json({
            message: "User is not authorised"
        })
        userId = decoded.userId;
    });



    const { caption } = req.body;

    const client = new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });

    const base64File = req.file.buffer.toString("base64");

    const response = await client.files.upload({
        file: base64File,
        fileName: req.file.originalname,
        folder: "/posts"
    });

    const post = await postModel.create({
        caption, 
        user: userId, 
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