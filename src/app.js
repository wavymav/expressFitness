/* jshint node: true */
/* jshint esnext: true */

'use strict';

var express = require('express');
var dummyData = require('./dummy.json');

// creating an [] of dummyData {}'s
var dummyDataList = Object.keys(dummyData).map((value) => {
    return dummyData[value];
});

// express app
var app = express();

// express static server middleware to serve static files from /client
app.use('/static', express.static(__dirname + '/client'));

// view engine & file location for viewss
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// route for the home/root directory
app.get('/', (req, res) => {
    var path = req.path;
    res.render('index', { path : path});
});

// route for dummyData blog post
app.get('/blog/:title?', (req, res) => {
    var title = req.params.title;
    var path = req.path;

    // handling response
    if (path === '/blog') {
        res.status(503);
        res.render('blog', { posts : dummyDataList });
    } else {
        var post = dummyData[title] || {};
        res.render('post', { post : post });
    }
});

// route for dummy json data
app.get('/posts', (req, res) => {
    if (req.query.raw) {
        res.json(dummyData);
    } else {
        res.json(dummyDataList);
    }
});

// app will listen on localhost:3000
app.listen(3000, () => {
    console.log('Client server running on http://localhost:3000/');
});
