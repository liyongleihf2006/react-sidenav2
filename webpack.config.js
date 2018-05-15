const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, "./website/src/index.jsx"),
    output: {
        path: path.resolve(__dirname, './website/dist'),
        filename: '[name].[chunkhash:4].bundle.js'
    },
    devtool:"source-map",
    module:{
        rules:[{
            test:/\.js[x]?$/,
            use:[{
                loader:"babel-loader"
            }],
            include:[path.resolve(__dirname,"./website/src")]
        },{
            test:/\.css$/,
            use:[
                { loader: "style-loader" },
                { loader: "css-loader" }
            ],
            include:[path.resolve(__dirname,"./website/src")]
        }]
    },
    plugins:[
        new CleanWebpackPlugin([path.join(__dirname,"./website/dist")]),
        new HtmlWebpackPlugin({
            template: __dirname + "/website/src/index.html",
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve:{
        extensions:['.js','.jsx']
    }
}