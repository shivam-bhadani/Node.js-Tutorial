const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const rs = fs.createReadStream('input.txt');
    rs.pipe(res);
});

server.listen(9050, "127.0.0.1");