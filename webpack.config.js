var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

var webpack = require('webpack');
var path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        bundle1: './main1.js',
        bundle2: './main2.js',
        bundle3: './main3.js',
        bundle4: './main4.js',
    },
    output: {
        filename: '[name].[chunkhash:7].js', //输出文件名  hash部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', //设置公开路径  影响资源加载的路径
        library: 'wwwwwwwwwww',
        libraryTarget: 'window',
        auxiliaryComment: 'test comment',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack111://[namespace]/[resource-path]?[loaders]',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]',
                        },
                    },
                ],
            },
            //< 8.192K 则 url-loader将图片转成base64。大于这个大小的图片将会以file-loader的方式进行打包处理
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new UglifyjsWebpackPlugin(),
        new CleanWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({
            test: /\.(css|js)/,
            filename: '[file].map',
            exclude: ['vendor.js'],
            moduleFilenameTemplate: 'webpack111://[namespace]/[resource-path]?[loaders]',
        }),
    ],
};
