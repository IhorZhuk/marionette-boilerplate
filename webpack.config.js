const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var TEST_DIR = path.resolve(__dirname, "test");

module.exports = {
  entry: SRC_DIR + '/js/app.js',
  resolve: {
    alias: {
      Templates: SRC_DIR +  '/js/templates',
      Views: SRC_DIR + '/js/views',
      Entities: SRC_DIR + '/js/entities',
      Behaviors: SRC_DIR + '/js/behaviors',
      Fixtures: TEST_DIR + '/fixtures',
      Img: SRC_DIR + '/img'
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
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'file-loader?name=img/[name].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery', 'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      _: 'underscore'
    })
  ]
};