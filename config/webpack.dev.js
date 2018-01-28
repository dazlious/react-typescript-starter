/* global require, __dirname, module */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');

module.exports = (env) => ({
    entry: [
        './src/app.tsx'
    ],
    output: {
        path: path.resolve(__dirname, '../', 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'js': path.resolve(__dirname, '../', 'src/js/'),
            'scss': path.resolve(__dirname, '../', 'src/scss/')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(tsx|ts)?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        query: {
                            sourceMap: true,
                        }
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([?]?.*)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true
    },
    plugins: [
        new FaviconsWebpackPlugin(path.resolve(__dirname, '../', 'src/assets/logo.png')),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'src/html/index.html'),
            title: 'React Starter - Development Environment',
            filename: path.resolve(__dirname, '../', 'src/index.html'),
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new DashboardPlugin()
    ]
});