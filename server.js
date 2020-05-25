const express = require('express')
const mongoose = require('mongoose')
const requireDir = require("require-dir")
//init app
const app = express();

//init database
mongoose.connect("mongodb://localhost:27017/nodeapi",  { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./src/models");

const Product = mongoose.model('Product');

// req -> request
// res -> response
app.get("/", (req, res) => {
    Product.create({ 
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
});
    res.send("Hello");
});

app.listen(3001)