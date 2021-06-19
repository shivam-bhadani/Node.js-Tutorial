// In this tutorial we will learn how to use hbs by our own custom folder name without using "views" for the folder name.

// We are using templates folder

const express = require("express");
const app = express();
const path = require("path");

const templatesPath = path.join(__dirname, "/templates")
app.set("view engine", "hbs");
app.set("views", templatesPath);  //second argunment is path of the new folder

app.get("/", (req, res) => {
    res.render("index", {
        login: "Peter"
    });
});

app.listen(5800, () => {
    console.log("Listening to PORT 5800");
});