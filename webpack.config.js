var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'main': './src/main.js',
    'vendor': './src/vendor.js',
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {test: /\.pug$/, use: ['pug-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader']},
      {test: /\.(jpe?g|png|gif)$/i, use: ['file-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['svg-url-loader?noquotes']},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.pug', }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ],
  devServer: {
    host: '0.0.0.0',
  },
};
