// Performing tasks on a particular path is called routing.

// The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

// This object has a property called "url" which holds the part of the url that comes after the domain name

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>This is Home Page</h1>");
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>This is Contact Page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>This is About Us Page</h1>");
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>Error 404 Page Not Found</h1>");
        res.end();
    }
});
server.listen(5000, "127.0.0.1", () => console.log("Listening the port no 5000"));