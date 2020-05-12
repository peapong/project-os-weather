const express = require('express');
const path = require('path');
const morgan = require('morgan');


const app = express();
app.use(morgan('combined'));
app.use('/static', express.static('public'))

var port = process.env.PORT || 8000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

var listener = app.listen(port, function() {
    console.log('Starting node.js on port ' + listener.address().port);
});