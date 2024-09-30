const path = require('path'); // 引入 path 模塊，用於處理路徑
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 用於生成 HTML 文件的插件
const { VueLoaderPlugin } = require('vue-loader'); // 用於處理 Vue 文件的插件
const webpack = require('webpack'); // 引入 Webpack 主體
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 用於提取 CSS 到單獨文件的插件

module.exports = {
    mode: 'development', // 設置模式為開發模式
    target: 'web', // 目標環境為 web
    externalsPresets: { node: true }, // 設置外部預設為 Node 環境
    entry: './src/main.js', // 設定入口文件
    output: {
        filename: 'bundle.js', // 打包後的文件名稱
        path: path.resolve(__dirname, 'dist'), // 設定輸出目錄
        clean: true, // 每次打包前清空 dist 目錄
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm-bundler.js', // 設定 Vue 的完整版本
            '@': path.resolve(__dirname, 'src') // 設定 src 目錄的別名
        },
        extensions: ['.js', '.vue', '.json', '.scss'], // 支持的檔案擴展名
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 處理 .vue 文件
                loader: 'vue-loader' // 使用 vue-loader 處理
            },
            {
                test: /\.js$/, // 處理 .js 文件
                exclude: /node_modules/, // 排除 node_modules 目錄
                use: {
                    loader: 'babel-loader', // 使用 babel-loader 進行轉譯
                }
            },
            {
                test: /\.css$/, // 處理 .css 文件
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // 使用 MiniCssExtractPlugin 提取 CSS
            },
            {
                test: /\.scss$/, // 處理 .scss 文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // 使用 sass-loader 支持 SCSS
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/, // 處理圖片格式
                use: [
                    {
                        loader: 'url-loader', // 使用 url-loader
                        options: {
                            limit: 8192, // 設定大小限制，小於此大小會轉換成 base64
                            fallback: {
                                loader: 'file-loader', // 超過限制時使用 file-loader
                                options: {
                                    name: '[path][name].[ext]', // 保留原始路徑和文件名
                                }
                            }
                        }
                    },
                    'image-webpack-loader' // 使用 image-webpack-loader 進行圖片壓縮
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 使用的 HTML 模板
            filename: 'index.html', // 輸出的 HTML 文件名
            title: 'Kua Nail', // 設定頁面標題
        }),
        new VueLoaderPlugin(), // 必須添加的插件，用於處理 Vue 文件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // 設定環境變量
            '__VUE_OPTIONS_API__': 'true', // 啟用 Vue 選項 API
            '__VUE_PROD_DEVTOOLS__': 'false' // 禁用 Vue 生產環境的開發工具
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // 輸出的 CSS 文件名
            chunkFilename: '[id].css', // 區塊的 CSS 文件名
        }),
    ],
    devtool: 'inline-source-map', // 在開發模式下啟用 source maps
    devServer: {
        static: [
            {
															 
			  
			 
                directory: path.join(__dirname, 'src/assets/images'), // 設定靜態資源的目錄
            }
        ],
        compress: true, // 啟用 gzip 壓縮
        port: 9000, // 設定開發伺服器的端口
    }
};
