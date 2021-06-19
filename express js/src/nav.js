const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.write("<h1>Welcome to HOME page.</h1>");
    res.send();   // To end the response
});

app.get('/about', (req, res) => {
    res.write("<h1>Welcome to ABOUT page.</h1>");
    res.send();
});

app.get('/login', (req, res) => {
    res.write("<h1>Welcome to LOGIN page.</h1>");
    res.send();
});

app.get('/contact', (req, res) => {
    res.send("<h1>Welcome to CONTACT page.</h1>");
});

// If you have only one line of response then you can pass it to res.send() also

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
// Note: In app.listen() callback function is optional.






