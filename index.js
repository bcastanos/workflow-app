var express = require('express')
var mongoose  = require('mongoose')
var app = express()

app.get('/', function(req,res){
  res.send("Welcome home.")
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})
