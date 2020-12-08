var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
     burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//p
router.post("/burger/", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/")
  })
  

    // send back the ID of the new quote
    // res.json({ id: result.insertID});
});


// router.post("/burger/create", function(req, res) {
//  burger.create([
//    "burger_name", "devour"]);
//   console.log(result);
  
//   });


//renders put request on the screen//
router.put("/burger/:id", function(req, res) {
   burger.update(req.params.id, function(result){
     console.log(result);
     res.sendStatus(200)
   })
  
});
    

module.exports = router;
