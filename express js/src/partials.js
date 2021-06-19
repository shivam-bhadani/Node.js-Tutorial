const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");   //To use partials we need to require hbs

const viewsPath = path.join(__dirname, "/pages/views");
const partialsPath = path.join(__dirname,"/pages/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        login: "Ram",
    });
});

app.listen(5900, () => {
    console.log("Listening to PORT 5900");
});