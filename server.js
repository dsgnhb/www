const express = require('express')
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'imgs', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));


const redirects = {
    discord: {
        url: "https://discordapp.com/invite/PGv5TR3"
    },
    music: {
        url: "http://46.228.192.55:8087"
    },
    rc: {
        url: "https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0"
    },
    signaltransmitter: {
        url: "https://signaltransmitter.de/ref/234ra69r31584c44"
    },
    yt: {
        url: "https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA"
    }
}
app.locals.menu = [{
    title: "Top Design",
    route: "topdesign"
}, {
    title: "Home",
    route: "/"
}, {
    title: "Levels",
    route: "levels"
}];
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
app.get('/:keyword', function (req, res) {
    const keyword = req.params.keyword
    if (redirects[keyword]) {
        res.redirect(redirects[keyword].url);
    } else {
        res.redirect('./')
    }
});



const port = process.env.PORT || 7000;
app.listen(port);
console.log('Magic happens on port ' + port);