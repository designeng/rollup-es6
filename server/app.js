var express = require('express');
var app = express();

// static pages
app.use(express.static('./public'));

/* 404 */
app.use(function(req, res, next) {
    var err = new Error('Route is not found!');
    err.status = 404;
    next(err);
});

module.exports = app;