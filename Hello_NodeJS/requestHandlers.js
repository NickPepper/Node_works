var DEBUG = require("./settings").DEBUG;
//var exec = require("child_process").exec;

function start(response) {
    DEBUG && console.log("Request handler 'start' was called.");

    // TODO: REFACTORING - not the best idea to mix view into the logic
    var body = '<!DOCTYPE html>\n'+
        '<html>\n'+
        '<head>\n'+
        '\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n'+
        '\t<title>Pepper Node</title>\n'+
        '</head>\n'+
        '<body>\n'+
        '\t<p>Напиши здесь что угодно:</p>\n'+
        '\t<form action="/upload" method="post">\n'+
        '\t\t<textarea name="text" rows="10" cols="40"></textarea><br/><br/>\n'+
        '\t\t<input type="submit" value="Услать на сервак" />\n'+
        '\t</form>\n'+
        '</body>\n'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write(body);
    response.end();

/*
    exec("ls -Fail", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write("Hello from Nick Pepper's Node.js server!\nТест кириллицы норм?\nls -Fail корня сервера:\n\n");
        response.write(stdout);
        response.end();
    });
*/
/*
    exec("find /",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write("Hello from Nick Pepper's Node.js server!\nТест кириллицы норм?\nfind / с искусственной задержкой в 10 секунд:\n\n");
        response.write(stdout);
        response.end();
    });
*/
}


function upload(response) {
    DEBUG && console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write("<h3>ПреведЪ, Upload :)</h3>");
    response.end();
}


exports.start = start;
exports.upload = upload;
