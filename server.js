var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));