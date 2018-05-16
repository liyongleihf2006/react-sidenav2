const path = require("path");
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash:4].bundle.js'
    },
    devtool: "source-map",
    module: {
        /* dll文件不需要解析 */
        noParse: /dll/,
        rules: [{
            test: /\.js[x]?$/,
            use: [{
                loader: "babel-loader"
            }],
            include: [path.resolve(__dirname, "./src")]
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ],
            include: [path.resolve(__dirname, "./src")]
        }]
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, "./dist")]),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
        }),
        new HtmlWebpackIncludeAssetsPlugin({ assets: [path.join("../dll", "dll.js")], append: false }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join('dll', 'manifest.json'),
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}