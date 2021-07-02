const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React library",
    }),
    new StylableWebpackPlugin(),
  ],
  devServer: {
    contentBase: "./build",
  },
};
