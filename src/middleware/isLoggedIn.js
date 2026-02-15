const jwt = require('jsonwebtoken')

const isLoggedIn = (req,res,next)=>{
    const token = req.cookies.token;
    if (!token) return res.status(409).json({
        message: "User is not authorised"
    })
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(409).json({
            message: "User is not authorised"
        })
        req.user = decoded;
        next()
    });
}

module.exports=isLoggedIn;