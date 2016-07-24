var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var watchify = require('watchify');
var args = require('minimist')(process.argv.slice(2));

var makeDestinationPath = require('./build-util').makeDestinationPath;

var b = browserify({
    entries: [args.src],
    cache: {},
    packageCache: {},
    plugin: [watchify]
});

var target = path.join(path.dirname(makeDestinationPath(args.src)), 'bundle.js');

b.on('log', function(msg) {
    console.log(msg + ': ' + target);
});

function bundle() {
    b.bundle().pipe(fs.createWriteStream(target));
}

b.on('update', bundle);
bundle();
