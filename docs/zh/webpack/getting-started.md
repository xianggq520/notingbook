# 入门

1. 初始化 package.json
 
    <code-group>
    <code-block title="YARN" active>
    ```bash
    yarn init
    ```
    </code-block>

    <code-block title="NPM">
    ```bash
    npm init
    ```
    </code-block>
    </code-group>

2. 安装依赖

    <code-group>
    <code-block title="YARN" active>
    ```bash
    yarn add -D webpack webpack-cli typescript ts-loader
    ```
    </code-block>

    <code-block title="NPM">
    ```bash
    npm install -D webpack webpack-cli typescript ts-loader
    ```
    </code-block>
    </code-group>

    typescript ts-loader 负责编译和打包.ts文件

3. 创建 webpack 配置文件 webpack.config.js

    webpack.config.js用于配置webpack打包参数

4. 创建 typescript 配置文件 tsconfig.json

    tsconfig.json配置typescript编译预设项

5. 添加 package.json scripts

    ```json
    {
        "scripts": {
            "start": "webpack serve",
            "build": "webpack"
        }
    }
    ```

6. 启动

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

