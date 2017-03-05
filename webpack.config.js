/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.2.6 05.03.17
 * @since 2.2.6
 */

/**
 * dev Dependencies:
 *
 * babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime webpack
 * vue css-loader vue-loader vue-template-compiler
 *
 */

/**
 * .babelrc
 *
 * {
 *   "presets": ["es2015", "stage-0"],
 *   "plugins": ["transform-runtime"]
 * }
 */
'use strict';

const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        })
    ]
};
