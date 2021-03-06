const webpack = require("webpack")
const Path = require("path")
const AssetsPlugin = require("assets-webpack-plugin")
const BUILD_DIR = "../assets/build/"

module.exports = {
  entry: {
    app: ["./src/client/index.js"],
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "redux",
      "react-redux",
      "redux-thunk",
      "react-router-dom"
    ]
  },

  output: {
    path: Path.resolve(__dirname, BUILD_DIR),
    filename:
      process.env.NODE_ENV == "production" ? "[name].[hash].js" : "[name].js",
    publicPath: "/assets/build/"
  },

  plugins: [
    new AssetsPlugin({
      prettyPrint: true,
      path: Path.join(__dirname, "../src/config")
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename:
        process.env.NODE_ENV == "production" ? "vendor.[hash].js" : "vendor.js",
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      )
    })
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-env", "@babel/react"],
              plugins: [
                "transform-class-properties",
                "syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
              ],
              env: {
                production: {
                  presets: []
                }
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}
