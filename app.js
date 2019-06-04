var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();

app.use('/home/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})

app.use('/home/confirmation/', function(req, res) {
    res.render('confirmation.ejs');
});

app.post('/home/confirmation/ok', urlencodedParser, function(req, res) {
    console.log('coucou');
    if (req.body.confirmation !== '') {
        console.log(req.body.confirmation);
    }
    res.redirect('/home');
});

app.use(function(req, res) {
    res.redirect('/home')
});

app.listen(3390);