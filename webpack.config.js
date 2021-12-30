module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};