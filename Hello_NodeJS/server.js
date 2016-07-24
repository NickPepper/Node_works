var http    = require("http"),
    url     = require("url"),
    DEBUG   = require("./settings").DEBUG;

function start(PORT, route, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        DEBUG && console.log("Request for " + pathname + " received");
        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(PORT);
    DEBUG && console.log("Server on port " + PORT + " started OK");

}

exports.start = start;
