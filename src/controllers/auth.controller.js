const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerController = async (req, res) => {
    const { username, email, password, bio, profileImg } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [{ username }, { email }]
    });
    if (isUserExists) return res.status(409).json({
        message: isUserExists.email == email ? "Email is already registered." : "Username is already taken.",
    })

    bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (!err) {
                    const user = await userModel.create({
                        username, email, password: hash, bio, profileImg
                    })
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
                    res.cookie("token", token);
                    res.status(201).json({
                        message: "User registered successfully",
                        user: {
                            username: user.username,
                            email: user.email,
                            bio: user.bio,
                            profileImg: user.profileImg
                        }
                    })

                }
                else return res.status(400).json({
                    message: "User is not created"
                })
            });
        }
        else return res.status(400).json({
            message: "User is not created"
        })
    });
}

const loginController = async (req, res) => {
    const { userCredential, password } = req.body;

    const user = await userModel.findOne({
        $or: [{ username: userCredential }, { email: userCredential }]
    })

    if (!user) return res.status(404).json({
        message: "User doesn't exists"
    })

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(400).json({
            message: "Something went wrong.",
            error: err
        })
        if (result) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
            res.cookie("token", token);
            return res.status(200).json({
                message: "User loggedIn successfully",
                user: {
                    username: user.username,
                    email: user.email,
                    bio: user.bio,
                    profileImg: user.profileImg
                }
            })
        }
        else return res.status(400).json({
            message: "Password is wrong."
        })
    });

}

module.exports = {
    registerController,
    loginController
}