var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    'entry': './src/entry.js',
    'vendor': './src/vendor.js',
  },
  resolve: {
    root: __dirname,
  },
  output: {
    path: './build',
    filename: '[name]-[hash].js'
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
      {test: /\.styl$/, loader: 'style!css!stylus'},
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
    new webpack.optimize.CommonsChunkPlugin({
      filename: '[name]-[hash].js',
      name: 'common'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: false,
      compress: { screw_ie8: true },
      comments: false,
    })
  ],
  jscs: {
    preset: 'airbnb',
    requirePaddingNewLinesAfterBlocks: {
      allExcept: ['inCallExpressions', 'inNewExpressions', 'inArrayExpressions', 'inProperties']
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
