/* jshint node: true */

'use strict';

var express = require('express');

var app = express();

// setting up the route for the home/root directory
app.get('/', function(req, res){
    res.send('Home');
});

// app will listen on localhost:3000
app.listen(3000);
console.log('Express server running on http://localhost:3000/');
