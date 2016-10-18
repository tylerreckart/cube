var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: './app/client.js',
  output: {
    path: './app/public',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }, {
          test: /\.scss$/,
          loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }]
  },
  plugins: [
        new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
