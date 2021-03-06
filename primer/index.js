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
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandler');
var requestHandlers2 = require('./requestHandler2');
var requestPostHandlers = require('./requestPostHandler');

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/start2"] = requestHandlers.start2;
handle["/upload"] = requestHandlers.upload;

/*server.start(router.route, handle);
console.log("Server has started.");*/


var handle2 = {}
handle2["/"] = requestHandlers2.start;
handle2["/start"] = requestHandlers2.start;
handle2["/upload"] = requestHandlers2.upload;

/*server.start2(router.route2, handle2);
console.log("Server 2 has started.");*/

var handle3 = {}
handle3["/"] = requestPostHandlers.start;
handle3["/start"] = requestPostHandlers.start;
handle3["/upload"] = requestPostHandlers.upload;

server.serverStart(router.routePost, handle3);
console.log("Server post has started.");

