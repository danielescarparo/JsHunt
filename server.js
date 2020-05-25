const express = require('express')
const mongoose = require('mongoose')
const requireDir = require("require-dir")

//init app
const app = express();
//send data using json format
app.use(express.json());

//init database
mongoose.connect("mongodb://localhost:27017/nodeapi",  { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./src/models");

//routes
app.use('/api', require('./src/routes'));

app.listen(3001)