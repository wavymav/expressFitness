/* jshint node: true */
/* jshint esnext: true */

'use strict';

var express = require('express');
var dummyData = require('./dummy.json');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// route for the home/root directory
app.get('/', (req, res) => {
    res.render('index');
});

// route for dummyData blog post
app.get('/dummy/:title?', (req, res) => {
    var title = req.params.title;

    // handling response
    if (!title) {
        res.status(503);
        res.send("This page is currently undergoing maintenance");
    } else {
        var post = dummyData[title] || {};
        res.render('post', { post : post });
    }
});

// app will listen on localhost:3000
app.listen(3000, () => {
    console.log('Client server running on http://localhost:3000/');
});
