const express = require('express')
const mongoose = require('mongoose')

//init app
const app = express();

//init database
mongoose.connect('mongodb://localhost:27017/nodeapi',  { useNewUrlParser: true, useUnifiedTopology: true });

// req -> request
// res -> response
app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(3001)