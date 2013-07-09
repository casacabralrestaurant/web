var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('Welcome to Casa Cabral Restaurant. We are underconstruction and will be live soon!');
});

app.use(function(error, request, response, next) {
    if (request.xhr) {
        response.send(500, 'Error occurred!');
    } else {
        next(error);
    }
});

console.log('starting the express (nodeJS) web server');
app.listen(8080);
console.log('web server listening on port 8080');
