const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let currentDay = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: currentDay, newListItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  console.log(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
