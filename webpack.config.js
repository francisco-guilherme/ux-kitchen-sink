const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});

const ExtractCSS = new ExtractTextPlugin({
  filename: "styles.min.css"
});

module.exports = {
  entry: ["./client/index.js", "./client/styles/main.scss"],
  output: {
    path: path.resolve("static"),
    filename: "index.min.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(css|scss)/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, ExtractCSS]
};
9