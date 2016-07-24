var path = require('path');

var express = require('express');

var app = express();
var conf = require('./config.js')[app.get('env')];

app.use('/', express.static(__dirname + path.sep + 'public'));

app.listen(conf.port, function () {
    console.log('Example app listening on port 3000!');
});
