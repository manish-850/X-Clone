const mongoose = require('mongoose');

require('dotenv').config()

async function connectToDb (){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
}
module.exports=connectToDb;