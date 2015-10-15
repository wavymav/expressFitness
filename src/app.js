/* jshint node: true */
/* jshint esnext: true */

'use strict';

var express = require('express');
var dummyData = require('./dummy.json');

var app = express();

// route for the home/root directory
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

// route for dummyData
app.get('/Dummy', (req, res) => {
    res.send(dummyData);
});

// app will listen on localhost:3000
app.listen(3000, () => {
    console.log('Client server running on http://localhost:3000/');
});
