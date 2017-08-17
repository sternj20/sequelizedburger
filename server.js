var express = require("express");
var body = require("body-parser");
var method = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();

var db = require("./models");

var router = require(path.join(__dirname, "controllers", "burgers_controller.js"));

var PORT = process.env.PORT || 7000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(method("_method"));

app.use(body.json()); // support json encoded bodies
app.use(body.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join('public')));

app.use("/", router);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});