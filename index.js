var express = require('express')
var mongoose  = require('mongoose')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', function(req,res){
  res.send("Welcome home.")
})

app.get('/about', function(req,res){
  res.send('This is the about page')
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
