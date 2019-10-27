/* global __dirname, require, module*/

const webpack = require('webpack');

const path = require('path');

let LIBRARY_NAME = 'kig';

let OUTPUT_FILE = LIBRARY_NAME + '.js';
let BUILD_MODE = 'development';

module.exports = env => {

    return {
        entry: __dirname + '/src/index.js',
        mode: BUILD_MODE,
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: OUTPUT_FILE,
            library: LIBRARY_NAME,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }]
        },
        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                path.resolve('./node_modules')

            ],
            extensions: ['.json', '.js']
        },
        plugins: []
    };
};
