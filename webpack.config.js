// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist',
  },
  devServer: {
    contentBase: 'dist',
    port: 8080,
    inline: true,
    hot: true
  },
};
