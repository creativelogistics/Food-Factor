const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};