/* jshint node: true */

'use strict';

var express = require('express');

var app = express();

// setting up the route for the home/root directory
app.get('/', function(req, res){
    res.send('<h1>Home</h1>');
});

// app will listen on localhost:3000
app.listen(3000, function() {
    console.log('Client server running on http://localhost:3000/');
});
