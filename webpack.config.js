var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build/assets/js"),
    filename: "bundle.js",
    publicPath: "/assets/js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  devtool: "eval"
}
