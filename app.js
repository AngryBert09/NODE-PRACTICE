const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.sendFile("error.html");
});
