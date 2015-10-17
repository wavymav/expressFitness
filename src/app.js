/* jshint node: true */
/* jshint esnext: true */

'use strict';
// getting an error for import at the moment
const express = require('express');
const dummyData = require('./dummy.json');

// creating an [] of dummyData {}'s
let dummyDataList = Object.keys(dummyData).map((value) => {
    return dummyData[value];
});

// express app
let app = express();

// express static server middleware to serve static files from /client
app.use('/static', express.static(__dirname + '/client'));

// view engine & file location for viewss
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// route for the home/root directory
app.get('/', (req, res) => {
    let path = req.path;
    res.render('index', { path : path});
});

// route for dummyData blog post
app.get('/blog/:title?', (req, res) => {
    let title = req.params.title;
    let path = req.path;

    // handling response
    if (path === '/blog') {
        res.status(503);
        res.render('blog', { posts : dummyDataList });
    } else {
        let post = dummyData[title] || {};
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
