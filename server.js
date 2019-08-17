const bodyParser = require("body-parser")
const cors = require('cors')
const express = require("express")
const expbs = require("express-handlebars")
const fs = require("fs")
const http = require('http')
const util = require("util")
const app = express()


app.engine("handlebars", expbs({"defaultLayout": "main"}))
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static("assets")) // use this one to locate the path of static files

app.get('/', (req, res) =>{
    res.render("main")
    // res.send("123")
})





app.listen(3000, ()=>{
  console.log("listening on port 13000")
})


// req.params.userid; 用來取得 /user/:userid 中的 parameter
