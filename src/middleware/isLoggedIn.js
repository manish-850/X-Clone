const jwt = require('jsonwebtoken')

const isLoggedIn = (req,res,next)=>{
    const token = req.cookies.token;
    if (!token) return res.status(409).json({
        message: "User is not authorised",
        error:"There is no token"
    })
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(409).json({
            message: "User is not authorised",
            error:"Error occured in jwt verification"
        })
        req.user = decoded;
        next()
    });
}

module.exports = isLoggedIn;