const express = require("express");
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nisargoza22:mongodbuser%402000@cluster22.j0eqh.mongodb.net/abc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
  })
  mongoose.connection.on('connected', () => {
    console.log("Connected to mongoDB")
  })
  mongoose.connection.on('error', (err) => {
    console.log("This  is error", err)
  })

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With , Content-Type , Accept, Authorization ");
  res.setHeader(
    "Access-Control-Allow-Methods",
    " GET , POST , PUT , PATCH , DELETE , OPTIONS ");
  next();
})

app.get('/',function(req,res){
    res.send("Hello!!");
})

app.listen(3000, function(){
    console.log("Server running on port : 3000!");
  })