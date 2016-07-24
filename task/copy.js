var fs = require('fs');
var path = require('path');

var eachSrc = require('./build-util').eachSrc;

function ignoreFunc(file, stats) {
    if (stats.isDirectory()) {
        return false;
    } else {
        return path.basename(file) === 'src.js';
    }
}

eachSrc([ignoreFunc], function(src, dist) {
    var writeStream = fs.createWriteStream(dist);
    fs.createReadStream(src).pipe(writeStream);

    writeStream.on('finish' ,function() {
        console.log('copied! - ' + dist);
    });

    writeStream.on('error', function(err) {
        console.log(err);
    });
})
