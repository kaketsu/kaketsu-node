var exec = require("child_process").exec;
function start(response){
	console.log("Request handler 'start' was called.");

	exec("find /", function (error, stdout, stderr) { 
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});

}

function upload(response){
	console.log("Request handler 'upload' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();

}

exports.start = start;
exports.upload = upload;

//以非阻塞操进行请求响应
//在这里，Start如果耗费特别多的时间时，upload也会立即响应的