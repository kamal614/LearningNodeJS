const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("This is homepage");
    }
    else if (req.url == '/about') {
        res.end("This is About");
    }
    else if (req.url == '/contact') {
        res.end("This is Contact page");
    }else{
        res.writeHead(404)
        res.end("Page not defined");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("port no 8000");
});