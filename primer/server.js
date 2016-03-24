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

//这种方式是讲服务器传递给内容，即将response对象传递给请求处理函数，程序随后采用该对象上的方法对请求进行响应
//我们将onRequest中response所有的函数都删除了，然后让route()函数来完成。
function start2(route,handle){

	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("start2 Request for " +pathname+ "received" );

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(1026);
}

//进行简单的post请求
function serverStart(route,handle){
	http.createServer(function(request, response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("http Request for " +pathname+ "received" );

		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'." );
		})

		request.addListener("end",function(){
			route(handle, pathname,response, postData);
		})

	}).listen(1027);
}



exports.start = start;
exports.start2 = start2;
exports.serverStart = serverStart;

