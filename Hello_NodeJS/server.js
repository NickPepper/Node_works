var http = require("http");
var url = require("url");

function start(route) {
	var PORT = 1967;

	function onRequest(request, response) {
	  	var pathname = url.parse(request.url).pathname;
    	console.log("Request for " + pathname + " received");
    	route(pathname);
	  	response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	  	response.write("Hello from Nick Pepper's Node.js server!\nТест кириллицы норм?");
	  	//response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	  	//response.write("<h1>Hello from Nick Pepper's Node.js server!</h1>\n<h2>Тест кириллицы норм?<h2>");
	  	response.end();
	}

	http.createServer(onRequest).listen(PORT);
	console.log("Server on port "+PORT+" started OK");

}

exports.start = start;
