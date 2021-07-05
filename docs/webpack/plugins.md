# 插件

## webpack-dev-server

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D webpack-dev-server
```
</code-block>

<code-block title="NPM">
```bash
npm install -D webpack-dev-server
```
</code-block>
</code-group>

**2. 配置 package.json，添加 start 命令**

```json{3}
"scripts": {
    "build": "webpack",
    "start": "webpack serve"
}
```

**3. 如何启动 dev server**

<code-group>
<code-block title="YARN" active>
```bash
yarn start
```
</code-block>

<code-block title="NPM">
```bash
npm start
```
</code-block>
</code-group>

## html-webpack-plugin

html-webpack-plugin 可以自动生成 index.html 文件，并注入加载 bundle.js 的 script 标签

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D html-webpack-plugin
```
</code-block>

<code-block title="NPM">
```bash
npm install -D html-webpack-plugin
```
</code-block>
</code-group>

**2. webpack.config.js 中配置**

```js{3}
module.exports = {
  //...
  plugins: [new HtmlWebpackPlugin()],
  //...
};
```

**3. 效果**

html-webpack-plugin 生成的 html 文件/dist/index.html，并注入了 bundle.js

```html{7}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Webpack App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <script defer="defer" src="bundle.js"></script>
  </head>

  <body></body>
</html>
```

## clean-webpack-plugin

清空上次打包生成的文件，避免文件版本问题

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D clean-webpack-plugin
```
</code-block>

<code-block title="NPM">
```bash
npm install -D clean-webpack-plugin
```
</code-block>
</code-group>

**2. 配置 webpack.config.js**

```js{4}
plugins: [
  //...
  //清楚webpack缓存
  new CleanWebpackPlugin(),
  //...
];
```

## babel & babel-loader

需要考虑兼容低版本浏览器时使用，主要依赖 babel-loader 来转换代码<br>
@babel/core @babel/preset-env babel-loader core-js<br>

@babel/core 核心<br>
@babel/preset-env 预设环境<br>
babel-loader 配合 webpack<br>
core-js 配合 webpack，提供 fallback 方案，当 preset-env 预设的环境不支持某些功能时，会使用 core-js 提供的方案

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D @babel/core @babel/preset-env babel-loader core-js
```
</code-block>

<code-block title="NPM">
```bash
npm install -D @babel/core @babel/preset-env babel-loader core-js
```
</code-block>
</code-group>

**2. 配置 webpack.config.js，添加 babel-loader 配置**

```js
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
      {
        // 详细配置一个loader
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                // 兼容到具体的浏览器及版本
                targets: {
                  chrome: "88",
                  ie: "11",
                },
                //指定corejs的版本（主版本）
                corejs: "3",
                // 使用corejs的方式  usage：按需加载
                useBuiltIns: "usage",
              },
            ],
          ],
        },
      },
      "ts-loader", // 简单配置一个loader
    ],
  },
];
```

## css loader

less less-loader 配合 webpack 编译 less 语法代码<br>
css-loader 处理 css 代码<br>
style-loader 将编译输出的 css 通过 style 标签注入到 html 中

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D less less-loader css-loader style-loader
```
</code-block>

<code-block title="NPM">
```bash
npm install -D less less-loader css-loader style-loader
```
</code-block>
</code-group>

**2.配置**

修改 webpack.config.js 添加 style-loader css-loader less-loader

```js
module: {
  rules: [
    {
      test: /\.less\$/,
      use: ["style-loader", "css-loader", "less-loader"],
    },
  ];
}
```

## css 兼容性处理

postcss postcss-loader 配合 webpack 解决 css 兼容性问题<br>
postcss-preset-env 预设要兼容的目标环境

**1. 安装**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D postcss postcss-loader postcss-preset-env
```
</code-block>

<code-block title="NPM">
```bash
npm install -D postcss postcss-loader postcss-preset-env
```
</code-block>
</code-group>

**2.配置**

修改 webpack.config.js 添加 postcss-loader

```js
module: {
  rules: [
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
                    browsers: "last 2 versions", // postcss-preset-env 配置
                  },
                ],
              ],
            },
          },
        },
        "less-loader",
      ],
    },
  ];
}
```

**3.效果**

注入 html 中的 css 具有兼容前缀

```css
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fba;
}
```

## webpack 模块加载器兼容性

**1.配置**

修改 webpack.config.js，配置 output.environment

```js
output: {
  // webpack生成代码的兼容性配置项
  environment: {
    //禁用webpack生成箭头函数
    arrowFunction: false;
  }
}
```
