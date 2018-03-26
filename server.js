
var express = require('express')
var http = require('http')
var path = require('path')
let https = require('https');

const app = express()
app.set('views', path.join(__dirname, '/views'))

const routes = require('./controllers')
app.use('/', routes) 

app.listen(8081,() =>{
    console.log("Done!!");
});
