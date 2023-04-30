let express = require('express'); // importing the express module.
let app = express();

// Without using arrow notation or async, below:
app.get('/', function (req, res) {
    console.log("Hello Express")
    res.sendFile(__dirname + '/views/index.html')   
})



































 module.exports = app;
