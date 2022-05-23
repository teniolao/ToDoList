const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  const day = date.getDate();
  const year = date.getYear();

  res.render("list", {
    listTitle: day,
    newListItems: items,
    currentYear: year,
  });
});

app.post("/", (req, res) => {
  //console.log(req.body);
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  let year = date.getYear();
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
    currentYear: year,
  });
  console.log("Server started on port 3000");
});

app.get("/about", function (req, res) {
  let year = date.getYear();
  res.render("about", { currentYear: year });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
