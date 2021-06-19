const http = require('http');

server = http.createServer();

server.on('request', (req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>We are creating server through event</h1>");
    res.end();
})

server.listen(2020, "127.0.0.1");