// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

// Readable − Stream which is used for read operation.

// Writable − Stream which is used for write operation.

// Duplex − Stream which can be used for both read and write operation.

// Transform − A type of duplex stream where the output is computed based on input.



// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −

// data − This event is fired when there is data is available to read.

// end − This event is fired when there is no more data to read.

// error − This event is fired when there is any error receiving or writing data.

// finish − This event is fired when all the data has been flushed to underlying system.


const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const rs = fs.createReadStream("read.txt");
    rs.on('data', (chunk) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(chunk);
    });
    rs.on('end', () => {
        res.end();
    });
    rs.on('error', (err) => {  
        console.log("Error is : " + err);   
        res.end("File not found");
    });
});

server.listen(8080, "127.0.0.1");