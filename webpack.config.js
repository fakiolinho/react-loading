const { resolve } = require('path');

module.exports = {
  entry: './lib/react-loading.jsx',
  output: {
    filename: 'react-loading.js',
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'Loading',
  },
  node: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.svg$/,
      use: 'raw-loader',
    }],
  },
};
