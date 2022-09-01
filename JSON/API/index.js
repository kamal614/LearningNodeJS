const http = require("http");

const server = http.createServer((req, res) =>{
    res.end("Kamal");
    // if(req.url ="/"){
    //     res.end("HomePage");
    // }
    // else{
    //     res.end("Error 404")
    // }
});

server.listen(8500, "127.0.0.1", () =>{
    console.log("Server Started");
});