// View information about Express JS and its server side capabilities @ https://expressjs.com/en/guide/routing.html
var express = require('express');
var firebase = require('firebase');
var app = express();

//Templating engine: EJS
//Documentation: https://github.com/tj/ejs
app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get('/', function(req, res) {
    // host is the incoming url
    // changes depending on subdomain
    // ex) cs.reedyhighschool.com  or  deca.reedyhighschool.com

    var host = req.headers.host;
    switch (host) {
        case "reedyhighschool.com":
            res.render("index")
            break;
        case "www.reedyhighschool.com":
            res.render("index")
            break;
        default:
            res.render("clubnotfound", { "host": host });
            break;
    }
});

app.listen(10001, function() {
    console.log('Example app listening on port 10001!\nType http://localhost:10001/ in your web browser to see the Hello World page.');
});