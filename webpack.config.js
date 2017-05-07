const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path:  path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        //this creates style in the header of the html
        //install 'extract-text-webpack-plugin' to create separate file for faster load time
        //use: ['style-loader', 'css-loader'],
        //must use older 'loader' syntax instead of 'use'
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader?',
            options: {bypassOnDebug: true}
          },
          {
            loader: 'url-loader',
            options: {limit: 4000}
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
