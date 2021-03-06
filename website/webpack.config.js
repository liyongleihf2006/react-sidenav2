const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, "./src/index.jsx")],
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
            use: [MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "postcss-loader"
            }],
            include: [path.resolve(__dirname, "./src")]
        }]
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, "./dist")]),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            /*  让babel-polyfill始终排在第一位,让dll始终排在第二位 */
            chunksSortMode: function (chunk1) {
                return chunk1.names[0] !== 'babel-polyfill'&&chunk1.names[0] !== 'dll';
            }
        }),
        new HtmlWebpackIncludeAssetsPlugin({ assets: [path.join("../dll", "dll.js")], append: false }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash:4].css',
            chunkFilename: '[id].[contenthash:4].css'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join('dll', 'manifest.json'),
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}