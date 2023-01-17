const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
    // HTML
    // const readStream = fs.createReadStream("./static/index.html");
    // res.writeHead(200, {"Content-type": "text/html"});
    
    // JSON
    // const readStream = fs.createReadStream("./static/example.json");
    // res.writeHead(200, {"Content-type": "application/json"});
    
    // Image (png)
    // const readStream = fs.createReadStream("./static/example.png");
    // res.writeHead(200, {"Content-type": "image/png"});

    readStream.pipe(res);
}).listen(3000);

