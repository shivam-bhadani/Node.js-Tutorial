const express = require("express");
const app = express();
const path = require("path");

const webLocation = path.join(__dirname, "../public");

app.use(express.static(webLocation));

app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(3300, () => {
    console.log("Listening to port 3300");
});