var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();

app.get('/home', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenue sur la page d\'accueil');
});

app.get('home/confirmation', function() {
    res.render('confirmation.ejs');
});

app.post('home/confirmation/on/', function(req, res) {
    if (req.body.confirmation !== '') {
        console.log(req.body.confirmation);
    }
    res.redirect('/home');
});

app.listen(3390);