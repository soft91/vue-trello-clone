const express = require('express');
const router  = express.Router();
const mysql = require('mysql');
const config = require('../config/database.js');
const connection = mysql.createConnection(config);

connection.connect();

router.get('/list', (req, res) => {
  const params = [req.query.bno];

  connection.query('SELECT * FROM trello_list WHERE bno = ?', params, function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
})

router.get('/addList', (req, res) => {
  const params = [req.query.bno, req.query.title];

  connection.query('INSERT INTO trello_list(bno, title) VALUES(?, ?)', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log('List Insert Compelete');
      res.send(rows);
    }
  });
});

router.get('/listTitleUpdate', (req, res) => {
  const params = [req.query.listTitle, req.query.id];

  connection.query('UPDATE trello_list SET title = ? WHERE id = ?', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log('ListTitle Update Compelete');
      res.send(params);
    }
  })
})

module.exports = router;