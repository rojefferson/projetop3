
const Sequelize = require('sequelize');
var express = require('express');
var app = express();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco'
  });


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.get('/Unidades', function (req, res) {
    prod = [];
    sequelize.query("SELECT * FROM Unidade").then(myTableRows => {
        res.send(myTableRows);
      })
});