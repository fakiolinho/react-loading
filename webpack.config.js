module.exports = {
  entry: './lib/react-loading.js',
  output: {
    filename: './dist/react-loading.js',
    sourceMapFilename: './dist/react-loading.map',
    libraryTarget: 'umd',
    library: 'Loading'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.svg$/, loader: 'raw-loader'}
    ]
  }
};
