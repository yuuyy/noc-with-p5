var fs = require('fs');
var path = require('path');
var util = require('util');

var Mustache = require('mustache');

var eachSrc = require('./build-util').eachSrc;

var templatePath = path.join(__dirname,
    util.format('..%stemplate%st.mustache', path.sep, path.sep));
var template = fs.readFileSync(templatePath, 'utf-8');

function ignoreFunc(file, stats) {
    if (stats.isDirectory()) {
        return false;
    } else {
        return path.basename(file) !== 'src.js';
    }
}

eachSrc([ignoreFunc], function(_, dist) {
    var target = path.join(path.dirname(dist), 'index.html');
    fs.writeFile(target,
        Mustache.render(template, {title: path.basename(dist, '.js')}),
        function (err) {
            if (err) throw err;
            console.log('created! - ' + target);
        });
});

