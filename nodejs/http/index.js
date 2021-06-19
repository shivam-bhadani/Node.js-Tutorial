// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
// The http module can create an http server that listens to server ports and gives a response back to the client.

const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!");
    res.end();
})

server.listen(8000, "127.0.0.1", () => console.log("Listening to the port no 8000"));