# 安装和使用

## :heavy_plus_sign: 安装

I-Algorithms中的JavaScript实现汇成了一套[API](/api)并发布成了库包，具体安装如下：

``` javascript
npm i i-algorithms
```

## :rocket: 使用

I-Algorithms的实现参考了[Lodash](https://github.com/lodash/lodash)的结构，考虑到引入体积问题，不提供整体的引入方式，使用者可以针对具体的算法API进行单独引入：

``` javascript
// 引入插入排序
const insertionSort = require('i-algorithms/insertion-sort')
insertionSort([1,4,8,1,2,2,3])
```


> 更多关于I-Algorithms的使用可查看[API](/api)。