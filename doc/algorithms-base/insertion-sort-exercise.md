### 插入排序习题

#### `问题1`

***

重写插入排序过程，使之按非升序排序。

#### `答案`

``` javascript
function insertionSort(arr) {
  let array = [...arr]

  for(let i=1; i<array.length; i++) {
    let key = array[i]
    let j = i - 1

    while(j>=0 && key>array[j]) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
  }

  return array
}
```


#### `问题2`

***

考虑查找问题：

输入：`n`个数的一个序列`A=[a1,a2,a3,...,an]`和一个值`v`
输出：下标`i`使得`v=A[i]`或者`v`不在`A`中出现时，输出`null`

写出**线性查找**的`javascript`代码。

``` javascript
function linearSearch(A, v) {
 for(let i=0; i<A.length; i++) {
   if(A[i] === v) {
     return i
   }
 }
 return null
}  
```



#### `问题3`

***

考虑把两个`n`位二进制整数加起来的问题，这两个整数分别存储在两个`n`元数组`A`和`B`中。这两个整数的和应按二进制形式存储在一个`（n + 1）`元的数组`C`中，请给出该问题的形式化描述，并写出`javascript`代码实现。


#### `答案`

**形式化描述：**

**输入：**  `A = [1,1,1,1]`、`B=[0,0,1,1]`

**输出：** `C = [1,1,0,1,1]`

$$\sum\limits_{i=1}^{n+1}C[i]*2^{i-1} = \sum\limits_{j=1}^{n}A[j]*2^{j-1} + \sum\limits_{k=1}^{n}B[k]*2^{k-1}$$ 

> 进制转化，$1111_{(2)}  =  15_{(10)},  1100_{(2)}  =  12_{(10)}, 11011_{(2)}  =  27_{(10)}$

``` javascript
function addBinary(A, B) {

  let ALength = A.length,
      BLength = B.length,
      length = ALength > BLength ? ALength : BLength,
      C = new Array(length + 1),
      carry = 0,
      sum,
      i

  for(i=0; i<length; i++) {
    A[i] |= 0
    B[i] |= 0
    sum = A[i] + B[i] + carry 
    C[i] = sum % 2
    carry = Math.floor(sum / 2)
  }

  C[i] = carry

  return C

}
```
