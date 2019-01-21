var path = require('path');
var webpack = require('webpack');
var DIST_DIR = path.resolve(__dirname, "dist"); 
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    mode: "development",
    entry: ['babel-polyfill', SRC_DIR + "\\app\\index.js"], //where to start transpiling from
    output: { //how & where to output bundle, assests etc
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        contentBase: "./src/app", //where to serve content from
        hot: true //hot module replacement
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-2"]
                }
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
              },
              {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    }
}

module.exports = config;