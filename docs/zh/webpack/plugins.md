# 常用插件

## html-webpack-plugin 插件

    html-webpack-plugin自动生成index.html文件，并加载bundle.js

    npm install -D html-webpack-plugin

    并在webpack.config.js中配置
        ...
        plugins: [
            new HtmlWebpackPlugin()
        ]
        ...

    生成的html文件/dist/index.html

        <!doctype html>
            <html>

            <head>
                <meta charset="utf-8">
                <title>Webpack App</title>
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <script defer="defer" src="bundle.js"></script>
            </head>

            <body></body>

        </html>

## webpack-dev-server 插件

    npm install -D webpack-dev-server

    修改package.json，添加start命令

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "start": "webpack serve --open chrome.exe"
    },

    cmd执行npm start，自动创建并启动一个服务dist目录的开发服务器

## clean-webpack-plugin 插件

    npm install -D clean-webpack-plugin

    清空上次打包生成的文件，避免文件版本问题

    修改webpack.config.js

        ...
        plugins: [
            ...
            //清楚webpack缓存
            new CleanWebpackPlugin()
            ...
        ]
        ...

## 兼容插件@babel/core @babel/preset-env babel-loader core-js

    npm install - D @babel/core @babel/preset-env babel-loader core-js

    需要考虑兼容低版本浏览器时使用

    @babel/core         核心
    @babel/preset-env   预设环境
    babel-loader        配合webpack
    core-js             配合webpack，提供fallback方案，当preset-env预设的环境不支持某些功能时，会使用core-js提供的方案

    修改webpack.config.js，添加babel-loader配置

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
                ]
            }
        ]

## less less-loader css-loader style-loader

    npm install -D less less-loader css-loader style-loader

    less less-loader    配合webpack编译less语法代码
    css-loader          处理css代码
    style-loader        将编译输出的css通过style标签注入到html中

    修改webpack.config.js 添加style-loader css-loader less-loader
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.less$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "less-loader",
                    ]
                }
            ]
        }
        ...

## postcss postcss-loader postcss-preset-env

    npm install -D postcss postcss-loader postcss-preset-env

    postcss postcss-loader  配合webpack解决css兼容性问题
    postcss-preset-env      预设要兼容的目标环境

    修改webpack.config.js 添加postcss-loader
        ...
        module: {
            rules: [
                ...
                {
                    test: /\.less$/,
                    use: [
                        "style-loader",
                        "css-loader",
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
        }
        ...

        注入html中的css 具有兼容前缀

            body {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                background: #fba;
            }

## webpack 打包生成的代码的兼容性问题解决

    修改webpack.config.js，配置output.environment

        output: {
            path: path.resolve(__dirname, "dist"),

            filename: "bundle.js",

            // webpack生成代码的兼容性配置项
            environment: {
                //禁用webpack生成箭头函数
                arrowFunction: false
            }
        }
