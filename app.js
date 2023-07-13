const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

const PORT = 5000;

// connect to the ejs engine
app.set("view engine", "ejs");

app.use(expressLayout);
app.set("layout", ".layouts/main");

//public folder contains css and js
app.use(express.static("public"));

//connect to the index.html
app.get("/Home", (req, res) => {
  res.render("index");
});

app.get("/About", (req, res) => {
  res.render("about");
});

app.get("/Contacts", (req, res) => {
  res.render("contacts");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
