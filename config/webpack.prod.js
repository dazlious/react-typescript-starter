/* global require, __dirname, module */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');
const ALLOWED_MOMENT_LANGUAGES = ['de', 'en'];

module.exports = (env) => ({
    entry: [
        './src/app.tsx'
    ],
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
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
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        query: {
                            sourceMap: false,
                            inlineSourceMap: false
                        }
                    }
                ],
                exclude: [/\.(spec)\.(ts|tsx)$/, /node_modules/]
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
                test: /\.(eot|ttf|woff2?|otf|svg)$/,
                loader: 'url-loader?limit=1&publicPath=/&name=./assets/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin(path.resolve(__dirname, '../', 'src/assets/logo.png')),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'src/html/index.html'),
            title: 'React Starter',
            filename: path.resolve(__dirname, '../', 'dist/index.html'),
        }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new ContextReplacementPlugin(/moment[\/\\]locale$/, new RegExp(ALLOWED_MOMENT_LANGUAGES.join('|'))),
        new UglifyJsPlugin(),
        new OccurrenceOrderPlugin(),
        new BundleAnalyzerPlugin({
            reportFilename: path.resolve(__dirname, '../', '_webpack-report.html'),
            analyzerMode: 'static',
            openAnalyzer: false
        })
    ]
});