const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.URL;



const connectDB = async(URL) =>{
    return await mongoose.connect(URL);
}

module.exports = connectDB;

