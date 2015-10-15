/* jshint node: true */

'use strict';

var express = require('express');
var dummyData = require('./dummy.json');

var app = express();

// route for the home/root directory
app.get('/', function(req, res) {
    res.send('<h1>Home</h1>');
});

// route for dummyData
app.get('/Dummy', function(req, res) {
    res.send(dummyData);
});

// app will listen on localhost:3000
app.listen(3000, function() {
    console.log('Client server running on http://localhost:3000/');
});
