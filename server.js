// Sets dependencies we willl use
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

// // Sets up the express app to handle data parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("app/public"));

// Setus up the bodyParser to sort JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Points the server to a series of "route" files
// require("")(app);
// require("")(app);

// "Starts" the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});