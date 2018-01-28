/* global require, __dirname, module */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const path = require('path');
const ALLOWED_MOMENT_LANGUAGES = ['de', 'en'];

module.exports = (env) => ({
    entry: [
        './src/app.tsx'
    ],
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/dist',
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
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(tsx|ts)?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        query: {
                            sourceMap: false,
                            inlineSourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(scss|gif|png|jpe?g|svg)$/,
                loader: 'null-loader'
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([?]?.*)$/,
                use: 'null-loader'
            },
            {
                enforce: 'post',
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                },
                include: path.resolve(__dirname, '../', 'src/'),
                exclude: [
                    path.resolve(__dirname, '../', 'src/i18next.ts'),
                    /\.(e2e|spec)\.(ts|tsx)$/,
                    /src\/test-utils/,
                    /node_modules/
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new ContextReplacementPlugin(/moment[\/\\]locale$/, new RegExp(ALLOWED_MOMENT_LANGUAGES.join('|'))),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ]
});