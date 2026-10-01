// const http = require("http")

// const server= http.createServer((req , res)=>{
//     res.statusCode='200';
//     res.setHeader=("Context-Type","Text/Plain");
//     res.end("this is response form backend")
// })

const express= require('express')
const app=express()

const server = app.get((req , res)=>{

})

server.listen(5000,()=>{
    console.log("server is running on port 5000")
})