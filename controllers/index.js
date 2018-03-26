var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');
const app = express.Router()
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/',(req,res) =>{
    console.log("Get Data");
            res.render('./home.ejs');
});
app.post('/',(req,res) =>{
    var username;
    username = req.body.username
    console.log(req.body.username)
    res.render('loginSuccess.ejs',{
        username:req.body.username
});
console.log(JSON.stringify(req.body));
console.log("Post Data "+ username );
});
module.exports = app