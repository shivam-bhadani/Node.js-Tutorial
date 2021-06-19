const express = require('express');
const app = express();
const path = require('path');

const publicLocation = path.join(__dirname, "../public/index.html");

app.get("/", (req, res) => {
    res.sendFile(publicLocation);
})

app.listen(4200, () => console.log("Listening to the PORT 4200"));