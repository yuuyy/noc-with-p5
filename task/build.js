var fs = require('fs');
var path = require('path');

var browserify = require('browserify');

var eachSrc = require('./each-src');

function ignoreFunc(file, stats) {
    if (stats.isDirectory()) {
        return false;
    } else {
        return path.basename(file) !== 'src.js';
    }
}

eachSrc([ignoreFunc], function(src, dist) {
    var target = path.join(path.dirname(dist), 'bundle.js');
    var writeStream = fs.createWriteStream(target);
    var b = browserify(src);
    b.bundle().pipe(writeStream);

    writeStream.on('finish' ,function() {
        console.log('created! - ' + target);
    });

    writeStream.on('error', function(err) {
        console.log(err);
    });
});
