//Middleware functions are functions that have access to the request object(req), the respose object(res), and the next middleware function in the application's req-res cycle. 
//These functions are used to modify req and res objects for tasks like parsing request bodies adding response headers, etc.

const express = require('express');
const app = express();

app.use("/", (req,res, next) => {
    console.log("Resently HOME page visited at "+ Date.now());
    next();
});
app.use("/about", (req, res, next) => {
    console.log("Resently ABOUT page visited at "+ Date.now());
    next();
});

// If you ommit the first parameter then middleware will run for all req res.

app.get('/', (req, res) => res.send("<h1>Welcome to home page"));
app.get('/about', (req, res) => res.send("<h1>Welcome to about page</h1>"));

app.listen(3200, () => console.log("Listening to PORT 3200"));

