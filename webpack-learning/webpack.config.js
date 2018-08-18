const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./app/main.js", //The entrance file
    output: {
        path: path.resolve(__dirname, 'dist'), //package dictory
        filename: "bundle-[hash].js" //package file name
    },
    devtool: 'eval-source-map', //souremao setting
    devServer: {
        contentBase: './dist', //local dev server dictory
        inline: true, //hot refresh
        historyApiFallback: true //no jump
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }

                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin("All copyright Jason Zhang"),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),  
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })   
    ]
}