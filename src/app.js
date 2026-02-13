const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route');

app.use(express.json())
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Hello from backend")
});
app.use("/api/auth",authRouter);

module.exports = app;