var http = require("http");
var url = require("url");

function start(route) {
	var PORT = 1967;

	function onRequest(request, response) {
	  	var pathname = url.parse(request.url).pathname;
    	console.log("Request for " + pathname + " received");
    	route(pathname);
	  	response.writeHead(200, {"Content-Type": "text/plain"});
	  	response.write("Hello from Nick Pepper! Тест кириллицы норм?");
	  	response.end();
	}

	http.createServer(onRequest).listen(PORT);
	console.log("Server on port "+PORT+" started OK");

}

exports.start = start;
