require('../../node_modules/dotenv/config')
require('../models/Patients');
require('../models/Doctors');

const express = require('../../node_modules/express');
var cookieParser = require('cookie-parser');
const bodyParser = require('../../node_modules/body-parser');
const mongoose = require('mongoose');
var app = express();

var config = require('../config')
var PORT = config.PORT;

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

const patientRoutes = require('../routes/patientRoutes')
app.use("/api/health", patientRoutes);
const doctorRoutes = require('../routes/doctorRoutes')
app.use("/api/health", doctorRoutes);

app.listen(PORT, function(){
    console.log("Server running on port : " + PORT);
  })