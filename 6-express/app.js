const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Welcome to node");
});

app.get("/home", function(req, res) {
  res.send("Welcome to home");
});

app.get("/about", function(req, res) {
  res.send("Welcome to about");
});

app.listen(3000);
