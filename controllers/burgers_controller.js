var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
  var hbsObject;
	burger.all(function(data){
		hbsObject = {
			burgers: data
		};
    burger.devoured(function(data){
    hbsObject.devouredBurgers=data
    
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
	});
  
  
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  var condition = req.params.id;
  console.log("condition", condition);

  burger.update(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
