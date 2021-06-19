const express = require('express');
const app = express();
const path = require('path');

const staticPath = path.join(__dirname, "../public");

// To set view engine...
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

// Template engine route
app.get("/", (req, res) => {
    res.render("index", {
        login: "Shivam"
    });
})

app.get("/", (req, res) => {
    res.send("home page");
});

app.listen(5700, () => {
    console.log("listening to port 5700");
});
