const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + '/js/app.js',
  resolve: {
    alias: {
      Templates: SRC_DIR +  '/js/templates',
      Views: SRC_DIR + '/js/views',
      Entities: SRC_DIR + '/js/entities',
      Behaviors: SRC_DIR + '/js/behaviors'
    },
    extensions:['.js', '.jst']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.jst$/,
      use: {
        loader: 'underscore-template-loader'
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};