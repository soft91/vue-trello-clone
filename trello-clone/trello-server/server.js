const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mysql = require('mysql');
const config = require('./config/database.js');
const connection = mysql.createConnection(config);

connection.connect();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  connection.query('SELECT * FROM trello_board', function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
});

app.get('/addBoard', function(req, res){
  const params = [req.query.title];

  connection.query('INSERT INTO trello_board(title) VALUES(?)', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log(rows.insertId);
      res.send(rows);
    }
  });
});

app.get('/searchList', function(req, res){
  const params = [req.query.bno];

  connection.query('SELECT * FROM trello_list WHERE bno = ?', params, function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
})

app.get('/addList', function(req, res){
  const params = [req.query.bno, req.query.title];

  connection.query('INSERT INTO trello_list(bno, title) VALUES(?, ?)', params, function(err, rows){
    
    if(err){
      console.log(err);
    }else{
      console.log(rows.insertId);
      res.send(rows);
    }
  });
})

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});