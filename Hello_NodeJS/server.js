var http    = require("http"),
    url     = require("url"),
    DEBUG   = require("./settings").DEBUG;

function start(PORT, route, handle) {

    function onRequest(request, response) {
        var postData = "",
            pathname = url.parse(request.url).pathname;
        
        DEBUG && console.log("Request for " + pathname + " received");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            DEBUG && console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(PORT);
    DEBUG && console.log("Server on port " + PORT + " started OK");

}

exports.start = start;
