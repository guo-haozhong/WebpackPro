const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // JavaScript 执行入口文件
    entry: __dirname + '/app/main.js',
    output: {
        //将输出文件都放到 dist 目录下
        path: path.resolve(__dirname, "./dist"),
        //将所有依赖的模块合并输出到 bundle.js 文件中
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: `style.css`
        }),
        new CleanWebpackPlugin({
            root: __dirname + "/dist/*.*",
            verbose: true,
            dry: false
        })
    ],
}
