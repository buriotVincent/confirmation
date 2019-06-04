var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});ù

var app = express();

app.use('/home/confirmation/', function(req, res) {
     res.render('confirmation.ejs');
});

app.use('/home/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})

app.post('/home/confirmation/', urlencodedParser, function(req, res) {
    if (req.body.confirm !== '') {
        console.log(req.body.confirm);
    }
    res.redirect('/home');
});

app.use(function(req, res) {
    res.redirect('/home')
});

app.listen(3389);