var http = require("http"),
	path = require("path"),
	fs = require("fs"),
	connect = require('connect');

var app = connect().use(connect.static(__dirname + '/public'));

app.listen(8180);
console.log('Listening on port 8180.');
