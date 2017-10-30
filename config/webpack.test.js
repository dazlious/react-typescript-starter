/* global require, __dirname, module */
const DefinePlugin = require("webpack/lib/DefinePlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

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
                test: /\.(tsx|ts)?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'null-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new ContextReplacementPlugin(/moment[\/\\]locale$/, new RegExp(ALLOWED_MOMENT_LANGUAGES.join('|'))),
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ]
});