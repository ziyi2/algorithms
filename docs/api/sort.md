# 排序

## `insertionSort` <Badge text="1.0.0+"/>

``` javascript
insertionSort(array, [customComparator])
```

#### 描述

**插入排序**：对数组`array`进行插入排序，并返回一个排好序的新数组。

#### 参数

- `array(Array)`：必须，待排序的数组
- `customComparator(Function)`：可选，自定义比较方法

#### 返回

`(Array)`：排好序的新数组

#### 示例

``` javascript
import insertionSort from 'i-algorithms/insertion-sort'

insertionSort(['aa', 'a', 'aaa'], (a, b) => {
  if (a.length === b.length) {
    return 0
  }
  return a.length < b.length ? -1 : 1
})

// => ['a', 'aa', 'aaa']
```
