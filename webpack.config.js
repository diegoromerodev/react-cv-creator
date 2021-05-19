const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
  },
};
