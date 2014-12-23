module.exports = {
  entry: './index.js',
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
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
