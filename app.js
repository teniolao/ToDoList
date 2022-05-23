const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

//   let yearOption = {
//     year: "numeric",
//   };

  //let currentYear = today.toLocaleDateString("en-US", yearOption);
  let currentDay = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: currentDay,
    newListItems: items,
    year: year,
  });
});

app.post("/", (req, res) => {
  //console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
    year: currentYear,
  });
  console.log("Server started on port 3000");
});

app.get("/about", function (req, res) {
  res.render("about");
  
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
