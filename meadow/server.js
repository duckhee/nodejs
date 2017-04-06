var http = require('http') ;
var express = require('express') ;
var port = 52273 ;

var app = express();
app.use(express.static('public')) ;
app.use(function (request, response) {
	response.send('<h1>Hello, world</h1>') ;
}) ;

http.createServer(app).listen(port, function(){
	console.log('Server Running at http://127.0.0.1:52273') ;
}) ;

