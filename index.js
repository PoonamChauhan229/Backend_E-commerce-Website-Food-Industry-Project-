var express=require('express')
var ejs=require('ejs')
var bodyParser=require('body-parser')



var app=express()

// We are going to say use the public folder to render the HTML pages
app.use(express.static('public'))
app.set('view engine','ejs')

// create an server

// http://localhost:8080/
app.get('/',(req,res)=>{
    // res.send("Welcome to the server")
    res.render('pages/index')

})
app.listen(8080,()=>{
    console.log("Sever started at port 8080")
})

app.use(bodyParser.urlencoded({extended:true}))
