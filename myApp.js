const express = require('express'); // importing the express module.
const app = express();

app.use('/public', express.static(__dirname + '/public'));

// Without using arrow notation or async, below:
app.get('/', function (req, res) {
    console.log("Hello Express");
    res.sendFile(__dirname + '/views/index.html');   
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

/*
app.get('/json', (req, res) => {
    res.json({'message': 'Hello json'})
})
*/

































 module.exports = app;
