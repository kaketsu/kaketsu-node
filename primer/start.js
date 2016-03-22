var http = require("http");
var url = require("url");

function start(){
	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + " received.");

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Hello qiuqiu");
		response.end();
	}).listen(1025);
}	

exports.start = start;