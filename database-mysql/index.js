var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'splytBills'
});

var selectAll = function(callback) {
  console.log('connected!');
  // TODO: select all debt for user logged in
  connection.query('SELECT * FROM debt', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var addExpense = function(req, res) {
  console.log('req.body', req.body);
  const { description, total, amountOwed, borrower } = req.body; 
  const query = 'INSERT INTO debt (`description`, `total`, `amountOwed`, `borrower`) VALUES (?, ?, ?, ?);'
  connection.query(query, [description, total, amountOwed, borrower], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send('new expense added!');
    }
  })
}

var deleteExpense = function(req, res) {
  console.log('req body delete', req.params);
  const debt_id = parseInt(req.params.id);
  console.log('debt_id db', typeof debt_id);
  const query = 'DELETE FROM debt WHERE debt_id = ?;'
  connection.query(query, [debt_id], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send('expense deleted!!');
    }
  })
}

module.exports = {
  selectAll,
  connection,
  addExpense,
  deleteExpense
}

