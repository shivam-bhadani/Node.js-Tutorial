const express = require('express');  // Returns express() function 

const app = express();    // Calling express() returns an object that has usefull methods 

// Creating Express app which starts a server and listen on local port. 

// There are four main types of http request to:
// GET = to get data
// POST = to create data
// PUT = to update data
// DELETE = to delete data

// To get data from server we use get(route, callback) method
// The callback function has two parameters: request(req) and respond(res).
// The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc
//Similarly, the respond object represents the HTTP response that the Express app sends when it recieves an HTTP request.

app.get("/", (req, res) => {
    res.write("Hello World!");
});

app.listen(3500, () => {
    console.log("Listening in Port 3500");
});