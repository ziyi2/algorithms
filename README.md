<h2 align="center">Algorithms</h2>

I-Algorithms是基于《算法导论》衍生的一个Web前端学习文档。《算法导论》对于一些没有数学基础或者已经忘了数学知识的开发者而言学习相对困难，通过此学习文档希望能简化《算法导论》的一些理论知识，使的算法学习变得更加简单。在学习文档中，会使用JavaScript实现书中的一些算法，同时也会衍生一些书中没有的知识点，并寻找相应的面试题加以实践和说明。希望算法的学习不仅可以提升我们的编程能力，同时也有助于我们在各种面试中脱颖而出。


## 文档

I-Algorithms的文档地址：https://ziyi2.github.io/algorithms/

## 特性

- 简化《算法导论》的理论知识
- 文档支持Latex排版
- 文档配有深动形象的图例说明
- 使用JavaScript实现算法
- 章节会有配套的习题和面试题
- 提供API文档供开发者尝试使用
- 可在线撸猫

## 安装和使用

I-Algorithms中的JavaScript实现发布成了库包供开发者尝试使用，具体安装如下：

### 安装

``` javascript
npm i i-algorithms
```

### 使用

I-Algorithms的实现参考了[Lodash](https://github.com/lodash/lodash)的结构，考虑到引入体积问题，不提供整体的引入方式，使用者可以针对具体的算法API进行单独引入：

``` javascript
// 引入插入排序
const insertionSort = require('i-algorithms/insertion-sort')
insertionSort([1,4,8,1,2,2,3])
```

## 如何使用该仓库

###  克隆项目

克隆项目后切换到`dev`分支

``` javascript
git clone https://github.com/ziyi2/algorithms.git
```

### 安装依赖

``` javascript
npm install
```

### 运行ESLint

``` javascript
npm run lint
```

### 执行测试

会在`coverage`目录下生成测试覆盖率报告

``` javascript
npm test
```

### 启动静态网站

启动静态网站会开启ESLintr热校验

``` javascript
npm run dev
```

### 生成静态HTML文件

会在`.vuepress/dist`目录下生成静态资源包

``` javascript
npm run build
```

### 部署

生成静态HTML文件并更新到远程的`gh-pages`分支上

``` javascript
npm run deploy
```

### 构建npm包

``` javascript
npm run lib
```

### 生成日志

会在项目根目录下生成`CHANGELOG.md`日志文件

``` javascript
npm run changelog
```


## Pull Request

仓库中写出的JavaScript代码如果有可优化的空间，希望大家可以指正，可以通过提[issues](https://github.com/ziyi2/algorithms-javascript/issues)的形式告知，也可以通过pull request的形式，这里会对代码进行review，如果通过会合并大家的代码，也可能告诉大家为什么不能接受这样的修改，并最终关闭它。

在提交一个pull request之前，请确认你按照以下的步骤来做：

- Fork the repository
- 基于dev分支进行修改
- 使用符合[cz](https://juejin.im/post/5cc4694a6fb9a03238106eb9)的commit，并且尽量清楚的进行描述
- 更新源码的同时更新相应的VuePress说明文档
- 确保你的代码通过了ESLint校验和单元测试
