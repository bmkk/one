
## webpack教程
     使用webpack，需要先安装Node.js，再安装webpack，然后才能在项目中使用
#### Node.js 安装
    官网下载安装nodejs，安装完成后可以运行命令查看版本：  
    node -v  
    考虑到最佳的ES6特性实现，建议node版本可以升级到V8.9.4或以上版本
## webpack---安装
#### 一、首先：全局安装 webpack
    npm install -g webpack

#### 二、在项目使用中 webpack
##### 1、新建一个项目目录，进入目录后，执行：
    npm init 
    控制台会提示输入项目的名称、版本、描述、作者等信息，如果不准备在npm中发布你的模块，这些答案都不重要，一直回车默认就可以。之后就会在该目录下出现一个package.json文件，打开文件可以看到刚才提示要输入的信息（没有输入就是空值）：
``` js
{
    "name": "example",
    "version": "1.0.0",
    "description": "for introduction",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "lynnshen",
    "license": "ISC"
}  
``` 
##### 2、项目中安装webpack
    运行命令：  
    npm install --save-dev webpack 
    可以看到package.json中，devDependencies中有了webpack，版本号：4.**.*
``` js
	 {
      "name": "example",
      "version": "1.0.0",
      "description": "for introduction",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
      "author": "lynnshen",
      "license": "ISC",
      "devDependencies": {
        "webpack": "^4.**.*"
    }
}
```  
#### npm安装注意两点：
     (1)安装时如未指定版本号，则按最新的版本安装，这里webpack安装的是最新的版本
     (2)npm install --save和npm install --save-dev的区别：  
      --save 会把依赖包名称添加到 package.json 文件 dependencies 键下，  
      --save-dev 则添加到 package.json 文件 devDependencies 键下。  
      dependencies是发布后还依赖的devDependencies是开发时的依赖。
##### 3、项目中安装webpack-cli：
    注意：如果安装的是webpack v4+版本，则还需要安装webpack-cli或者webpack-command，否则webpack命令运行不了。  
    执行：  
        npm uninstall webpack-cli  //卸载本地安装的webpack-cli  
        npm install -g webpack-cli  //全局安装webpack-cli  
        npm install --save-dev webpack-cli //把webpack-cli安装到devDependencies  
这里webpack-cli 是先全局安装，再执行 --save - dev 项目中安装后，可以看到package.json中增加webpack - cli：
``` js
{
    "name": "example",
    "version": "1.0.0",
    "description": "for introduction",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "lynnshen",
    "license": "ISC",
    "devDependencies": {
        "webpack": "^4.17.1",
        "webpack-cli": "^3.1.0"
    }
}
```
##### 3、配置项目的基本目录结构
    在项目的根目录写创建文件夹 src和dist文件夹，src里面的目录结构又如下：
    + node_modules
    + dist
    + src
      - imgs  //图片文件夹
      - csss  //css文件夹
      - main.js
    +package.json
    ...
##### 4、编写项目的webpack配置文件 -- webpack.config.js
    在项目根目录添加Webpack的配置文件 webpack.config.js
        在Webpack配置文件里面配置处理的入口文件和输出文件
        配置完成之后，即可在调试台通过 webpack命令来对文件进行处理
        --新建webpack.config.js，内容是：
```js
    const path = require('path')
    module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    }
}
```