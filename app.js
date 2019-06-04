var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();

app.use('/home/confirm/', function(req, res) {
     res.render('confirmation.ejs');
});

app.use('/home/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
})

app.post('/home/confirmation/', urlencodedParser, function(req, res) {
    if (req.body.confirmation !== '') {
        var emails = [];
        emails.push(req.body.confirmation);
        console.log(emails[0]);
    }
    res.redirect('/home');
});

app.use(function(req, res) {
    res.redirect('/home')
});

app.listen(3390);