const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "eval-source-map", // to get high quality source maps
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    /* useful with absolute imports, "src" dir now takes precedence over "node_modules",
    otherwise you got an error when importing a file with absolute path.
    Is then treated as module requests from node_modules instead of your project files*/
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
