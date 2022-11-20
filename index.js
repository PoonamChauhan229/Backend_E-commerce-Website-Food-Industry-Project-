var express=require('express')
var ejs=require('ejs')



var app=express()

// create an server

// http://localhost:8080/
app.get('/',(req,res)=>{
    res.send("Welcome to the server")
})
app.listen(8080,()=>{
    console.log("Sever started at port 8080")
})

