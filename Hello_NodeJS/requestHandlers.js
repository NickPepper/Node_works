var DEBUG       = require("./settings").DEBUG,
    //exec      = require("child_process").exec,
    querystring = require("querystring"),
    fs          = require("fs");


function start(response, postData) {
    DEBUG && console.log("Request handler 'start' was called.");

    // TODO: REFACTORING - not the best idea to mix view into the logic
    var body = '<!DOCTYPE html>\n'+
        '<html>\n'+
        '<head>\n'+
        '\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n'+
        '\t<title>Pepper Node</title>\n'+
        '</head>\n'+
        '<body>\n'+
        '\t<p><a href="/">Home</a> <a href="/start">Start</a> <a href="/upload">Upload</a> <a href="/show">Show</a></p>\n'+
        '\t<p>Напиши здесь что угодно:</p>\n'+
        '\t<form action="/upload" enctype="multipart/form-data" method="post">\n'+
        '\t\t<textarea name="text" rows="10" cols="40"></textarea><br/><br/>\n'+
        '\t\t<input type="submit" value="Услать текст на сервак" />\n'+
        '\t\t<p>Либо отправить на сервак файл:</p>\n'+
        '\t\t<input type="file" name="upload" />\n'+
        '\t\t<input type="submit" value="Upload file" />\n'+
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


function upload(response, postData) {
    DEBUG && console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write("<h3>Мне прислано постом:</h3><div>" + querystring.parse(postData).text + "</div>");
    response.end();
}


function show(response, postData) {
    DEBUG && console.log("Request handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function(error, file) {
    if(error) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(error + "\n");
        response.end();
    } else {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    }
    });
}



exports.start   = start;
exports.upload  = upload;
exports.show    = show;
