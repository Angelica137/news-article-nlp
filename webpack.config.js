const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/client/index.js",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          iotions: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
