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
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jscs-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
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
  jscs: {
    preset: 'airbnb',
    requirePaddingNewLinesAfterBlocks: {
      allExcept: ["inCallExpressions", "inNewExpressions", "inArrayExpressions", "inProperties"]
    },
    requireSpacesInAnonymousFunctionExpression: {
      beforeOpeningCurlyBrace: true
    },
    requireSpacesInsideObjectBrackets: false,
    maximumLineLength: {
      value: 140
    },
  },
  jshint: {
    browser: true,
  },
  devServer: {
    host: '0.0.0.0',
  },
};
