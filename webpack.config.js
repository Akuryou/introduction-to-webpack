var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry.js',
  ],
  resolve: {
    root: __dirname,
  },
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      {test: /\.pug$/, loader: 'pug-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader:'file'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.pug', }),
    new webpack.optimize.DedupePlugin(), // removes duplicate code
    new webpack.optimize.OccurrenceOrderPlugin(true), // optimises size
  ],
  devServer: {
    host: '0.0.0.0',
  },

};
