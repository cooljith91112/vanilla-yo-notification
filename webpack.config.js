const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');


const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";
console.log(webpack.plugins);
var config = {
  devtool: isProd ? "hidden-source-map" : "source-map",
  context: path.resolve("./src"),
  entry: {
    app: "./index.ts"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "vanilla-yo-notification.js",
    sourceMapFilename: "vanilla-yo-notification.js.map",
    devtoolModuleFilenameTemplate: function (info) {
        return "file:///" + info.absoluteResourcePath;
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.ts?$/,
        exclude: ["node_modules"],
        use: ["awesome-typescript-loader", "source-map-loader"]
      },     
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // eslint-disable-line quote-props
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }), 
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new WebpackShellPlugin({
      onBuildEnd: 'cp -r dist/* docs/example/'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    port: 3000,
    hot: true
  }
};

module.exports = config;
