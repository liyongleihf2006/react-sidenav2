const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const library = "dll";
module.exports = {
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        libraryTarget: 'window',
        library: library,
    },
    entry: {
        dll: ['react', 'react-dom','react-loadable','react-router','react-router-dom','react-sidenav2'],
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: [{
                loader: "babel-loader"
            }],
            include: [path.resolve(__dirname, "./node_modules/react-loadable")]
        }]
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, "dll")]),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dll', 'manifest.json'),
            // This must match the output.library option above
            name: "window." + library,
            //千千万万不要设置context
            /* context:... this is wrong */
        }),
    ],
}