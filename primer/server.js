var http = require("http");
var url = require("url");

function start(route,handle){
	var server = http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + " received.");

		var content = route(handle,pathname);

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(content);
		response.end();
	}).listen(1025);

	server.on("request",function(req,res){
		console.log('*********************above is a request.');
	})
}	

exports.start = start;