var path = require('path');
var util = require('util');

var recursive = require('recursive-readdir');
var mkdirp = require('mkdirp');

function makeDestinationPath(filePath) {
    var segments = path.relative(__dirname, filePath).split(path.sep);
    segments[1] = 'public';
    return path.join(__dirname, segments.join(path.sep));
}

var srcPath = path.join(__dirname, util.format('..%ssrc', path.sep));

function eachSrc(ignores, callback) {
    recursive(srcPath, ignores, function (err, files) {
        files.forEach(function (src, idx, files) {
            var dist = makeDestinationPath(src);

            mkdirp(path.dirname(dist), function (err) {
                if (err) throw err;

                callback(src, dist);
            });
        });
    });
}

module.exports = {
    'eachSrc': eachSrc,
    'makeDestinationPath': makeDestinationPath
};
