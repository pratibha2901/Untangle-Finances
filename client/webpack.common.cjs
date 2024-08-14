
const path = require("path")
const toml = require('toml');
const json = require('json5');
const yaml = require('yamljs');
const htmlWebpackPlugin = require('html-webpack-plugin');
// webpack-dev-server serves bundled files from the directory defined in output.path, i.e., files will be available under http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename].
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/UntangleFinances',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],

            },
            {
                test: /\.([cm]?ts|tsx)$/,
                use: ['ts-loader'],

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader']
            },
            {
                test: /\.(xml)$/i,
                use: ['xml-loader']
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json.parse
                }
            }



        ]



    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, 'public', 'index.html'),
            path: path.resolve(__dirname, 'build')
        })
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }

        }
    }

}


