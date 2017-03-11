const path = require("path");
const fs = require("fs");

// Hack from http://stackoverflow.com/questions/34848555/webpack-issue-trying-to-bundle-socket-io
let nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });


// Defaul config
const defaultConfig = {
  // Output
  output: {
    path: path.join(__dirname, "dist"),
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ "babel-loader" ] }
    ]
  }
};

const clientConfig = Object.assign({}, defaultConfig, {
  entry: "./client/index.js",

  output: Object.assign({}, defaultConfig.output, {
    filename: "client.js"
  }),
});

const serverConfig = Object.assign({}, defaultConfig, {
  // Entry file
  entry: "./server/index.js",

  target: "node",
  externals: nodeModules,

  // Output
  output: Object.assign({}, defaultConfig.output, {
    libraryTarget: "umd",
    filename: "server.js"
  }),

  stats: {
    warnings: false
  }
});
module.exports = [ clientConfig, serverConfig ];
