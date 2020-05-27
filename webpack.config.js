/* eslint-disable import/no-unresolved */
const webpack = require('webpack');
const path = require('path');
const packageInfo = require('./package.json');

module.exports = {
    mode: 'production',
    entry: {
        app: [
            './src/index.jsx',
        ],
        library: [
            './lib/lyra-library/index.js',
        ],
    },
    output: {
        filename: '[name].lyra.bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                browsers: 'last 2 versions',
                            },
                        }],
                        '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-transform-runtime',
                            'react-hot-loader/babel',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        allowedHosts: [
            '.mhuttner.com',
        ],
        contentBase: path.join(__dirname, 'dist'),
        port: 8089,
        index: path.join(__dirname, 'dist', 'index.html'),
        hot: true,
        proxy: {
            '/api': 'http://localhost:8080',
        },
        historyApiFallback: true,
    },

    optimization: {
        namedChunks: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.version': JSON.stringify(packageInfo.version),
            'process.env.apipath': JSON.stringify(process.env.API_PATH),
        }),
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'lib'),
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.js', '.jsx'],
    },
};
