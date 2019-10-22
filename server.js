//requires
const express = require("express");
const app = express();

//setting port
const PORT = process.env.PORT || 3306;

//adding the static content from public directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adding routes
const routes = require("./controllers/burgerController.js");

//make the port listen
app.listen(PORT, function() {
  console.log("App now listening on: http://localhost:" + PORT);
});

// Not done: Set Handlebars.
// const exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);
