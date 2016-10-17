var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/client.js',
  output: {
    path: './app/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      }]
  },
  plugins: [
        new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
