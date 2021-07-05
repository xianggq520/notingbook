# 入门

**1. 初始化 package.json**

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

**2. 安装依赖**

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D webpack webpack-cli
```
</code-block>

<code-block title="NPM">
```bash
npm install -D webpack webpack-cli
```
</code-block>
</code-group>

**3. 创建 webpack 配置文件 webpack.config.js**

webpack.config.js 用于配置 webpack 打包参数

<<< @/webpack.config.js

**4. 添加 package.json scripts**

```json{1-6}
{
  "scripts": {
    "start": "webpack serve",
    "build": "webpack"
  }
}
```

**5. 启动**

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
