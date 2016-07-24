var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var settings = require("./settings");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(settings.PORT, router.route, handle);
