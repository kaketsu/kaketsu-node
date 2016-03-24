function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		console.log("No request handler found for " + pathname);
		return "404 Not found";
	}
}

//进行response处理
function route2(handle, pathname, response){
	console.log("About to route2 a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	}
}

//进行response处理
function routePost(handle, pathname, response, postData){
	console.log("About to route2 a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response, postData);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	}
}


exports.route = route;
exports.route2 = route2;
exports.routePost = routePost;