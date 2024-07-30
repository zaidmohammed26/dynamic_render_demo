const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

let h1Text = "Default H1 Text";

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { h1Text });
});

app.get("/admin", (req, res) => {
  res.render("admin", { h1Text });
});

app.post("/admin", (req, res) => {
  h1Text = req.body.h1Text;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
