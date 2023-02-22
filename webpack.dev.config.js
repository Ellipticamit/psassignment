const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //entry:  './src/index.js',
    entry: {
        'home': './src/index.js',
        'products': './src/products.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/images/',
                        publicPath:'/images/'
                    }  
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: [ '@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.handlebars$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Welcome to Sasta Bazar',
            chunks: ['home'],
            template: 'src/template/index.handlebars',
            templateParameters: require(path.resolve(__dirname, 'src/template/banner.json')),
            description: 'Sasata Bazar description'
        }), 
        new HtmlWebpackPlugin({
            filename: 'products.html',
            chunks: ['products'],
            title: 'Product- Sasta Bazar',
            template: 'src/template/products.handlebars',
            description: 'Products description'
        }),
    ],
    resolve: {
        fallback: {
            "fs": false
        },
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
};
