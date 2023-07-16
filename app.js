//jshint esversion:6
//npm i ejs
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs'); //use ejs as view engine
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options) //options sets our format



  res.render("list", {
    KindofDay: day
  }) //renders list file, sends day to KindofDay variabke

});

app.post("/", function(req, res) {
  var item = req.body.newItem
  console.log(item)
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
