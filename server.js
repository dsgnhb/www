const express = require('express')
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'imgs', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));



app.locals.menu = [ { title: "Top Design", route: "topdesign" }, { title: "Home", route: "/" },{ title: "Levels", route: "levels"}];

let page = {};
app.get('/', function (req, res) {
    res.render('index', page);
});
app.get('/topdesign', function (req, res) {
    res.render('topdesign', page);
});
app.get('/levels', function (req, res) {
    res.render('levels', page);
});
app.get('/donate', function (req, res) {
    res.render('donate', page);
});

const port = process.env.PORT || 7000;
app.listen(port);
console.log('Magic happens on port ' + port);