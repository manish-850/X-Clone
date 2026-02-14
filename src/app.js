const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/post.route');

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello from backend")
});
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);

module.exports = app;