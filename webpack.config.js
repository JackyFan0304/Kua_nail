const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 開發模式
    entry: './src/main.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包後的文件名
        path: path.resolve(__dirname, 'dist'), // 輸出路徑
        clean: true, // 每次打包前清空 dist 目錄
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm-bundler.js', // 使用完整版的 Vue
            '@': path.resolve(__dirname, 'src') // 設置 @ 為 src 目錄的別名
        },
        extensions: ['.js', '.vue', '.json', '.scss'], // 添加 .scss 擴展名
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 處理 .vue 文件
                loader: 'vue-loader'
            },
            {
                test: /\.js$/, // 處理 .js 文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/, // 處理 CSS 文件
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, // 處理 SCSS 文件
                use: ['style-loader', 'css-loader', 'sass-loader'] // 添加 sass-loader 支持
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/, // 處理圖片文件格式
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 設置大小限制，超過此大小將使用 file-loader
                            fallback: {
                                loader: 'file-loader', // 超過限制時使用 file-loader
                                options: {
                                    name: '[path][name].[ext]', // 保留原始路徑和文件名
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 使用的 HTML 模板
            filename: 'index.html', // 輸出的 HTML 文件名
            title: 'Kua Nail', // 設置標題
        }),
        new VueLoaderPlugin(), // 必須添加的插件，用於處理 Vue 文件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // 或 'production'
            '__VUE_OPTIONS_API__': 'true', // 根據需要設置
            '__VUE_PROD_DEVTOOLS__': 'false' // 根據需要設置
        })
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public'),
            },
            {
                directory: path.join(__dirname, 'src/assets/images'),
            }
        ],
        compress: true,
        port: 9000,
    }
}