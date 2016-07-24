var http = require("http");
var url = require("url");

function start(route, handle) {
	var PORT = 1967;

	function onRequest(request, response) {
	  	var pathname = url.parse(request.url).pathname;
    	console.log("Request for " + pathname + " received");
    	route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(PORT);
	console.log("Server on port "+PORT+" started OK");

}

exports.start = start;
