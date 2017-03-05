const path = require('path');

module.exports = {
  // Entry file
  entry: {
    bedel: "./index.js",
    client: "./client/index.js",
    server: "./server/index.js"
  },

  // Output
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].api.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ "babel-loader"] }
    ]
  }
}
