const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 4322
app.use(express.json())
const connect = require("./configs/db")





const blogController=require("./controllers/blogs.controller")
app.use("/blogs",blogController)
app.listen(port,async function (req,res){
    try{
        connect();
        console.log ("Listening Port 4322 ")
    }catch(err){
        console.log(err.message)
    }
})