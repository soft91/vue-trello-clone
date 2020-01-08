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

app.use('/board/', routes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});