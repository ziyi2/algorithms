### 归并排序习题

#### `问题1`

***

重写**归并排序**，使之不使用哨兵值，而是一旦数组**A**或**B**的所有元素均被复制回原数组就立刻停止，把另一个数组的剩余元素复制回原数组。

#### `答案`

``` javascript
function merge(arr, leftStart, leftEnd, rightEnd) {
  let leftNum = leftEnd - leftStart + 1,
      rightNum = rightEnd - leftEnd,
      lefts = [],
      rights = [],
      i,j

  for(i=0; i<leftNum; i++) {
    lefts[i] = arr[leftStart+i]
  }

  for(j=0; j<rightNum; j++) {
    rights[j] = arr[leftEnd+1+j]
  }

  i = 0
  j = 0

  for(let k = leftStart; k<=rightEnd; k++) {
    // 无精简
    // if(i === lefts.length) {
    //   arr[k] = rights[j++]
    // } else if(j === rights.length) {
    //   arr[k] = lefts[i++]
    // } else {
    //   arr[k] = lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
    // }

    // 精简1
    // if(j === rights.length) {
    //   arr[k] = lefts[i++]
    // } else {
    //   // undefined < 或 > 任意值都是false
    //   // 如果 i === lefts.length
    //   // 即lefts[i] = undefined，那么会走else
    //   arr[k] = lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
    // }

    // 精简2
    // if(j === rights.length || lefts[i] <= rights[j]) {
    //   arr[k] = lefts[i++]
    // } else {
    //   arr[k] = rights[j++]
    // }
    arr[k] = j === rights.length || lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
  }
 }

 function mergeSort(arr, start, end) {
  if(start < end) {
    let division = Math.floor((start + end)/2)
    mergeSort(arr, start, division)
    mergeSort(arr, division + 1, end)
    merge(arr, start, division, end)
  }
 }
```

> 在`javascript`里在不使用API或者循环的情况下没有复制剩余数组的操作，因此这道题的解法可能与题目不是特别相符合。


#### `问题2`

***

使用数学归纳法证明：当$n$刚好是$2$的幂时，以下递归式的解是$T(n) = nlgn $。

$$ T(n) = \begin{cases} 2 & 若n = 2（公式1） \\\\ 2T({ n \over 2}) + n	& 若n = 2^k，k > 1 （公式2）\end{cases}  $$

#### `答案`

数学归纳法：

$n = 2^k$

当$k = 1，n = 2$时，$T(2) = 2 = nlgn = 2^1lg2^1$，因此公式1满足

假设$n = 2^k$时，$T(2^k) = 2^k lg 2^k  $，

那么当$ n = 2^{k+1}$时，

$$   T(n) = 2T({ n \over 2}) + n$$

$$T(2^{k+1}) =    2T({2^{k+1} \over 2}  ) + 2^{k+1}  $$
$$ = 2T(2^k)  + 2^{k+1}  $$
$$ = 2* 2^{k} lg 2^k  + 2^{k+1} $$
$$ = 2^{k+1}( lg 2^k  + 1) $$
$$ = 2^{k+1}( lg 2^k  + lg2) $$
$$ = 2^{k+1}lg 2^{k+1} $$

因此公式2满足，$T(n) = nlgn $是递归式的解。


#### `问题3`

***

把**插入排序**表示为一个递归过程，为了排序`A[1...n]`，我们递归地排序`A[1...n-1]`，然后把`A[n]`插入到已排序的数组`A[1...n-1]`。写出这个递归程序的`javascript`实现，并为这个**插入排序**的递归版本给出一个最坏情况运行时间的递归式。

#### `答案`

``` javascript
function insertion(arr, length) {
  let key = arr[length],
      j = length - 1

  while(j>=0 && key<arr[j]) {
    arr[j + 1] = arr[j--]
  }

  arr[j + 1] = key
} 

function insertionSort(arr, length) {
  if(length <=0 ) return
  insertionSort(arr, length - 1)
  insertion(arr, length)
}
```


**递归式**：

$$ T(n) = \begin{cases}c & 若n = 1 \\\\ T({ n -1}) +c(n-1)	& 若n > 1 \end{cases}  $$


#### `问题4`

***

回顾[线性查找问题](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/insertion-sort-exercise.md#%E9%97%AE%E9%A2%982)，如果序列`A`已经排好序，就可以将该序列的中点与`v`进行比较。根据比较结果，原序列中有一半就可以不用再做进一步的考虑了。**二分查找**算法重复这个过程，每次都将序列剩余部分的规模减半。为**二分查找**写出迭代或递归的`javscript`代码。证明：二分查找的最坏情况运行时间为$\theta(lgn)$。

#### `答案`

**递归一**：

``` javascript
function binRecursionSearch(arr, v, start, end) {
  let middle = Math.floor((start + end)/2)

  if(end === 0 || start === arr.length - 1) {
    return -1
  }

  if(arr[middle] === v) {
    return middle
  } else if(arr[middle] > v) {
    return binRecursionSearch(arr, v, start, middle)
  } else {
    return binRecursionSearch(arr, v, middle, end)
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10]
binRecursionSearch(arr, 11, 0, arr.length)
```

**递归二**：

``` javascript
function binRecursionSearch1(arr, v, start, end) {
  let middle = Math.floor((start + end)/2)

  if(arr[middle] === v) {
    return middle
  } else if(start >= end) {
    return -1
  } else if(arr[middle] > v) {
    return binRecursionSearch(arr, v, start, middle - 1)
  } else {
    return binRecursionSearch(arr, v, middle + 1, end)
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10]

// 最后传入的参数不同
binRecursionSearch(arr, 11, 0, arr.length -1)
```

**迭代**：

``` javascript
function binIterationSearch(arr, v) {

  let start = 0,
      end = arr.length -1,
      middle

  // 这里也可以将start === end单独拿出来处理
  while(start <= end) {
    middle = Math.floor((start + end) / 2)
    
    if(arr[middle] === v) {
      return middle
    } else if(arr[middle] > v) {
      end = middle - 1
    } else if(arr[middle] < v) {
      start = middle + 1
    }
  }

  return -1
}
```


证明：二分查找的最坏情况运行时间为$\theta(lgn)$：

这里我们以**递归式一**(自己写的代码，如有不妥请随意指出)为例，来说明二分查找的最坏情况运行时间，首先[分治法](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/merge-sort.md#31-%E5%88%86%E6%B2%BB%E7%AE%97%E6%B3%95%E7%9A%84%E5%88%86%E6%9E%90)的默认**递归式**如下：

$$ T(n) = \begin{cases}\theta(1) & 若n \le c  \\\\ aT({ n \over b }) + D(n) + C(n)	& 其他			\end{cases}  $$

在**二分法**中，分解问题是计算数组的中间位置，因此$D(n)=\theta(1)$，解决子问题需要$T({n \over 2})$的运行代价，这里不需要做合并操作，因此$C(n)=0$，因此**递归式**如下：


$$ T(n) = \begin{cases}c & 若n = 1  \\\\ T({ n \over 2 }) + c	& 若n > 1			\end{cases}  $$

在[归并排序](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/merge-sort.md#31-%E5%88%86%E6%B2%BB%E7%AE%97%E6%B3%95%E7%9A%84%E5%88%86%E6%9E%90)中我们已经清楚将问题一分为二需要分解$lgn$次子问题，每次解决子问题的代价是c，那么加上顶层的代价，总代价为：

$$T(n) = clgn + c$$

因此**二分法**的运行时间为$\theta(lgn)$。



#### `问题5`

***

[插入排序](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/insertion-sort.md#1-%E7%AE%97%E6%B3%95%E8%AF%B4%E6%98%8E)的最坏情况的[运行时间分析](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/algorithms-analyse.md#3-%E5%A2%9E%E9%95%BF%E9%87%8F%E7%BA%A7)是$\theta(n^2)$，其中寻找插入位置采用如下代码中第6行的`while`循环反向线性查找已排好序的数组`array[1...j-1]`，如果要对改算法进行优化，我们可以采用[问题4](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/merge-sort-exercise.md#%E9%97%AE%E9%A2%984)的**二分查找**来优化这个线性查找的过程，写出`javascript`代码的实现，并求出该算法的最坏运行时间。


``` javascript
function insertionSort(arr) {
  // 1
  let array = [...arr] 
  // 2
  let key, i
  // 3
  for(let j = 1; j <= array.length - 1; ++j) {
    // 4
    key = array[j]
    // 5
    i = j - 1
    // 6
    while(i >= 0 && array[i] > key) {
      // 7
      array[i + 1] = array[i]
      // 8
      -- i
    }
    // 9
    array[i + 1] = key
  }
  // 10
  return array
}
```


#### `答案`


