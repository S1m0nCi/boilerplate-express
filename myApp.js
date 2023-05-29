const express = require('express'); // importing the express module.
const app = express(); // creating an instance of express 
const { logger } = require('./logger')
require('dotenv').config()

app.use('/public', express.static(__dirname + '/public'));
app.use(logger)

// Without using arrow notation or async, below:
app.get('/', function (req, res) {
    console.log("Hello Express");
    res.sendFile(__dirname + '/views/index.html');   
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({ 'message': 'HELLO JSON' })
    } else {
        res.json({ 'message': 'Hello json' })
    }
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({ time: req.time })
    console.log('success')
})

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
})

app.route('/name')
.get((req, res) => {
    res.json({ name: req.query.first + ' ' + req.query.last })
})
.post((req, res) => {

})



















 module.exports = app;
