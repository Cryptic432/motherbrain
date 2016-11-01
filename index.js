// View information about Express JS and its server side capabilities @ https://expressjs.com/en/guide/routing.html
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!\nType http://localhost:8080/ in your web browser to see the Hello World page.');
});