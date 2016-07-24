var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

var configs = {
  development: {
    root: rootPath,
    app: {
      name: 'NOC with p5'
    },
    port: process.env.PORT || 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'NOC with p5'
    },
    port: process.env.PORT || 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'NOC with p5'
    },
    port: process.env.PORT || 3000,
  }
};

module.exports = configs;
