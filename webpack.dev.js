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

    // historyApiFallback: true,
    // hot: true,
    //inline: true,

    // host: 'localhost', // Defaults to `localhost`
    // port: 3000, // Defaults to 8080
    proxy: {
      '/products': {
        target: 'http://localhost:3070',
        // secure: false
      }
    }
  },

});


