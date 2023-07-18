//jshint esversion:6
//npm i ejs
const express = require("express");
const bodyParser = require("body-parser");

var items = ["make bed"]; //array that holds new items. w/o this we just rewrite the last item in the list
var workItems = [];
const app = express();
app.set('view engine', 'ejs'); //use ejs as view engine
app.use(bodyParser.urlencoded({
  extended: true}));

app.use(express.static('public')); //since express cannot load css from index.html, we have to resort to this

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options) //options sets our format



  res.render("list", {
    listTitle: day,
    newListItems: items
  }) //The res.render() function is used to render a view and sends the rendered HTML string to the client.

});
app.post("/", function(req, res){// work input jumps us to this code, so we use a if statement to mitigate it
  //using the fact that button gives "work" as an output.

  let item = req.body.newItem;
  console.log(req.body.list);
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
    // here if "work" is a value for button we push the item to workItems and redirect to /work
  }
  else{
    items.push(item);
    res.redirect("/");
  }




})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item)
  res.redirect("/work")

})

// app.post("/", function(req, res) {
//   var item = req.body.newItem
//   items.push(item); //pushes item to list every refresh
//   res.redirect("/"); //redirects us to homepage to refresh for our new item
// })

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
