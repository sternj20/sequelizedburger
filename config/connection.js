// Set up MySQL connection.
var mysql = require("mysql");
var path = require("path");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
	connection = mysql.createConnection({
		root:3000,
		host: 'b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'jxwbiwgj83jodyc1',
		password: 'uk0adq157izbg776',
		database: 'y38btxsc1x5q6fv4'
	});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
