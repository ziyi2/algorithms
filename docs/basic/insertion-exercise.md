# :orange_book: 插入排序习题

::: danger 习题1
重写插入排序过程，使之按非升序排序。
:::

<template>
  <i-code desc="查看代码"></i-code>
</template>

``` javascript
function insertionSort (originalArray) {
  const array = [...originalArray]
  let currentElement, preIndex

  for (let i = 1; i < array.length; i++) {
    preIndex = i - 1
    currentElement = array[i]

    while (preIndex >= 0 && currentElement > array[preIndex])) {
      array[preIndex + 1] = array[preIndex--]
    }

    array[preIndex + 1] = currentElement
  }

  return array
}
```

::: danger 习题2
考虑查找问题：

输入：`n`个数的一个序列`A = [a1, a2, a3, ..., an]`和一个值`v`

输出：下标`i`使得`v = A[i]`或者`v`不在`A`中出现时，输出`null`

写出**线性查找**的JavaScript实现。
:::

<template>
  <i-code desc="查看代码"></i-code>
</template>

``` javascript
function linearSearch (array, search) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      return i
    }
  }
  return null
}
```

::: danger 习题3

考虑把两个`n`位二进制整数加起来的问题，这两个整数分别存储在两个`n`元数组`A`和`B`中。这两个整数的和应按二进制形式存储在一个`（n + 1）`元的数组`C`中，请给出该问题的形式化描述，并写出JavaScript实现。
:::


<template>
  <i-code desc="查看答案"></i-code>
</template>

::: tip 答案

形式化描述：

输入：  `A = [1, 1, 1, 1]`、`B=[0, 0, 1, 1]`

输出： `C = [1, 1, 0, 1, 1]`

$$\sum\limits_{i=1}^{n+1}C[i]*2^{i-1} = \sum\limits_{j=1}^{n}A[j]*2^{j-1} + \sum\limits_{k=1}^{n}B[k]*2^{k-1}$$ 

友情提示：$1111_{(2)}  =  15_{(10)}， 1100_{(2)}  =  12_{(10)}， 11011_{(2)}  =  27_{(10)}$
:::

<template>
  <i-code desc="查看代码"></i-code>
</template>

``` javascript
function addBinary (bin1, bin2) {
  const length = bin1.length > bin2.length ? bin1.length : bin2.length
  const bin = new Array(length + 1)
  let carry = 0
  let sum
  let i

  for (i = 0; i < length; i++) {
    bin1[i] |= 0
    bin2[i] |= 0
    sum = bin1[i] + bin2[i] + carry
    bin[i] = sum % 2
    carry = Math.floor(sum / 2)
  }

  bin[i] = carry
  return bin
}
```