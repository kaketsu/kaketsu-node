/*************************
var express = require('express');
var favicon = require('serve-favicon');
var fs = require('fs');
var logger = require('morgan');
var app = express();

//favicon.ico
app.use(favicon(__dirname + '/favicon.ico'));

//log
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));

app.get('/', function(req, res){
    res.send('hello world');
});
app.listen(1024);
console.log('Server running at http://127.0.0.1:1024/');
*/



//***********************
//使用node中的http模块
/*var http = require("http");

http.createServer(function(request, response){
	console.log("Request received");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello qiuqiu");
	response.end();
}).listen(1025);*/



//***********************
//使用模块进行封装createrServer
var server = require('./start');
server.start();
console.log("Server has started.");
