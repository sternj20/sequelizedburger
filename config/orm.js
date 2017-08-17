var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
	selectBurgersToEat: function(table, cb){
		connection.query('SELECT * FROM ?? WHERE devoured=false;',[table], function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
  selectDevouredBurgers: function(table, cb){
    connection.query('SELECT * FROM ?? WHERE devoured=true;',[table], function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // UPDATE burgers SET devoured = true WHERE id=22;
  update: function(id, cb) {
    connection.query("UPDATE burgers SET devoured = true WHERE ?", {id: id}, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;