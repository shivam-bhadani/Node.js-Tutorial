const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const viewsPath = path.join(__dirname, "/pages/views");
const partialsPath = path.join(__dirname, "pages/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        login: "Shivam",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        login: "Shivam"
    });
})

app.get("*", (req, res) => {
    res.render("404", {
        errorComment: "Oops page couldn't be found",
        login: "Shivam"
    });
});

app.listen(6100, () => {
    console.log("Listening to PORT 6100");
});