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
  }) //The res.render() function is used to render a view and sends the rendered HTML string to the client. 

});

app.post("/", function(req, res) {
  var item = req.body.newItem
  res.render("list", {newListItem: item
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
