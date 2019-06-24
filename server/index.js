var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');
// var items = require('../database-mongo');

db.connection.connect();
var app = express();

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/splytBills', db.addExpense);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

