var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    exec("ls -Fail", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write("Hello from Nick Pepper's Node.js server!\nТест кириллицы норм?\nls -Fail корня сервера:\n\n");
        response.write(stdout);
        response.end();
    });
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
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write("<h3>ПреведЪ, Upload :)</h3>");
    response.end();
}


exports.start = start;
exports.upload = upload;
