module.exports = {
  // entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
  entry: './client/index.js',
  mode: 'development',
  output: {
    // path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}
