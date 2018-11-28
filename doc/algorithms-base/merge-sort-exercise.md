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