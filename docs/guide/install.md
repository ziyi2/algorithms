# 安装和使用

## :heavy_plus_sign: 安装

algorithms-utils 中的 TypeScript 实现汇成了一套 [API](/algorithms/api/_comparator) 并发布成了库包，具体安装如下：

```javascript
npm i algorithms-utils --save
```

## :rocket: 使用

algorithms-utils 的实现参考了 [Lodash](https://github.com/lodash/lodash) 的结构，考虑到引入体积问题，不提供整体的引入方式，使用者可以针对具体的算法 API 进行单独引入：

```javascript
// 引入插入排序
const insertionSort = require("algorithms-utils/insertion-sort");
insertionSort([1, 4, 8, 1, 2, 2, 3]);
```

> 更多关于 algorithms-utils 的使用可查看 [API](/algorithms/api/_comparator)。
