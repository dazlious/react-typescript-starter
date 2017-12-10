/* global require, __dirname, module */
const DefinePlugin = require("webpack/lib/DefinePlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
const OccurrenceOrderPlugin = require("webpack/lib/optimize/OccurrenceOrderPlugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");
const ALLOWED_MOMENT_LANGUAGES = ['de', 'en'];

module.exports = (env) => ({
    entry: [
        "./src/app.tsx"
    ],
    output: {
        path: path.resolve(__dirname, "../", "dist"),
        publicPath: '/dist',
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "js": path.resolve(__dirname, "../", "src/js/"),
            "scss": path.resolve(__dirname, "../", "src/scss/")
        }
    },
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    query: {
                        sourceMap: false,
                        inlineSourceMap: false
                    }
                }],
                exclude: [/\.(spec)\.(ts|tsx)$/, /node_modules/]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                },{
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new ContextReplacementPlugin(/moment[\/\\]locale$/, new RegExp(ALLOWED_MOMENT_LANGUAGES.join('|'))),
        new UglifyJsPlugin(),
        new OccurrenceOrderPlugin(),
        new BundleAnalyzerPlugin({
            reportFilename: path.resolve(__dirname, "../", "_webpack-report.html"),
            analyzerMode: 'static',
            openAnalyzer: false
        })
    ]
});