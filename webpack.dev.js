const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/client/dist')
  },
  devServer: {
    hot: true,
    proxy: {
      '/products': {
        target: 'http://localhost:3070',
      }
    }
  },

});
