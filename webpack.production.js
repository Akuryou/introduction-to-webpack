const webpack = require('webpack');
const base = require('./webpack.config');

base.plugins.push(new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  mangle: false,
  compress : { screw_ie8 : true },
  comments: false,
}));

module.exports = base;
