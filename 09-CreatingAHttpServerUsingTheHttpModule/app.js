const http = require("http");
const server = http.createServer((req, res) => {
    // Create a server
    if (req.url === "/") {
        res.write("Hello Nodejs!");
        res.end();
    }
    else {
        res.write("Using some other domain");
        res.end();
    }
});

server.listen("3000");
