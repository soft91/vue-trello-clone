const express = require('express');
const router  = express.Router();
const mysql = require('mysql');
const config = require('../config/database.js');
const connection = mysql.createConnection(config);

connection.connect();

router.get('/card', (req, res) => {
  const params = [req.query.lid];

  connection.query('SELECT * FROM trello_card WHERE lid = ?', params, function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
});

router.get('/addCard', (req, res) => {
  const params = [req.query.lid, req.query.title];

  connection.query('INSERT INTO trello_card(lid, title) VALUES(?, ?)', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log('Card Insert Compelete');
      res.send(rows);
    }
  });
});

router.get('/changeItem', (req, res) => {
  console.log('changeItem');
})

module.exports = router;