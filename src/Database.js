const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.URL;

mongoose.connect(URL)
.then(()=>{
    console.log("Database Connected!")
})
.catch(()=>{
    console.log("Connection Failed!")
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema) 
module.exports = collection;