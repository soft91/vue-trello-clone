const express = require('express');
const router  = express.Router();
const mysql = require('mysql');
const config = require('../config/database.js');
const connection = mysql.createConnection(config);

connection.connect();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM trello_board', function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
});

router.get('/addBoard', (req, res) => {
  const params = [req.query.title];

  connection.query('INSERT INTO trello_board(title) VALUES(?)', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log('Board Insert Compelete');
      res.send(rows);
    }
  });
});

router.get('/BoardTitleUpdate', (req, res) => {

  const params = [req.query.boardTitle, req.query.id];

  connection.query('UPDATE trello_board SET title = ? WHERE id = ?', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log('BoardTitle Update Compelete');
      res.send(params);
    }
  })
})

module.exports = router;