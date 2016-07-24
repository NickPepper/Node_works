var DEBUG = require("./settings").DEBUG;

function route(handle, pathname, response) {
    DEBUG && console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        DEBUG && console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
        response.write("<h1>404&nbsp;&mdash; Not found</h1>");
        response.end();
    }
}

exports.route = route;
