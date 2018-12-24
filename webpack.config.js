const path = require("path");
// var SRC_DIR = path.join(__dirname, '/client');
var SRC_DIR = `${__dirname}/client/src`
var DIST_DIR = path.join(__dirname, '/client/dist/');
require("@babel/polyfill")

module.exports = {
  entry: ['@babel/polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"]
          // }
        }
      }
    ]
  }
};
