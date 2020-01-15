const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const board = require('./routers/board');
app.use('/', board);
const list  = require('./routers/list');
app.use('/', list);
const card  = require('./routers/card');
app.use('/', card);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});