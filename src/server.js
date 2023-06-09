const express = require("express")
const collection = require("./Database")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/Homepage", cors(),(req,res)=>{

})

app.post("/Homepage", async(req,res)=>{
    const{email, password} = req.body
    try{
        const check=await collection.findOne({email: email})
        if(check){
            res.json("Exists!")
        }
        else{
            res.json("Not Exists!")
        }
    }
    catch(e){
        res.json("Not Exists!")
    }
})

app.post("/SignupForm", async(req,res)=>{
    const{email, password} = req.body
    const data={
        email: email,
        password: password
    }
    try{
        const check=await collection.findOne({email: email})
        if(check){
            res.json("Already Exists!")
        }
        else{
            res.json("Not Exists!")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Not Exists!")
    }
})

app.listen(3000,()=>{
    console.log("Port Connected!")
})