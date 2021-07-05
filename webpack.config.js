const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    // entry: "./src/index11.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // webpack生成代码的兼容性配置项
        environment: {
            //禁用webpack生成箭头函数
            arrowFunction: false,
            // const: false
        }
    },
    // webpack 打包不同步模块需要的配置
    module: {
        rules: [
            {
                test: /\.ts$/,
                // use: 'ts-loader',
                // 多个loader，是倒序执行的
                // 先交个ts-loader解析，然后把解析后的资源交给
                use: [
                    // 解决兼容性，添加babel-loader
                    // 'babel-loader',
                    // 只会处理模块中的兼容性问题，webpack打包过程中生成的代码兼容性无法在此处理，需要配置webpack的兼容性：output.environment
                    {   // 详细配置一个loader
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        // 兼容到具体的浏览器及版本
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本（主版本）
                                        "corejs": "3",
                                        // 使用corejs的方式  usage：按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader' // 简单配置一个loader
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss解决兼容问题
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env", // 插件
                                        {
                                            browsers: "last 2 versions" // postcss-preset-env 配置
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: '自定义网页title标签的内容'
        // })
        new HtmlWebpackPlugin({
            //指定模板
            template: path.resolve(__dirname, 'index.html')
        }),
        //清楚webpack缓存
        new CleanWebpackPlugin()
    ],
    // 设置模块引用
    resolve: {
        /* 
        extensions: ['.ts', '.js']

        ts、js文件可以import引用，如果不设置，则ts文件模块无法import使用

        默认以.js、.json、.wasm、目录来解析
            .js
                Field 'browser' doesn't contain a valid alias configuration
                D:\projects\webpro2021\typescript_study\src\app.js doesn't exist
            .json
                Field 'browser' doesn't contain a valid alias configuration
                D:\projects\webpro2021\typescript_study\src\app.json doesn't exist
            .wasm
                Field 'browser' doesn't contain a valid alias configuration
                D:\projects\webpro2021\typescript_study\src\app.wasm doesn't exist
            as directory
                D:\projects\webpro2021\typescript_study\src\app doesn't exist
        */
        extensions: ['.ts', '.js']
    }
}