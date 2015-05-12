module.exports = {
  entry: './lib/react-loading.js',
  output: {
    filename: './dist/react-loading.js',
    sourceMapFilename: './dist/react-loading.map',
    library: 'Loading',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.svg$/, loader: 'raw-loader'}
    ]
  }
};
