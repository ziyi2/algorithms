### 分析算法习题

#### `问题1`

***

用$\theta$记号表示函数${n^3 \over 1000} - 100n^2 - 100n + 3 $。

#### `答案`
$\theta(n^3)$


#### `问题2`

***

考虑排序存储在`A`中的`n`个数：首先找出`A`中的最小元素并将其与`A[0]`中的元素进行交换。接着，找出`A`中的次最小元素并将其与`A[1]`进行交换。对`A`中前`n-1`个元素按该方式继续。该算法称为**选择算法**，写出其伪代码。该算法维持的循环不变式是什么？为什么它只需要对前`n-1`个元素，而不是对所有`n`个元素运行？用$\theta$记号给出选择排序的最好运行时间和最坏情况运行时间。


#### `答案`

``` javascript
function selectionSort(arr) {
  let array = [...arr],
      length = array.length,
      minIndex,
      template

  // 这里最后一个元素不需要再排序
  for(let i=0; i<length-1; i++) {

    minIndex = i
    
    for(let j=i+1; j<length; j++) {
      if(array[minIndex] < array[j]) continue
      minIndex = j
    }

    template = array[i]
    array[i] = array[minIndex]
    array[minIndex] = template
  }

  return array
}
```

**循环不变式**：在外部`for循环`开始之前的子数组`array[0]~array[i-1]`由数组`array[0]~array[n]`中的`i-1`个最小元素组成，并且这些元素已经排好序，因此`array[0]~array[i-1]`是循环不变式。

注释代码所在的循环并没有将最后一个元素包括在内，是因为当循环到`n-1`个元素的时候，`array[0]~array[n-1]`是`n`个元素中的`n-1`个最小元素组成，因此第`n`个元素就是最大的元素，不需要进行数组的任何操作。

跟**插入排序**不同，**选择排序**不管在最佳情况下还是最坏情况下获取剩余数组的最小元素都需要进行完全遍历，没有任何循环只需要执行一次的情况，因此运行时间都是$\theta(n^2)$。


#### `问题3`
***

再次考虑[线性查找问题](https://github.com/ziyi2/algorithms-javascript/blob/master/doc/algorithms-base/insertion-sort-exercise.md#%E9%97%AE%E9%A2%982)，假设要查找的元素等可能地为数组中的任意元素，平均需要检查输入数组的多少元素？最坏情况如何？用$\theta$记号给出平均情况和最坏情况的运行时间。

#### `答案`

**平均情况**：$(n+1) \over2$

**最坏情况**：$n$ 

由于等可能地为任意元素，因此每个元素是`v`的概率为$1\over n$，那么需要检查的平均情况为

$$ {1\over n} \sum\limits_{i=1}^{n}i = {{n+1} \over 2}$$

因此平均情况运行时间为$\theta(n)$，最坏情况运行时间为$\theta(n)$。


#### `问题4`

***

应如何修改任何一个算法，才能使之具有良好的最佳情况运行时间。

#### `答案`

算法开始检测输入数据，若符合特殊条件则输出事先计算好的结果。例如只排序只有一个元素数组的情况下，可以直接输出该数组。