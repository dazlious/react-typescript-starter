/* global require, __dirname, module */
const DefinePlugin = require("webpack/lib/DefinePlugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

const path = require("path");

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
                test: /\.(tsx|ts)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
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
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new DashboardPlugin()
    ]
});