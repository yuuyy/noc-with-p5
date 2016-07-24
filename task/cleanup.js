var path = require('path');
var util = require('util');

var rimraf = require('rimraf');

var relative = util.format('..%spublic%s*', path.sep, path.sep);
var publicPath = path.join(__dirname, relative);

rimraf.sync(publicPath);
