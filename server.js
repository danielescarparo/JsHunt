const express = require('express')

const app = express();

// req -> request
// res -> response
app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(3001)