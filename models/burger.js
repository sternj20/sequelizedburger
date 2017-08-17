var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectBurgersToEat("burgers", function(res){
			cb(res);
		});
	},
	devoured: function(cb) {
		orm.selectDevouredBurgers("burgers", function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},
	update: function(id, cb) {
    orm.update(id, function(res) {
      cb(res);
    });
  },
};


module.exports = burger;